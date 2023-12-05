/* @license Copyright 2023 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import ReactJson from "react-json-view";

import { polkadot } from "@packages/assets/dist/external";

export const Example = () => {
  const code = `// Import Polkadot's information object.

import { polkadot } from '@polkadot-cloud/assets/external';

console.log(polkadot);
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
      <Demo showThemes={false}>
        <ReactJson
          iconStyle={"circle"}
          enableClipboard={false}
          displayObjectSize={false}
          sortKeys={true}
          indentWidth={8}
          src={polkadot}
        />
      </Demo>
    </>
  );
};
