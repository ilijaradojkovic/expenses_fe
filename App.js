import "./global.css";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./src/config/reduxStore";
import { Routes } from "./src/Routes";
import { createTheme } from "./src/theme/theme";
import { useState } from "react";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const myTheme = createTheme(themeMode);

  return (
    <ReduxProvider store={reduxStore}>
      <PaperProvider theme={myTheme}>
        return (
        <Routes />
        );
      </PaperProvider>
    </ReduxProvider>
  );
}
