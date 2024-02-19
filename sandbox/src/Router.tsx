/* @license Copyright 2024 @polkadot-cloud/library authors & contributors",
"SPDX-License-Identifier: GPL-3.0-only */

import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { useUi } from "./contexts/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Router = () => (
  <>
    <div
      style={{
        position: "relative",
        display: "flex",
        flexGrow: 1,
      }}
    >
      {/* App header */}
      <Header />

      {/*Fixed menu toggle on smaller screens */}
      <ToggleMenu />

      {/* Left side menu */}
      <div
        style={{
          minHeight: "calc(100vh - 5.5rem)",
          zIndex: 7,
          position: "sticky",
          top: 0,
          height: "100vh",
          flex: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.1, 1, 0.2, 1)",
          width: "20rem",
        }}
      >
        <Menu />
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          flex: 1,
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
