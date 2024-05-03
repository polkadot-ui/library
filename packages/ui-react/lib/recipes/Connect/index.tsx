import { ReactNode, useState, CSSProperties, useEffect } from "react"
import { Any, ComponentBaseWithClassName } from "../../utils"
import { getExtensionIcon, Extensions } from "@polkadot-ui/assets/extensions"

import {
  getInjectedExtensions,
  connectInjectedExtension,
} from "polkadot-api/pjs-signer"

import "./index.scss"

type wallets = "enkrypt" |
  "fearless-wallet" |
  "metamask-polkadot-snap" |
  "novawallet" |
  "polkadot-js" |
  "polkagate" |
  "subwallet-js" |
  "talisman"

export type ConnectProps = ContentItemProps & {
  title?: string | ReactNode
  CustomButton?: Any
  CustomModal?: Any
  customModalIsOpen?: boolean
  setCustomModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  wallets?: wallets[]
}

export type ContentItemProps = ComponentBaseWithClassName & {
  type?: string,
  name?: string,
  exists?: boolean
}

export type ModalStatusProps = ComponentBaseWithClassName & {
  modalIsOpen?: boolean
  setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

// The modal
export const Modal = ({ modalIsOpen, setModalIsOpen, children, style = {} }: ModalStatusProps) => {
  return (
    <div style={modalIsOpen ? Object.assign({}, style, { display: "block" }) : { display: "none" }}>
      <div className="modal-content">
        <span className="close" onClick={() => {
          setModalIsOpen(false)
        }}>&times;</span>
        {children}
      </div>
    </div>
  )
}

const getTheAccount = async (name: string) => {
  const ext = await connectInjectedExtension(name)
  const accounts = ext.getAccounts()
  return accounts
}

// The Web/Wallets content
export const ContentItem = ({ type = "column", name }: ContentItemProps) => {

  const [walletExists, setWalletExists] = useState<boolean>(false)

  useEffect(() => {
    const walletExists = async (name: string) => {
      try {
        await connectInjectedExtension(name).then(() => setWalletExists(true))
      } catch (err) {
        setWalletExists(false)
      }
    }
    walletExists(name)
  }, [name])

  const Icon = getExtensionIcon(name)

  const common = {
    display: "flex",
    background: "#eee",
    color: "#000",
    padding: "1rem 0",
    borderRadius: "1rem",
    margin: "0.5rem",
    alignItems: "center",
    cursor: "pointer",
    position: "relative"
  }
  const style = type === "column" ?
    { ...common, flexDirection: "column", width: "47%" } as CSSProperties :
    { ...common, flexDirection: "row", width: "100%" } as CSSProperties

  const item = Extensions[name];

  return (
    <div style={style} onClick={async () => {
      if (walletExists) {
        const accounts = await getTheAccount(name)
        console.log("GO TO THE ACCOUNTS WHEN CLICKED", accounts)
      }
    }}>
      <div style={{ display: "flex", width: "3rem", margin: "1rem" }}><Icon /></div>
      <div style={{ display: "flex" }}>
        {item?.title || ""}
      </div>
      <div style={{ display: "flex", position: "absolute", bottom: 0, fontSize: "1rem", color: walletExists ? "green" : "#999" }}>
        {walletExists ? "Installed" : "Not Installed"}
      </div>
    </div>
  )
}

// The content of the Modal
export const ConnectContent = ({ wallets, type = "column" }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {wallets.map((wallet: wallets) =>
        <ContentItem name={wallet} type={type} exists />
      )}
    </div>)
}

export const Connect = ({
  title = "Connect",
  CustomButton,
  CustomModal,
  setCustomModalIsOpen,
  customModalIsOpen,
  style,
  className,
  wallets,
  type
}: ConnectProps) => {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const Button = () => CustomButton ?
    <CustomButton onClick={() => {
      setCustomModalIsOpen ?
        setCustomModalIsOpen(!customModalIsOpen) :
        setModalIsOpen(!modalIsOpen)
    }}>{title}</CustomButton> :
    <button onClick={() => {
      setCustomModalIsOpen ?
        setCustomModalIsOpen(!customModalIsOpen)
        : setModalIsOpen(!modalIsOpen)
    }}>{title}</button>

  return (
    <>
      <Button />
      {CustomModal ||
        <Modal style={style} className={className} setModalIsOpen={setModalIsOpen} modalIsOpen={customModalIsOpen || modalIsOpen}>
          <ConnectContent type={type} wallets={wallets} />
        </Modal>
      }
    </>
  )
}