import { ReactNode, useState, CSSProperties } from "react"
import { Any, ComponentBaseWithClassName } from "../../utils"
import { getExtensionIcon, Extensions } from "@polkadot-ui/assets/extensions"

import {
  getLegacyProvider,
} from "@polkadot-api/legacy-polkadot-provider"
import { createScClient } from "@substrate/connect"
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
  name?: string
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

const { connectAccounts, relayChains } = getLegacyProvider(createScClient())
const chain = relayChains.westend2

// The Web/Wallets content
export const ContentItem = ({ type = "column", name }: ContentItemProps) => {
  const Icon = getExtensionIcon(name)

  const common = {
    display: "flex",
    background: "#eee",
    color: "#000",
    padding: "1rem 0",
    borderRadius: "1rem",
    margin: "0.5rem",
    alignItems: "center",
    cursor: "pointer"
  }
  const style = type === "column" ?
    { ...common, flexDirection: "column", width: "47%" } as CSSProperties :
    { ...common, flexDirection: "row", width: "100%" } as CSSProperties

  const item = Extensions[name];

  return (
    <div style={style} onClick={() => {
      const getTheAccount = async () => {
        return await chain.getAccounts()
      }
      connectAccounts(name)
      const accounts = getTheAccount()
      console.log("name:", accounts)
    }}>
      <div style={{ display: "flex", width: "3rem", margin: "1rem" }}><Icon /></div>
      <div style={{ display: "flex" }}>
        {item?.title || ""}
      </div>
    </div>
  )
}

// The content of the Modal
export const ConnectContent = ({ wallets, type = "column" }) =>
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {wallets.map((wallet: wallets) =>
      <ContentItem name={wallet} type={type} />
    )}
  </div>



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