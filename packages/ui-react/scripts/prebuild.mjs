/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { generateExportEntries } from "./generateExportEntries.mjs";
import { generateTypeExports } from "./generateTypeExports.mjs";

const main = async () => {
  // Generate type exports.
  generateTypeExports("./lib", "./lib/types/index.ts");

  // Generate entry files.
  await generateExportEntries({ ignore: ["styles", "svg", "utils"] });
};

await main();
