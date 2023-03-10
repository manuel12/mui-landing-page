import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import PizzaContent from './components/Content/PizzaContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content />
      <PizzaContent />
    </div>
  );
}

export default App;
