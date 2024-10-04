import "./App.css";
import { AboutInfo } from "./pages/aboutpage/layout/sections/aboutinfo/AboutInfo";
import { MyFunFacts } from "./pages/aboutpage/layout/sections/myfunfacts/MyFunFacts";
import { Skills } from "./pages/aboutpage/layout/sections/skills/Skills";


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
<AboutInfo/>
<Skills/>
<MyFunFacts/>

    </div>
  );
}

export default App;
