import { Pie } from "./Pie"
import type { Props, PieProps } from "./types"

export type ChartType = "pie"

export const Chart = (props: Props) => {
  const { type } = props

  switch (type) {
    case "pie":
    default: {
      const p = props as PieProps
      return <Pie {...p} />
    }
  }
}
