/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import type { OverlayProps } from "../OverlayProvider/types";
import { Modal } from "./Modal";
import { Canvas } from "./Canvas";
import { Background } from "./Background";

export const Overlay = ({
  modals = {},
  canvas = {},
  fallback,
  externalOverlayStatus,
}: OverlayProps) => (
  <>
    <Background externalOverlayStatus={externalOverlayStatus} />
    <Modal
      fallback={fallback}
      modals={modals}
      externalOverlayStatus={externalOverlayStatus}
    />
    <Canvas
      fallback={fallback}
      canvas={canvas}
      externalOverlayStatus={externalOverlayStatus}
    />
  </>
);
