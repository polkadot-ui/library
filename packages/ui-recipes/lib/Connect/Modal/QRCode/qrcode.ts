// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import _qrcode from "qrcode-generator";
import { Any } from "@polkadot-ui/react/utils/types";

// A small hurdle to jump through, just to get the default/default correct (as generated)
const qrcode: typeof _qrcode = _qrcode;

// HACK The default function take string -> number[], the Uint8array is compatible
// with that signature and the use thereof
(qrcode as Any).stringToBytes = (data: Uint8Array): Uint8Array => data;

export { qrcode };
