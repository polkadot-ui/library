import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React, { useEffect, useSyncExternalStore } from "react"
import type {
  InjectedExtension,
  InjectedPolkadotAccount,
} from "polkadot-api/pjs-signer"
import { useAccountStorage, useSelectedExtensions } from "./hooks"
import { SignerCtx } from "./signerCtx"

import { getExtensionIcon } from "@polkadot-ui/assets/extensions"
import type { CommonConfigType, SelectedAccountType } from "./types"
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
  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : "0.1rem solid #8A8A8A"

  const [accountLocalStorage, setAccountLocalStorage] = useAccountStorage(
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
        const ExtensionIcon = getExtensionIcon(extension.name)
        return (
          <button
            onClick={() => {
              setAccountLocalStorage(account.address)
              setSelectedAccount({
                address: account.address,
                name: account.name,
                extension: extension.name,
                polkadotSigner: account.polkadotSigner,
                type: account.type,
              })
            }}
            key={account.address}
            style={{
              display: "flex",
              padding: "1rem 0",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: "5rem",
              border: borderDesc,
              borderRadius: "0.5rem",
              margin: "0.5rem 0",
              background:
                account.address === selectedAccount?.address
                  ? config?.selectedBgColor || "#CACACA"
                  : config?.bgColor || "",
            }}
          >
            {ExtensionIcon && (
              <div style={{ width: "5rem", height: "3rem" }}>
                <ExtensionIcon />
              </div>
            )}
            <div style={{ display: "flex", width: "40%" }}>
              {account.name ?? account.address}
            </div>
            {/* {account.name && (
        <div style={{ display: "flex", width: "30%" }}>
          {ellipsisFn(account.address)}
        </div>
      )} 
      <div style={{ display: "flex", width: "15%", color: "#6A6A6A" }}>
        {equalizer ? "Selected" : ""}
      </div>*/}
          </button>
        )
      })}
    </div>
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
  const [, setAccountLocalStorage] = useAccountStorage(
    localStorageKeyAccount,
    ""
  )

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "2rem",
          justifyContent: "space-between",
        }}
      >
        <h4>Accounts</h4>
        {selected?.address ? (
          <button
            style={{
              cursor: "pointer",
              color: "firebrick",
              fontWeight: "bold",
            }}
            onClick={() => {
              setSelected(null)
              setAccountLocalStorage(null)
            }}
          >
            Disconnect
          </button>
        ) : null}
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
