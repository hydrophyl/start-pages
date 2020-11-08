import "./App.css";
import StartPage from "./pages/start-page.jsx";
import { loadTheme } from "@fluentui/react";

loadTheme({
  defaultFontStyle: {
    fontFamily: "Hack, Quicksand , Consolas",
    fontWeight: "regular",
  },
  palette: {
    themePrimary: "#990628",
    themeLighterAlt: "#fbf1f4",
    themeLighter: "#efcad3",
    themeLight: "#e0a0af",
    themeTertiary: "#c2526c",
    themeSecondary: "#a51a3a",
    themeDarkAlt: "#8a0624",
    themeDark: "#74051f",
    themeDarker: "#560317",
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
    </div>
  );
}

export default App;
