// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import { VaultHardwareProvider } from "./HardwareProviders/Vault";
import { LedgerHardwareProvider } from "./HardwareProviders/Ledger";
import { NotificationsProvider } from "./NotificationsProvider";
import { ExtensionsProvider } from "@polkadot-ui/react/connect/ExtensionsProvider";
import { ExtensionAccountsProvider } from "@polkadot-ui/react/connect/ExtensionAccountsProvider";
import { OtherAccountsProvider } from "./OtherAccountsProvider";
import { ImportedAccountsProvider } from "./ImportedAccountsProvider";
import { HelpProvider } from "./HelpProvider";
import { PromptProvider } from "./PromptProvider";
import { ConnectType, DappInfo } from "./ConnectConfigProvider/types";
import { OverlayProvider } from "@polkadot-ui/react/overlay/OverlayProvider";
import {
  ActiveAccountsProvider,
  useActiveAccounts,
} from "./ActiveAccountsProvider";
import { useConnectConfig } from "./ConnectConfigProvider";

const provider = (prov, props = {}) => [prov, props];

export const ConnectProvider = ({ providers, children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};

export const connectInfo = (appInfo: DappInfo, connInfo?: ConnectType) => {
  const { activeAccount, setActiveAccount } = useActiveAccounts();
  const { network, ss58 } = useConnectConfig();

  const providers = [];

  let hardwareActive = connInfo?.hardwareActive;

  if (hardwareActive === undefined) {
    hardwareActive = true;
  }

  providers.push(provider(ActiveAccountsProvider));
  providers.push(provider(NotificationsProvider));
  if (hardwareActive) {
    providers.push(provider(LedgerHardwareProvider));
    providers.push(provider(VaultHardwareProvider));
  }
  providers.push(provider(ExtensionsProvider));
  providers.push(
    provider(ExtensionAccountsProvider, {
      network,
      ss58,
      dappName: appInfo.dappName,
      activeAccount,
      setActiveAccount,
    }),
  );
  providers.push(provider(OtherAccountsProvider));
  providers.push(provider(ImportedAccountsProvider));
  providers.push(provider(HelpProvider));
  providers.push(provider(PromptProvider));
  providers.push(provider(OverlayProvider));
  return providers;
};
