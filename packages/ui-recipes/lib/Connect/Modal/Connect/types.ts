// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import { Any } from "@polkadot-ui/react/utils/types";

export interface ExtensionProps {
  meta: ExtensionMetaProps;
  installed?: Any;
  size?: string;
  message?: string;
  flag?: boolean;
  status?: string;
}

export interface ExtensionMetaProps {
  id: string;
  title: string;
  status?: string;
  website: string | [string, string];
}

export interface ListWithInputProps {
  setInputOpen: (k: boolean) => void;
  inputOpen: boolean;
}

export interface forwardRefProps {
  setSection?: Any;
  readOnlyOpen: boolean;
  setReadOnlyOpen: (e: boolean) => void;
}
