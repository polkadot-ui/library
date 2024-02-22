/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import "@polkadot-ui/core/css/base/buttons/index.css";
import { ButtonCommonProps, ButtonIconProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentBaseWithClassName } from "../../../utils/types"
import { valEmpty, valOr, onMouseHandlers } from "../../../utils";

export type ButtonPrimaryInvertProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // use secondary network color.
    colorSecondary?: boolean;
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/**
 * @name ButtonPrimaryInvert
 * @description Invert primary button style.
 */
export const ButtonPrimaryInvert = ({
  colorSecondary,
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
}: ButtonPrimaryInvertProps) => (
  <button
    className={`btn-primary-invert${valEmpty(
      colorSecondary,
      "secondary-color"
    )}${valEmpty(grow, "grow")}${valOr(lg, "lg", "sm")}${valEmpty(
      marginRight,
      "m-right"
    )}${valEmpty(marginLeft, "m-left")}${valEmpty(marginX, "m-x")}${
      className ? ` ${className}` : ""
    }`}
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