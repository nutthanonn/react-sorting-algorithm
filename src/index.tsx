import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Red Hat Mono",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
