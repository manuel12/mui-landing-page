import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Content/Home";
import Pizza from "./components/Content/Pizza";
import Pasta from "./components/Content/Pasta";
import About from "./components/Content/About";
import Location from "./components/Content/Location";

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontSize: 10
  }
});
theme = responsiveFontSizes(theme, {factor: 1});
console.log(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
        <Pizza />
        <Pasta />
        <About />
        <Location />
      </div>
    </ThemeProvider>
  );
}

export default App;
