import "@polkadot-ui/core/css/base/structure/Card/index.css";
import { CardProps } from "../common_types";
import { valEmpty } from "../../utils";

export const Card = ({ children, style, animations, className = "" }: CardProps) => (
  <div
    {...animations}
    style={style}
    className={"core-card" + valEmpty(className, className)}
  >
    {children}
  </div>
);
