import { Route, Routes } from "react-router-dom"
import { routes } from "./config/routes"
import { Menu } from "./components/Menu"
import { Header } from "./components/Header"
import { useUi } from "./contexts/UI"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Router = () => {
  const { sideMenuOpen } = useUi()
  console.log(sideMenuOpen)

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
            width: "20rem",
            display: "flex",
            float: "left",
          }}
        >
          <Menu />
        </div>

        <div
          className="core-main"
          style={{
            minHeight: "calc(100vh - 5.5rem)",
            width: "calc(100vw - 20rem)",
            display: "flex",
            justifyContent: "center",
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
  )
}

const ToggleMenu = () => {
  const { setSideMenu, sideMenuOpen } = useUi()

  if (sideMenuOpen) {
    return <></>
  }

  return (
    <button
      className="toggle-menu"
      type="button"
      onClick={() => setSideMenu(!sideMenuOpen)}
    >
      <FontAwesomeIcon icon={"bars"}></FontAwesomeIcon>{" "}
    </button>
  )
}
