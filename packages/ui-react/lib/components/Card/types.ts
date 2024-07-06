import { ReactNode } from "react"
import { AnyJson } from "../../utils/types"
import { ComponentBaseWithClassName } from "../../utils"

export type CardProps = ComponentBaseWithClassName & {
  children: ReactNode
  animations?: AnyJson
}
