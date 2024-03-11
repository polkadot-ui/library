/* @license Copyright 2024 @polkadot-ui/recipes authors & contributors
SPDX-License-Identifier: MIT */

import {
  faChevronRight,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@polkadot-ui/react";
import type { HeadingProps } from "./types";

export const Heading = ({
  connectTo,
  title,
  Icon,
  disabled,
  handleReset,
}: HeadingProps) => {
  return (
    <div className="heading-wrapper">
      <section>
        <h4>
          {Icon && <Icon />}
          <span>
            {connectTo && (
              <>
                {connectTo}{" "}
                <FontAwesomeIcon icon={faChevronRight} transform="shrink-5" />
              </>
            )}
            {title}
          </span>
        </h4>
      </section>
      <section>
        {handleReset && (
          <Button
            type="text"
            text="Reset"
            iconLeft={faCircleMinus}
            onClick={() => {
              if (typeof handleReset === "function") {
                handleReset();
              }
            }}
            disabled={disabled || false}
            marginLeft
          />
        )}
      </section>
    </div>
  );
};
