import "./App.css";
import { Footer } from "./pages/homepage/layout/footer/Footer";
import { Header } from "./pages/homepage/layout/header/Header";
import { Main } from "./pages/homepage/layout/sections/main/Main";
import { Projects } from "./pages/homepage/layout/sections/projects/Projects";
import { Skills } from "./pages/homepage/layout/sections/skills/Skills";
import { About } from "./pages/homepage/layout/sections/about/About";
import { Contacts } from "./pages/homepage/layout/sections/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Projects/>
      <Skills/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
