/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { useState, ReactNode, useContext, createContext } from "react";
import * as defaults from "./defaults";
import type { UIContextInterface } from "./types";

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const setSideMenu = (v: boolean) => {
    setSideMenuOpen(v);
  };

  return (
    <UIContext.Provider
      value={{
        setSideMenu,
        sideMenuOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const UIContext = createContext<UIContextInterface>(
  defaults.defaultUIContext
);

export const useUi = () => useContext(UIContext);
