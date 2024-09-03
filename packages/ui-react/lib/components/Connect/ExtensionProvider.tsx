import React, { FC } from "react"
import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import { useEffect, useState, useSyncExternalStore } from "react"
import { extensionCtx } from "./extensionCtx"
import { getExtensionIcon } from "@polkadot-ui/assets/extensions"
import { useAvailableExtensions, useExtensionStorage } from "./hooks"
import type {
  ConnectConfiguration,
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
    config?: ConnectConfiguration
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
          return (
            <ExtButton
              name={xtName}
              config={config}
              setSelected={setSelected}
              setExtensionLocalStorage={setExtensionLocalStorage}
              selXts={selXts}
            />
          )
        })}
        {nonInstalledXts.length ? (
          <p>{config?.notInstalled || "-- Not installed --"}</p>
        ) : null}
        {nonInstalledXts.map(({ name, url }) => {
          return (
            <ExtButton
              name={name}
              config={config}
              setSelected={setSelected}
              setExtensionLocalStorage={setExtensionLocalStorage}
              selXts={selXts}
              url={url}
            />
          )
        })}
      </div>
      <Provider value={[...selXts.values()]}>
        {selXts.size ? children : null}
      </Provider>
    </div>
  )
}

const ExtButton: React.FC<
  PropsWithChildren & {
    name: string
    config: ConnectConfiguration
    setSelected: Dispatch<SetStateAction<SelectedAccountType>>
    setExtensionLocalStorage: Any
    selXts: Any
    url?: string
  }
> = ({ name, config, setSelected, setExtensionLocalStorage, selXts, url }) => {
  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : "0.1rem solid #8A8A8A"

  const background = selXts.has(name)
    ? config?.bg?.selected || "#CACACA"
    : config?.bg?.color || ""

  const ExtensionIcon = getExtensionIcon(name)

  return (
    <div key={name} style={{ width: "100%" }}>
      <button
        style={{
          justifyContent: url ? "space-between" : "initial",
          display: "flex",
          padding: "1rem 0",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          border: borderDesc,
          borderRadius: "0.5rem",
          background: background,
        }}
        onClick={() => {
          if (url) {
            window.open(url, "_blank")
          } else {
            extensionsStore.onToggleExtension(name, setSelected)
            setExtensionLocalStorage(name)
          }
        }}
        key={name}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: `${config?.icon?.width || 5}rem`,
              height: `${config?.icon?.height || 2}rem`,
            }}
          >
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
        {url ? (
          <div style={{ paddingRight: "3rem" }}>
            {config?.downloadIcon || "Download"}
          </div>
        ) : null}
      </button>
    </div>
  )
}
