import "./App.css";
import { MonstersRolodex } from "./components/MonstersRolodex/MonstersRolodex";

export const App = () => (
  <div className="App">
    <header className="App-header">
      <MonstersRolodex key={"rolodex"} />
    </header>
  </div>
);
