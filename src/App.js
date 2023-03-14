import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import PizzaContent from "./components/Content/PizzaContent";
import PastaContent from "./components/Content/PastaContent";
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
        <Content />
        <PizzaContent />
        <PastaContent />
        <About />
        <Location />
      </div>
    </ThemeProvider>
  );
}

export default App;
