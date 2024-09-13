import { FC } from "react"

import { PropsWithChildren, useEffect, useState } from "react"
import { ConnectIF } from "./types"
import { Connect } from "./Connect"

export const ConnectModal: FC<
  PropsWithChildren &
    ConnectIF & {
      title: string
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
        background: "#ccc",
        transition: "opacity 500ms",
      }}
    >
      <div
        style={{
          margin: "70px auto",
          padding: "20px",
          background: "#fff",
          borderRadius: "5px",
          position: "relative",
          transition: "all 5s ease-in-out",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "30px",
            transition: "all 200ms",
            fontSize: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#333",
            cursor: "pointer",
          }}
          onClick={closeHandler}
        >
          &times;
        </span>
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
