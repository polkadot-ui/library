import { LoaderProps } from "../types";
import "@polkadot-ui/core/css/loaders/Line/index.css";

export const Line = ({ text }: LoaderProps) => (
  <div className="line-loading">
    {text && <p>{text}</p>}
    <span></span>
  </div>
);
