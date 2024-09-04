import { Dispatch, SetStateAction } from "react"
import { Accounts } from "./Accounts"
import { Extensions } from "./Extensions"
import { SelectedAccountType, ConnectConfiguration } from "./types"

export const Connect: React.FC<{
  selected: SelectedAccountType
  setSelected: Dispatch<SetStateAction<SelectedAccountType>>
  config?: ConnectConfiguration
}> = ({ setSelected, selected, config }) => {
  return (
    <Extensions setSelected={setSelected} config={config}>
      <Accounts selected={selected} setSelected={setSelected} config={config} />
    </Extensions>
  )
}
