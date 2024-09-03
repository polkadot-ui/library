import { Dispatch, SetStateAction } from "react"
import { AccountProvider } from "./AccountProvider"
import { ExtensionProvider } from "./ExtensionProvider"
import { SelectedAccountType, ConnectConfiguration } from "./types"

export const Connect: React.FC<{
  selected: SelectedAccountType
  setSelected: Dispatch<SetStateAction<SelectedAccountType>>
  config?: ConnectConfiguration
}> = ({ setSelected, selected, config }) => {
  return (
    <ExtensionProvider setSelected={setSelected} config={config}>
      <AccountProvider
        selected={selected}
        setSelected={setSelected}
        config={config}
      />
    </ExtensionProvider>
  )
}
