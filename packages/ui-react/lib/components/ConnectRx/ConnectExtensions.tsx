import {
  InjectedExtension,
  connectInjectedExtension,
} from "polkadot-api/pjs-signer"
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { extensionCtx, useAvailableExtensions } from "./extensionCtx"
import { ConnectConfiguration, NameUrlType } from "./types"
import { getExtensionIcon } from "@polkadot-ui/assets/extensions"
import { Any } from "../../utils"
import { allExtensions } from "./utils"

const { Provider } = extensionCtx

export const ConnectExtensions: React.FC<
  PropsWithChildren<{ config?: ConnectConfiguration }>
> = ({ children, config }) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const availableExtensions = useAvailableExtensions()
  const [nonInstalledXts, setNonInstalledXts] = useState<NameUrlType[]>([])

  useEffect(() => {
    setNonInstalledXts(
      allExtensions.filter((a) => availableExtensions.indexOf(a.name) < 0)
    )
  }, [availableExtensions])

  const [selectedExtension, setSelectedExtension] =
    useState<InjectedExtension | null>(null)

  const [selectedExtensions, setSelectedExtensions] =
    useState<Map<string, InjectedExtension>>()

  useEffect(() => {
    if (selectedExtension) {
      console.log("!!!", selectedExtension)
      const merged = new Map([[selectedExtension?.name, selectedExtension]])
      merged.set(selectedExtension?.name, selectedExtension)
      console.log("merged", merged, selectedExtensions)
      if (selectedExtensions)
      setSelectedExtensions(new Map([...merged, ...selectedExtensions]))
    }
  }, [selectedExtension, selectedExtensions])
  console.log("hovered", hovered)

  //   if (!selectedExtension)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          gap: "1rem",
        }}
      >
        {availableExtensions.map((extension) => {
          return (
            <>
              <ExtButton
                name={extension}
                setSelected={setSelectedExtension}
                extensions={selectedExtensions}
              />
            </>
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
              setSelected={setSelectedExtension}
              extensions={selectedExtensions}
              url={url}
            />
          )
        })}
      </div>
      {children && <Provider value={selectedExtension}>{children}</Provider>}
    </div>
  )

  //   return (
  //     <>
  //       <button
  //         onClick={() => {
  //           setSelectedExtension(null)
  //         }}
  //       >
  //         Disconnect
  //       </button>
  //       {children && <Provider value={selectedExtension}>{children}</Provider>}
  //     </>
  //   )
}

const ExtButton: React.FC<
  PropsWithChildren & {
    name: string
    config?: ConnectConfiguration
    setSelected?: Dispatch<SetStateAction<InjectedExtension>>
    extensions?: Map<string, InjectedExtension>
    url?: string
  }
> = ({ name, config, setSelected, extensions, url }) => {
  const borderDesc = config?.border
    ? config?.border?.size.concat(
        ` ${config?.border?.type}`,
        ` ${config?.border?.color}`
      )
    : ""

  const [accounts, setAccounts] = useState<number>(0)

  const [hovered, setHovered] = useState<boolean>(false)
  const [bg, setBg] = useState<string>(
    extensions?.has(name)
      ? config?.bg?.selected || "#CACACA"
      : config?.bg?.color || ""
  )

  useEffect(() => {
    if (hovered) {
      setBg(config?.hover?.bg || "#ECECEC")
    } else {
      setBg(
        extensions?.has(name)
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

  const ExtensionIcon = getExtensionIcon(name)

  return (
    <div key={name} style={{ width: "100%" }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          justifyContent: "space-between",
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
            connectInjectedExtension(name).then(setSelected)
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
            <span style={{ color: config?.accountColor || "green" }}>
              {accounts
                ? `| ${accounts} account${accounts > 1 ? "s" : ""}`
                : null}
            </span>
          </div>
        </div>
        <div style={{ paddingRight: "3rem" }}>
          {url
            ? config?.downloadIcon || "Download"
            : extensions?.has(name)
              ? config?.disconnectIcon || "Disconnect"
              : ""}
        </div>
      </button>
    </div>
  )
}
