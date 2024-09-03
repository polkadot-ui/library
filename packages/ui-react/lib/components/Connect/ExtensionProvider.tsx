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

  const selectedExtensions = useSyncExternalStore(
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
        {availXts.map((name: string) => {
          return (
            <ExtButton
              name={name}
              config={config}
              setSelected={setSelected}
              setExtensionLocalStorage={setExtensionLocalStorage}
              extensions={selectedExtensions}
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
              extensions={selectedExtensions}
              url={url}
            />
          )
        })}
      </div>
      <Provider value={[...selectedExtensions.values()]}>
        {selectedExtensions.size ? children : null}
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
    extensions: Any
    url?: string
  }
> = ({
  name,
  config,
  setSelected,
  setExtensionLocalStorage,
  extensions,
  url,
}) => {
  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : ""

  const [accounts, setAccounts] = useState<number>(0)

  const [hovered, setHovered] = useState<boolean>(false)
  const [bg, setBg] = useState<string>(
    extensions.has(name)
      ? config?.bg?.selected || "#CACACA"
      : config?.bg?.color || ""
  )

  useEffect(() => {
    if (hovered) {
      setBg(config?.hover?.bg || "#ECECEC")
    } else {
      setBg(
        extensions.has(name)
          ? config?.bg?.selected || "#CACACA"
          : config?.bg?.color || ""
      )
    }
  }, [
    config?.bg?.color,
    config?.bg?.selected,
    config?.hover?.bg,
    extensions,
    hovered,
    name,
  ])

  useEffect(() => {
    if (extensions.has(name)) {
      setAccounts(extensions.get(name).getAccounts().length)
    } else {
      setAccounts(0)
    }
  }, [extensions, name])

  const ExtensionIcon = getExtensionIcon(name)

  return (
    <div key={name} style={{ width: "100%" }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          justifyContent: url ? "space-between" : "initial",
          display: "flex",
          padding: "1rem 0",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          border: borderDesc,
          borderRadius: "0.5rem",
          background: bg,
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
              : name.charAt(0).toUpperCase() + name.slice(1)}{" "}
            {accounts
              ? `| ${accounts} account${accounts > 1 ? "s" : ""}`
              : null}
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
