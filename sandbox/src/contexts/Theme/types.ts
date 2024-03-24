export type Mode = "light" | "dark";

export interface ThemeContextInterface {
  toggleMode: (mode: Mode) => void;
  setTheme: (theme: string) => void;
  mode: Mode;
  theme: string;
}
