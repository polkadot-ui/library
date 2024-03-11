// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import { faChrome, faUsb } from "@fortawesome/free-brands-svg-icons";
import {
  faExclamationTriangle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ModalConnectItem,
  ModalHardwareItem,
  Button,
} from "@polkadot-ui/react";
import { inChrome } from "@polkadot-ui/utils";
import { Ledger as LedgerIcon } from "@polkadot-ui/assets/extensions/jsx/Ledger";
import { useOverlay } from "@polkadot-ui/react/overlay/OverlayProvider/useOverlay";
import { ReactElement } from "react";
import { useConnectConfig } from "../../Providers/ConnectConfigProvider";

import "./index.scss";

export const Ledger = (): ReactElement => {
  const { network } = useConnectConfig();
  const { replaceModal } = useOverlay().modal;
  const url = "ledger.com";

  // Only render on Polkadot and Kusama networks.
  if (!["polkadot", "kusama"].includes(network)) {
    return <></>;
  }

  return (
    <ModalConnectItem>
      <ModalHardwareItem>
        <div className="body">
          <div className="status"></div>
          <div className="row">
            <div className="logo mono">
              <LedgerIcon />
            </div>
          </div>
          <div className="row margin">
            <Button
              type="text"
              text={network === "polkadot" ? "BETA" : "EXPERIMENTAL"}
              disabled
              marginRight
              iconLeft={
                network === "polkadot" ? undefined : faExclamationTriangle
              }
              style={{ opacity: 0.5 }}
            />
            <Button
              type="text"
              text="Chrome / Brave"
              disabled
              iconLeft={faChrome}
              style={{ opacity: 0.5 }}
            />
          </div>
          <div className="row margin">
            <Button
              type="primaryInvert"
              text="USB"
              onClick={() => replaceModal({ key: "ImportLedger" })}
              iconLeft={faUsb}
              iconTransform="shrink-1"
              disabled={!inChrome()}
            />
          </div>
        </div>
        <div className="foot">
          <a
            className="link"
            href={`https://${url}`}
            target="_blank"
            rel="noreferrer"
          >
            {url}
            <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-6" />
          </a>
        </div>
      </ModalHardwareItem>
    </ModalConnectItem>
  );
};
