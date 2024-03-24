import { useTheme } from "../../contexts/Theme";
// Import the base ui-core styles to ensure the theme styles are applied instead of doc styles.
import "../../../../packages/ui-core/dist/css/styles/index.css";
// Import each supported theme here.
import "../../../../packages/ui-core/dist/accent/polkadot-relay.css";
import "../../../../packages/ui-core/dist/accent/kusama-relay.css";
import "../../../../packages/ui-core/dist/accent/westend-relay.css";
import "../../../../packages/ui-core/dist/theme/default/index.css";

import { PageProps } from "./types";

export const Page = ({ children, className, style }: PageProps) => {
  const { theme, mode } = useTheme();

  return (
    <div
      className={`page theme-${theme} theme-${mode}${
        className ? ` ${className}` : ``
      }`}
      style={style ? { ...style } : undefined}
    >
      {children}
    </div>
  );
};
