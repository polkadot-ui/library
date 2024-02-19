/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import "@polkadot-ui/core/css/loaders/Cube/index.css";

export const Cube = () => (
  <div className="loader-cube-stage">
    <div className="scene">
      <div className="shadow"></div>
      <div className="jumper">
        <div className="spinner">
          <div className="scaler">
            <div className="loader">
              <div className="cuboid">
                <div className="cuboid-side"></div>
                <div className="cuboid-side"></div>
                <div className="cuboid-side"></div>
                <div className="cuboid-side"></div>
                <div className="cuboid-side"></div>
                <div className="cuboid-side"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
