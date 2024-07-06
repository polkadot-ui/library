import { Router } from "./Router"
import { useTheme } from "./contexts/Theme"

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot-ui/react` themes are added to `Entry`.
export const Theme = () => {
  const { mode } = useTheme()

  return (
    <div className={`main theme-ui ui-theme-${mode}`}>
      <Router />
    </div>
  )
}
