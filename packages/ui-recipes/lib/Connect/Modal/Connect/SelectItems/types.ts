// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { AnyJson, MaybeAddress } from "@polkadot-ui/react/utils/types";

export interface SelectItemsProps {
  layout?: "two-col" | "three-col";
  children?: ReactNode[];
}

export interface SelectItemProps {
  title: string;
  subtitle: string;
  icon: AnyJson;
  selected: boolean;
  onClick: () => void;
  layout?: "two-col" | "three-col";
  hoverBorder?: boolean;
  grow?: boolean;
  disabled?: boolean;
  includeToggle?: boolean;
  bodyRef?: AnyJson;
  containerRef?: AnyJson;
  account?: MaybeAddress;
  setAccount?: Dispatch<SetStateAction<MaybeAddress>>;
}
