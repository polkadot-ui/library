// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { MaybeAddress } from "@polkadot-ui/react/utils/types";
import { setStateWithRef } from "@polkadot-ui/utils";
import type { ActiveAccountsContextInterface, ActiveProxy } from "./types";
import { defaultActiveAccountsContext } from "./defaults";
import { useConnectConfig } from "../ConnectConfigProvider";

export const ActiveAccountsContext =
  createContext<ActiveAccountsContextInterface>(defaultActiveAccountsContext);

export const ActiveAccountsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { network } = useConnectConfig();
  // Store the currently active account.
  const [activeAccount, setActiveAccountState] = useState<MaybeAddress>(null);
  const activeAccountRef = useRef<string | null>(activeAccount);

  // Store the active proxy account.
  const [activeProxy, setActiveProxyState] = useState<ActiveProxy>(null);
  const activeProxyRef = useRef(activeProxy);

  // Setter for the active proxy account.
  const setActiveProxy = (newActiveProxy: ActiveProxy, updateLocal = true) => {
    if (updateLocal)
      if (newActiveProxy) {
        localStorage.setItem(
          `${network}_active_proxy`,
          JSON.stringify(newActiveProxy),
        );
      } else {
        localStorage.removeItem(`${network}_active_proxy`);
      }
    setStateWithRef(newActiveProxy, setActiveProxyState, activeProxyRef);
  };

  // Setter for the active account.
  const setActiveAccount = (
    newActiveAccount: MaybeAddress,
    updateLocalStorage = true,
  ) => {
    if (updateLocalStorage)
      if (newActiveAccount === null)
        localStorage.removeItem(`${network}_active_account`);
      else localStorage.setItem(`${network}_active_account`, newActiveAccount);

    setStateWithRef(newActiveAccount, setActiveAccountState, activeAccountRef);
  };

  // Getter for the active account.
  const getActiveAccount = () => activeAccountRef.current;

  // Disconnect from the active account on network change, but don't remove local record.
  useEffect(() => setActiveAccount(null, false), [network]);

  return (
    <ActiveAccountsContext.Provider
      value={{
        activeAccount: activeAccountRef.current,
        activeProxy: activeProxyRef.current?.address ?? null,
        activeProxyType: activeProxyRef.current?.proxyType ?? null,
        setActiveAccount,
        getActiveAccount,
        setActiveProxy,
      }}
    >
      {children}
    </ActiveAccountsContext.Provider>
  );
};

export const useActiveAccounts = () => useContext(ActiveAccountsContext);
