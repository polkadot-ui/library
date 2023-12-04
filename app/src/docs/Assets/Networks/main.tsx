/* @license Copyright 2023 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Note } from "@docs/Note";
import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { Example } from "./ExampleJson";
import {
  NetworkInterface,
  Chain,
  Chainspec,
  Specs,
  Contact,
  Endpoints,
} from "./Interfaces";
import { DocProps } from "@docs/types";
import { H3 } from "@docs/Headers";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Network's Information"
        subtitle="A directoy of Polkadot's ecosystem nodes and relevant information."
        npm={npm}
        status="stable"
      />
      <p>
        That directory provides an easy way to access various information for
        the networks of Polkadot ecosystem, such as node/chain information,
        repository and chainspec links, contact information, rpc and/or api
        endpoints etc.
      </p>
      <p>
        The information is retrieved from [Polkadot
        Directory](https://github.com/paritytech/polkadot_network_directory) of
        ParityTech, who are maintaining the directory and information in it;
      </p>
      <p>
        Once retrieved (<code>YAML</code> format) it is converted to{" "}
        <code>JSON</code> and exported from `assets`
      </p>
      <Note>
        <p>
          To open a PR to{" "}
          <a
            href="https://github.com/paritytech/polkadot_network_directory/tree/master/chain_info"
            target="_blank"
            rel="noreferrer"
          >
            add to this list or edit a network
          </a>{" "}
          from this list.
        </p>
      </Note>
      <p>
        The interface that the Network's JSON should follow, can be seen below
      </p>
      <NetworkInterface />
      <p>where the used interfaces are:</p>
      <ul>
        <li>the Chain interface:</li>
        <Chain />

        <li>the Chainspec interface:</li>
        <Chainspec />

        <li>the Specs interface:</li>
        <Specs />

        <li>the Contact interface:</li>
        <Contact />

        <li>the Endpoints interface:</li>
        <Endpoints />
      </ul>
      <H3>An example</H3>
      <p>
        Below the Polkadot network information are imported from the npm and are
        logged in the console:
      </p>
      <Example />
    </>
  );
};
