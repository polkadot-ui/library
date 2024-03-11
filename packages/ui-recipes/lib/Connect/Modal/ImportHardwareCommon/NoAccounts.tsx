// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-ui/react";

import { useOverlay } from "@polkadot-ui/react/overlay/OverlayProvider/useOverlay";
import { Any } from "@polkadot-ui/react/utils/types";

import "./index.scss";

export const NoAccounts = ({ children, text, Icon }: Any) => {
  const { replaceModal } = useOverlay().modal;

  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <h1>
          <Button
            type="secondary"
            text="Back"
            iconLeft={faChevronLeft}
            iconTransform="shrink-3"
            onClick={async () =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
          />
        </h1>
      </div>
      <div className="no-accounts-wrapper">
        <div className="icon">
          <Icon />
        </div>
        <h3>{text}</h3>
        {children}
      </div>
    </>
  );
};
