/* @license Copyright 2024 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
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

const generateFiles = async (f) => {
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

fs.copyFileSync(EXTERNAL_DIR + "json_export_index", JSON_DIR + "index.tsx");

for (const f of NETWORKS) {
  generateFiles(f);
}
