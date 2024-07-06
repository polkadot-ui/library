import { ComponentBaseWithClassName } from "../../utils"
import { ChartType } from "."

export type PieProps = {
  diameter: number
  items: { value: number; color: string }[]
  innerRadius?: number
  speed?: number
}

export type Props = ComponentBaseWithClassName & {
  // the type of the chart that need to be imported.
  type?: ChartType
} & PieProps
