import "./App.css";
import { GreetingCard } from "./Components/GreetingCard/GreetingCard";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello 🖐️</h1>
        <GreetingCard title="Good Morning..! ⛅" />
      </header>
    </div>
  );
};

export default App;
