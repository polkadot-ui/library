/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { useTheme } from "../../contexts/Theme";
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
