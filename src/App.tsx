import "./App.css";
import { Main } from "./pages/homepage/layout/sections/main/Main";
import { Projects } from "./pages/homepage/layout/sections/projects/Projects";
import { Skills } from "./pages/homepage/layout/sections/skills/Skills";
import { About } from "./pages/homepage/layout/sections/about/About";
import { Contacts } from "./pages/homepage/layout/sections/contacts/Contacts";


function App() {
  return (
    <div className="App">
      
      <Main/>
      <Projects/>
      <Skills/>
      <About/>
      <Contacts/>

    </div>
  );
}

export default App;
