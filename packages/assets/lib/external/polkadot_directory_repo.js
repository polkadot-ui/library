import fs from "fs";
import http from "https";
import { parse } from "yaml";

import { POLKADOT_NETWORK_URL, NETWORKS } from "./config.js";

const EXTERNAL_DIR = "./lib/external/";
const YAML_DIR = EXTERNAL_DIR + "yaml/";
const JSON_DIR = EXTERNAL_DIR + "json/";
const dirs = [YAML_DIR, JSON_DIR];

fs.rmSync(JSON_DIR, { recursive: true, force: true });
fs.rmSync(YAML_DIR, { recursive: true, force: true });

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

const writeStream = fs.createWriteStream(EXTERNAL_DIR + "index.ts");
writeStream.write(`export * from "./json/index";`);
writeStream.write(`export * from "./types";`);
writeStream.end();

const generateFiles = (f) => {
  const yamlFile = f + ".yaml";
  const jsonFile = f + ".json";
  const downloadFile = fs.createWriteStream(YAML_DIR + yamlFile);
  http.get(POLKADOT_NETWORK_URL + yamlFile, (response) => {
    response.pipe(downloadFile);
    // after download completed, convert to JSON and close filestream
    downloadFile.on("finish", () => {
      const ymlFile = fs.readFileSync(YAML_DIR + yamlFile, "utf8");
      fs.writeFileSync(
        `./lib/external/json/${jsonFile}`,
        JSON.stringify(parse(ymlFile))
      );
      downloadFile.close();
    });
  });
};

for (const f of NETWORKS) {
  generateFiles(f);
}

const createIndexFile = () => {
  const exportArray = [];
  const indexFile = fs.createWriteStream(JSON_DIR + "index.tsx", {
    flags: "a",
  });
  indexFile.write(
    `/* @license Copyright 2024 @polkadot-ui/library authors & contributors\n`
  );
  indexFile.write(`SPDX-License-Identifier: MIT */\n`);
  indexFile.write(`import { NetworkInformation } from "../types";\n`);

  for (const f of NETWORKS) {
    const f_lower = f.toLowerCase();
    indexFile.write(`import ${f_lower + "Json"} from "./${f}.json";\n`);
    indexFile.write(
      `const ${f_lower}: NetworkInformation = ${f_lower + "Json"};\n`
    );
    exportArray.push(f_lower);
  }

  indexFile.write(`export { ${exportArray.join(", ")} };\n`);
  indexFile.end();
};

createIndexFile();
