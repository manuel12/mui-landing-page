import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import PizzaContent from './components/Content/PizzaContent';
import PastaContent from './components/Content/PastaContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content />
      <PizzaContent />
      <PastaContent />
    </div>
  );
}

export default App;
