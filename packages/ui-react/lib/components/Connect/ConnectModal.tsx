import { FC } from "react"

import { PropsWithChildren, useEffect, useState } from "react"
import { ConnectIF } from "./types"
import { Connect } from "./Connect"

export const ConnectModal: FC<
  PropsWithChildren &
    ConnectIF & {
      title?: string
      show: boolean
      onClose: (a: boolean) => void
    }
> = ({
  title,
  show,
  onClose,
  selected,
  setSelected,
  config,
  type = "onepage",
  onSelectExtensions,
  getConnectedAccounts,
}) => {
  const [sh, setSh] = useState(false)

  const closeHandler = () => {
    setSh(false)
    onClose(false)
  }

  useEffect(() => {
    setSh(show)
  }, [show])

  return (
    <div
      style={{
        visibility: sh ? "visible" : "hidden",
        opacity: sh ? "1" : "0",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: config?.modal?.areaColor || `rgba(82,82,82,0.9)`,
        transition: "opacity 500ms",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: config?.modal?.margin || "0 auto",
          padding: config?.modal?.padding || "2rem",
          background: config?.modal?.bgColor || "#fff",
          borderRadius: config?.modal?.borderRadius || "1rem",
          position: "relative",
          transition: "all 5s ease-in-out",
          height: "fit-content",
          width: config?.modal?.width,
          top: config?.modal?.top || "30%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: config?.modal?.titleColor || "#000",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{title}</span>
          <span
            style={{
              transition: "all 200ms",
              fontSize: "2rem",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={closeHandler}
          >
            &times;
          </span>
        </div>
        <Connect
          type={type}
          selected={selected}
          setSelected={setSelected}
          config={config}
          getConnectedAccounts={getConnectedAccounts}
          onSelectExtensions={onSelectExtensions}
        />
      </div>
    </div>
  )
}
