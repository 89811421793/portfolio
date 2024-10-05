import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from "./pages/homepage/layout/sections/main/Main";
// import { CompleteApps } from "./pages/projectspage/layout/sections/completeapps/CompleteApps";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
