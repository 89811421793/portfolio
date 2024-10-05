import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from "./pages/homepage/layout/sections/main/Main";
import { CompleteApps } from "./pages/projectspage/layout/sections/completeapps/CompleteApps";
import { AboutInfo } from "./pages/aboutpage/layout/sections/aboutinfo/AboutInfo";
import { Contacts } from "./pages/contactspage/layout/sections/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects/" element={<CompleteApps />} />
      <Route path="/about/" element={<AboutInfo />} />
      <Route path="/contacts/" element={<Contacts />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
