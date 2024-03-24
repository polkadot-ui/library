import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => (
  <BrowserRouter basename="/">
    <Providers />
  </BrowserRouter>
);
