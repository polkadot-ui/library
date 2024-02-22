/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ButtonHelpProps, ButtonHelp } from "../ButtonHelp";
import { ButtonMonoProps, ButtonMono } from "../ButtonMono";
import { ButtonMonoInvert } from "../ButtonMonoInvert";
import { ButtonOptionProps, ButtonOption } from "../ButtonOption";
import { ButtonPrimaryProps, ButtonPrimary } from "../ButtonPrimary";
import {
  ButtonPrimaryInvertProps,
  ButtonPrimaryInvert,
} from "../ButtonPrimaryInvert";
import { ButtonSecondaryProps, ButtonSecondary } from "../ButtonSecondary";
import { ButtonSubmitProps, ButtonSubmit } from "../ButtonSubmit";
import {
  ButtonSubmitInvertProps,
  ButtonSubmitInvert,
} from "../ButtonSubmitInvert";
import { ButtonTabProps, ButtonTab } from "../ButtonTab";
import { ButtonTertiaryProps, ButtonTertiary } from "../ButtonTertiary";
import { ButtonText } from "../ButtonText";
import { ButtonProps } from "../types";

export const Button = (props: ButtonProps) => {
  const { type } = props;

  switch (type) {
    case "help": {
      const p = props as ButtonHelpProps;
      return <ButtonHelp {...p} />;
    }
    case "mono": {
      const p = props as ButtonMonoProps;
      return <ButtonMono {...p} />;
    }
    case "monoInvert": {
      const p = props as ButtonMonoProps;
      return <ButtonMonoInvert {...p} />;
    }
    case "option": {
      const p = props as ButtonOptionProps;
      return <ButtonOption {...p} />;
    }
    case "primaryInvert": {
      const p = props as ButtonPrimaryInvertProps;
      return <ButtonPrimaryInvert {...p} />;
    }
    case "secondary": {
      const p = props as ButtonSecondaryProps;
      return <ButtonSecondary {...p} />;
    }
    case "submit": {
      const p = props as ButtonSubmitProps;
      return <ButtonSubmit {...p} />;
    }
    case "submitInvert": {
      const p = props as ButtonSubmitInvertProps;
      return <ButtonSubmitInvert {...p} />;
    }
    case "tab": {
      const p = props as ButtonTabProps;
      return <ButtonTab {...p} />;
    }
    case "tertiary": {
      const p = props as ButtonTertiaryProps;
      return <ButtonTertiary {...p} />;
    }
    case "text": {
      const p = props as ButtonMonoProps;
      return <ButtonText {...p} />;
    }
    case "primary":
    default: {
      const p = props as ButtonPrimaryProps;
      return <ButtonPrimary {...p} />;
    }
  }
};
