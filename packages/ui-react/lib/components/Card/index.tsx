import "@polkadot-ui/core/css/components/Card/index.css"
import { CardProps } from "./types"
import { valEmpty } from "../../utils"

export const Card = ({
  children,
  style,
  animations,
  className = "",
}: CardProps) => (
  <div
    {...animations}
    style={style}
    className={"core-card" + valEmpty(className, className)}
  >
    {children}
  </div>
)
