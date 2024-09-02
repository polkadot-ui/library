import React, { FC } from "react"
import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import { useEffect, useState, useSyncExternalStore } from "react"
import { extensionCtx } from "./extensionCtx"
import { getExtensionIcon } from "@polkadot-ui/assets/extensions"
import { useAvailableExtensions, useExtensionStorage } from "./hooks"
import type {
  CommonConfigType,
  ConfigType,
  NameUrlType,
  SelectedAccountType,
} from "./types"
import { Any } from "../../utils"
import { getExtensionsStore, localStorageKeyExtensions } from "./utils"

const { Provider } = extensionCtx

const allExtensions: NameUrlType[] = [
  {
    name: "enkrypt",
    url: "https://www.enkrypt.com/download",
  },
  {
    name: "subwallet-js",
    url: "https://www.subwallet.app/download.html",
  },
  {
    name: "talisman",
    url: "https://www.talisman.xyz/",
  },
  { name: "polkagate", url: "https://polkagate.xyz/" },
  {
    name: "polkadot-js",
    url: "https://polkadot.js.org/extension/",
  },
  {
    name: "fearless-wallet",
    url: "https://fearlesswallet.io/download",
  },
]

const extensionsStore = getExtensionsStore()
extensionsStore.subscribe(Function.prototype as Any)

export const ExtensionProvider: FC<
  PropsWithChildren<{
    setSelected: Dispatch<SetStateAction<SelectedAccountType>>
    config?: ConfigType & CommonConfigType
  }>
> = ({ children, setSelected, config }) => {
  const [extensionLocalStorage, setExtensionLocalStorage] = useExtensionStorage(
    localStorageKeyExtensions,
    ""
  )

  const [nonInstalledXts, setNonInstalledXts] = useState<NameUrlType[]>([])
  const availXts = useAvailableExtensions()

  const selXts = useSyncExternalStore(
    extensionsStore.subscribe,
    extensionsStore.getSnapshot
  )

  useEffect(() => {
    extensionsStore.revive(extensionLocalStorage)
  }, [extensionLocalStorage])

  useEffect(() => {
    setNonInstalledXts(
      allExtensions.filter((a) => availXts.indexOf(a.name) < 0)
    )
  }, [availXts])

  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : "0.1rem solid #8A8A8A"

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          gap: "1rem",
        }}
      >
        {availXts.map((xtName) => {
          const ExtensionIcon = getExtensionIcon(xtName)
          return (
            <div key={xtName} style={{ width: "100%" }}>
              <button
                style={{
                  display: "flex",
                  padding: "1rem 0",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  height: "4rem",
                  border: borderDesc,
                  borderRadius: "0.5rem",
                  background: selXts.has(xtName)
                    ? config?.selectedBgColor || "#CACACA"
                    : config?.bgColor || "",
                }}
                onClick={() => {
                  extensionsStore.onToggleExtension(xtName, setSelected)
                  setExtensionLocalStorage(xtName)
                }}
                key={xtName}
              >
                <div style={{ width: "5rem", height: "3rem" }}>
                  {ExtensionIcon && <ExtensionIcon />}
                </div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {xtName === "subwallet-js"
                    ? "Subwallet"
                    : xtName.charAt(0).toUpperCase() + xtName.slice(1)}
                </div>
              </button>
            </div>
          )
        })}
        {nonInstalledXts.length ? (
          <p>{config?.notInstalled || "-- Not installed --"}</p>
        ) : null}
        {nonInstalledXts.map(({ name, url }) => {
          const ExtensionIcon = getExtensionIcon(name)
          return (
            <div key={name} style={{ width: "100%" }}>
              <button
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  padding: "1rem 0",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  height: "5rem",
                  border: borderDesc,
                  borderRadius: "0.5rem",
                  background: selXts.has(name)
                    ? config?.bgColor || "#CACACA"
                    : "",
                }}
                onClick={() => {
                  window.open(url, "_blank")
                }}
                key={name}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "5rem", height: "3rem" }}>
                    {ExtensionIcon && <ExtensionIcon />}
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    {name === "subwallet-js"
                      ? "Subwallet"
                      : name.charAt(0).toUpperCase() + name.slice(1)}
                  </div>
                </div>
                <div style={{ paddingRight: "3rem" }}>
                  {config?.downloadIcon || "Download"}
                </div>
              </button>
            </div>
          )
        })}
      </div>
      <Provider value={[...selXts.values()]}>
        {selXts.size ? children : null}
      </Provider>
    </div>
  )
}
