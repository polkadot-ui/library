/* @license Copyright 2023 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const NetworkInterface = () => {
  const code = `export interface NetworkInformation {
    name: string;
    network_type: string;
    chain: Chain;
    chainspec: Chainspec;
    goals: any[];
    repository: string;
    validators: string[];
    release_cycle: string;
    specs: Specs;
    contacts: Contact[];
    faucet?: any;
    rpc_endpoints: RpcEndpoint[];
    api_endpoints: ApiEndpoint[];
    bootnodes: Bootnode[];
    documentation: string[];
    expectations: any[];
    features: string[];
    notes: any[];
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};

export const Chain = () => {
  const code = `export interface Chain {
    type: string;
    parent?: string;
    consensus: string;
    sudo: boolean;
    para_id?: number;
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};

export const Chainspec = () => {
  const code = `export interface Chainspec {
    http_url: string;
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};

export const Specs = () => {
  const code = `export interface Specs {
    block_time: number;
    decimals: number;
    token: string;
    ss58_format: number;
    ed?: number;
    lease_period?: number;
    era?: any;
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};

export const Contact = () => {
  const code = `export interface Contact {
    type: string;
    contact: string;
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};

export const Endpoints = () => {
  const code = `export type RpcEndpoint = Endpoint;
  export type ApiEndpoint = Endpoint;
  export type Bootnode = Endpoint;

  export interface Endpoint {
    name: string;
    url: string;
  }
`;

  return (
    <>
      <SimpleEditor code={code} standalone />
    </>
  );
};
