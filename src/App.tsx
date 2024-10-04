import "./App.css";
import { CompleteApps } from "./pages/projectspage/layout/sections/completeapps/CompleteApps";
import { SmallProjects } from "./pages/projectspage/layout/sections/smallprojects/SmallProjects";

// import { Main } from "./pages/homepage/layout/sections/main/Main";
// import { Projects } from "./pages/homepage/layout/sections/projects/Projects";
// import { Skills } from "./pages/homepage/layout/sections/skills/Skills";
// import { About } from "./pages/homepage/layout/sections/about/About";
// import { Contacts } from "./pages/homepage/layout/sections/contacts/Contacts";


function App() {
  return (
    <div className="App">
      
      {/* <Main/>
      <Projects/>
      <Skills/>
      <About/>
      <Contacts/> */}
<CompleteApps/>
<SmallProjects/>

    </div>
  );
}

export default App;
