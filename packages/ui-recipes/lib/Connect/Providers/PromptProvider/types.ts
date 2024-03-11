// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import { ReactNode } from "react";
import type { MaybeString } from "@polkadot-ui/react/utils/types";

export interface PromptContextInterface {
  openPromptWith: (o: ReactNode | null, s?: string) => void;
  closePrompt: () => void;
  setStatus: (s: number) => void;
  setPrompt: (d: MaybeString) => void;
  size: string;
  status: number;
  Prompt: ReactNode | null;
}
