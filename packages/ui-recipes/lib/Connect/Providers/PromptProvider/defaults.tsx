// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

/* eslint-disable @typescript-eslint/no-empty-function, no-unused-vars, @typescript-eslint/no-unused-vars */

import type { PromptContextInterface } from "./types";

export const defaultPromptContext: PromptContextInterface = {
  openPromptWith: (o, s) => {},
  closePrompt: () => {},
  setStatus: (s) => {},
  setPrompt: (d) => {},
  size: "small",
  status: 0,
  Prompt: null,
};
