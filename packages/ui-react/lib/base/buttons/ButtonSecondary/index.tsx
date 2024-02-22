/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import "@polkadot-ui/core/css/base/buttons/index.css";
import { ButtonCommonProps, ButtonIconProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentBaseWithClassName } from "../../../utils/types"
import { valOr, valEmpty, onMouseHandlers } from "../../../utils";

export type ButtonSecondaryProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/**
 * @name ButtonSecondary
 * @description Secondary button style used within the main interface of dashboards.
 */
export const ButtonSecondary = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  lg,
  marginLeft,
  marginRight,
  marginX,
  className,
  style,
  text,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonSecondaryProps) => (
  <button
    className={`btn-secondary${valOr(lg, "lg", "sm")}${valEmpty(
      grow,
      "grow"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}${className ? ` ${className}` : ""}`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    {iconLeft ? (
      <FontAwesomeIcon
        icon={iconLeft}
        className={valOr(text, "icon-left", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
    {text ? text : null}
    {iconRight ? (
      <FontAwesomeIcon
        icon={iconRight}
        className={valOr(text, "icon-right", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
  </button>
);