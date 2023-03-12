import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import PizzaContent from "./components/Content/PizzaContent";
import PastaContent from "./components/Content/PastaContent";
import About from "./components/Content/About";
import Location from "./components/Content/Location";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <PizzaContent />
      <PastaContent />
      <About />
      <Location />
    </div>
  );
}

export default App;
