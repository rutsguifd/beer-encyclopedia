import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { CssBaseline } from "@mui/material";
import { ColorModeContextProvider } from "./UiConfig/ColorModeContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ColorModeContextProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <CssBaseline />
      <App />
    </Provider>
  </ColorModeContextProvider>
);
