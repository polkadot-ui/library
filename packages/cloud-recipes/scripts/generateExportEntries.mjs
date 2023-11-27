// Copyright 2023 @polkadot-cloud/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { existsSync } from "fs";
import fs from "fs/promises";
import { format } from "prettier";

// Generates bundle entry files based on the content of the lib/ folder.
//
// - `lib/index.tsx` is generated to house all component exports.
// - `lib/providers/index.tsx` is generated to house all provider exports.
// - `lib/hooks/index.tsx` is generated to house all hook exports.
// - `lib/types/index.tsx` is generated to house all types.
export const generateExportEntries = async ({ ignore }) => {
  // Rmmove stale folders if they exist.
  const pathsToRemove = [
    { path: "./lib/types.ts", options: {} },
    { path: "./lib/providers", options: { recursive: true } },
    { path: "./lib/hooks", options: { recursive: true } },
  ];
  await Promise.all(
    pathsToRemove.map(({ path, options }) =>
      existsSync(path) ? fs.rm(path, options) : Promise.resolve()
    )
  );

  // Iterates through a provided directory and returns all component paths.
  const getDirFolders = async (dir) => {
    const folders = [];

    // If directory contains index.tsx file, stop.
    if (dir !== "./lib" && existsSync(`${dir}/index.tsx`)) {
      folders.push(dir);
    } else {
      // for each folder in this directory, loop again.
      for (let file of await fs.readdir(dir))
        if ((await fs.stat(dir + "/" + file)).isDirectory())
          if (!ignore.includes(file))
            folders.push(...(await getDirFolders(dir + "/" + file)));
    }
    return folders;
  };

  // Iterate through all files and construct entries.
  const components = [];
  for (let name of await getDirFolders("./lib")) {
    let isComponent = true;

    // If not provider or hook, add `name`'s index.tsx to component exports.
    if (isComponent) {
      components.push({
        export: name.split("/").pop(),
        from: name,
      });
    }
  }

  // Construct entry files.
  await writeFormattedFile(
    "./lib/index.tsx",
    generateExportLines(components, "./")
  );


// Generate export lines for an array of items.
const generateExportLines = (items, basePath) =>
  items
    .map(
      (item) =>
        `export { ${item.export} } from "${basePath}${item.from
          .split("/")
          .slice(2)
          .join("/")}";`
    )
    .join("\n");

// Write formatted TypeScript code to a file.
const writeFormattedFile = async (path, lines) => {
  const content = await format(lines, { parser: "typescript" });
  await fs.writeFile(path, content);
};
