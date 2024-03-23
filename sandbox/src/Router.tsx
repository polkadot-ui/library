/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { useUi } from "./contexts/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@polkadot-ui/core/css/base/structure/Body/index.css";
import "@polkadot-ui/core/css/base/structure/Main/index.css";
import "@polkadot-ui/core/css/base/structure/Side/index.css";


export const Router = () => {
  const { sideMenuOpen } = useUi();

  return (
    <>
      <div className="core-body">
        {/* App header */}
        <Header />

        {/*Fixed menu toggle on smaller screens */}
        <ToggleMenu />

        {/* Left side menu */}
        <div
          style={{
            minHeight: "calc(100vh - 5.5rem)",
            width: "20rem"
          }}
        >
          <Menu />
        </div>

        <div className="core-main"
          style={{
            minHeight: "calc(100vh - 5.5rem)",
          }}
        >
          <div className="main-area">
            <div>
              <Routes>
                {routes.map((route) => (
                  <Route key={`nav_page_${route.path}`} {...route} />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ToggleMenu = () => {
  const { setSideMenu, sideMenuOpen } = useUi();

  if (sideMenuOpen) {
    return <></>;
  }

  return (
    <button
      className="toggle-menu"
      type="button"
      onClick={() => setSideMenu(!sideMenuOpen)}
    >
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>{" "}
    </button>
  );
};
