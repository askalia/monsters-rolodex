import "./App.css";
import { MonstersRolodex } from "./components/MonstersRolodex/MonstersRolodex";

export const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Monster Rolodex</h1>
      <MonstersRolodex key={"rolodex"} />
    </header>
  </div>
);
