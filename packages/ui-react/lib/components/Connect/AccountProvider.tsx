import { Any } from "../../utils"
import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React, {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react"
import type {
  InjectedExtension,
  InjectedPolkadotAccount,
} from "polkadot-api/pjs-signer"
import { useStoredAccount, useSelectedExtensions } from "./hooks"
import { SignerCtx } from "./signerCtx"

import { getExtensionIcon } from "@polkadot-ui/assets/extensions"
import type {
  CommonConfigType,
  ConnectConfiguration,
  SelectedAccountType,
} from "./types"
import { localStorageKeyAccount } from "./utils"

const Accounts: React.FC<{
  extension: InjectedExtension
  setSelectedAccount: React.Dispatch<React.SetStateAction<SelectedAccountType>>
  selectedAccount: SelectedAccountType
  config: CommonConfigType
}> = ({ extension, setSelectedAccount, selectedAccount, config }) => {
  const accounts = useSyncExternalStore(
    extension.subscribe,
    extension.getAccounts
  )

  const [accountLocalStorage, setAccountLocalStorage] = useStoredAccount(
    localStorageKeyAccount,
    ""
  )

  useEffect(() => {
    const accounts = extension.getAccounts()

    accounts.map((account) => {
      if (account.address === accountLocalStorage) {
        setSelectedAccount({
          address: account.address,
          name: account.name,
          extension: extension.name,
          polkadotSigner: account.polkadotSigner,
          type: account.type,
        })
        return
      }
    })
  }, [accountLocalStorage, extension, setSelectedAccount])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {accounts.map((account: InjectedPolkadotAccount) => {
        return (
          <Account
            extensionName={extension.name}
            setAccountLocalStorage={setAccountLocalStorage}
            setSelectedAccount={setSelectedAccount}
            selectedAccount={selectedAccount}
            account={account}
            config={config}
          />
        )
      })}
    </div>
  )
}

const Account: React.FC<{
  extensionName: string
  setAccountLocalStorage: Any
  selectedAccount: SelectedAccountType
  setSelectedAccount: React.Dispatch<React.SetStateAction<SelectedAccountType>>
  account: InjectedPolkadotAccount
  config: ConnectConfiguration
}> = ({
  extensionName,
  setAccountLocalStorage,
  selectedAccount,
  setSelectedAccount,
  account,
  config,
}) => {
  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : ""

  const ExtensionIcon = getExtensionIcon(extensionName)
  const compareAddress = useMemo(
    () => account.address === selectedAccount?.address,
    [account.address, selectedAccount?.address]
  )
  const [hovered, setHovered] = useState<boolean>(false)
  const [bg, setBg] = useState<string>(
    compareAddress ? config?.bg?.selected || "#CACACA" : config?.bg?.color || ""
  )

  useEffect(() => {
    if (hovered) {
      setBg(config?.hover?.bg || "#ECECEC")
    } else {
      setBg(
        compareAddress
          ? config?.bg?.selected || "#CACACA"
          : config?.bg?.color || ""
      )
    }
  }, [
    compareAddress,
    config?.bg?.color,
    config?.bg?.selected,
    config?.hover?.bg,
    hovered,
  ])

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (compareAddress) {
          setAccountLocalStorage(null)
          setSelectedAccount(null)
        } else {
          setAccountLocalStorage(account.address)
          setSelectedAccount({
            address: account.address,
            name: account.name,
            extension: extensionName,
            polkadotSigner: account.polkadotSigner,
            type: account.type,
          })
        }
      }}
      key={account.address}
      style={{
        justifyContent: compareAddress ? "space-between" : "initial",
        display: "flex",
        padding: "1rem 0",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        border: borderDesc,
        borderRadius: "0.5rem",
        margin: "0.5rem 0",
        background: bg,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {ExtensionIcon && (
          <div
            style={{
              width: `${config?.icon?.width || 5}rem`,
              height: `${config?.icon?.height || 2}rem`,
            }}
          >
            <ExtensionIcon />
          </div>
        )}
        <div
          style={{
            position: "relative",
          }}
        >
          {account.name ?? account.address}
        </div>
      </div>
      {account.address === selectedAccount?.address ? (
        <div style={{ paddingRight: "3rem" }}>
          {config?.disconnectIcon || "Disconnect"}
        </div>
      ) : null}
    </button>
  )
}

export const AccountProvider: React.FC<
  PropsWithChildren<{
    selected: SelectedAccountType
    setSelected: Dispatch<SetStateAction<SelectedAccountType>>
    config?: CommonConfigType
  }>
> = ({ children, selected, setSelected, config }) => {
  const extensions = useSelectedExtensions()

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "1rem",
          justifyContent: "space-between",
        }}
      >
        <h4>Accounts</h4>
      </div>
      {extensions.map((extension) => (
        <Accounts
          config={config}
          key={extension.name}
          {...{ extension }}
          setSelectedAccount={setSelected}
          selectedAccount={selected}
        />
      ))}
      <SignerCtx account={selected}>{children}</SignerCtx>
    </>
  )
}
