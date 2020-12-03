import "./App.css";
import StartPage from "./pages/start-page.jsx";
/* import Zustandigkeit from "./pages/zustand.jsx"; */
import { loadTheme } from "@fluentui/react";

loadTheme({
  defaultFontStyle: {
    fontFamily: "SegoeUI, Montserrat, Quicksand , Consolas",
    fontWeight: "regular",
  },
  palette: {
    themePrimary: "#c239b3",
    themeLighterAlt: "#fdf5fc",
    themeLighter: "#f5d9f2",
    themeLight: "#edbae7",
    themeTertiary: "#da7dcf",
    themeSecondary: "#c94bba",
    themeDarkAlt: "#ae33a0",
    themeDark: "#932b87",
    themeDarker: "#6d1f64",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

function App() {
  return (
    <div className="App">
      <StartPage />
      {/* <Zustandigkeit /> */}
    </div>
  );
}

export default App;
