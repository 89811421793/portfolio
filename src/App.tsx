import "./App.css";
// import { Main } from "./pages/homepage/layout/sections/main/Main";
// import { Projects } from "./pages/homepage/layout/sections/projects/Projects";
// import { About } from "./pages/homepage/layout/sections/about/About";
// import { Contacts } from "./pages/homepage/layout/sections/contacts/Contacts";
// import { Skills } from "./pages/homepage/layout/sections/skills/Skills";
import { AboutInfo } from "./pages/aboutpage/layout/sections/aboutinfo/AboutInfo";
import { MyFunFacts } from "./pages/aboutpage/layout/sections/myfunfacts/MyFunFacts";
import { Skills } from "./pages/aboutpage/layout/sections/skills/Skills";

function App() {
  return (
    <div className="App">
      {/* <Main />
      <Projects />
      <Skills />
      <About />
      <Contacts /> */}
<AboutInfo/>
<Skills/>
<MyFunFacts/>

    </div>
  );
}

export default App;
