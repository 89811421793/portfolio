import "./App.css";
import { Contacts } from "./pages/contactspage/layout/sections/contacts/Contacts";
import { AllMedia } from "./pages/contactspage/layout/sections/mediasection/AllMedia";
// import { Main } from "./pages/homepage/layout/sections/main/Main";
// import { Projects } from "./pages/homepage/layout/sections/projects/Projects";
// import { About } from "./pages/homepage/layout/sections/about/About";
// import { Contacts } from "./pages/homepage/layout/sections/contacts/Contacts";
// import { Skills } from "./pages/homepage/layout/sections/skills/Skills";


function App() {
  return (
    <div className="App">
      {/* <Main />
      <Projects />
      <Skills />
      <About />
      <Contacts /> */}
<Contacts/>
<AllMedia/>

    </div>
  );
}

export default App;
