/* @license Copyright 2023 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import fs from "fs";
import http from "https";
import { parse } from "yaml";

import { polkadot_network_url, networks } from "./network_config.js";

const dirs = ["./lib/ecosystem/yaml", "./lib/ecosystem/json"];

fs.rmSync("./lib/ecosystem/json", { recursive: true, force: true });
fs.rmSync("./lib/ecosystem/yaml", { recursive: true, force: true });

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

const some = async (f) => {
  const yamlFile = f + ".yaml";
  const jsonFile = f + ".json";
  const downloadFile = fs.createWriteStream("./lib/ecosystem/yaml/" + yamlFile);
  http.get(polkadot_network_url + yamlFile, (response) => {
    response.pipe(downloadFile);
    // after download completed, convert to JSON and close filestream
    downloadFile.on("finish", () => {
      const ymlFile = fs.readFileSync(
        "./lib/ecosystem/yaml/" + yamlFile,
        "utf8"
      );
      fs.writeFileSync(
        `./lib/ecosystem//json/${jsonFile}`,
        JSON.stringify(parse(ymlFile))
      );
      downloadFile.close();
    });
  });
};

fs.copyFileSync(
  "./lib/ecosystem/json_export_index.txt",
  "./lib/ecosystem/json/index.tsx"
);

for (const f of networks) {
  some(f);
}
