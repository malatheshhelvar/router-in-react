import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import AboutUsPage from "./Screens/AboutUsPage";
import './App.css';
import ContactUsPage from "./Screens/ContactUsPage";
import { NavLink } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";

//function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <HomePage />}  />
        <Route path = "/About" element = { <AboutUsPage />} />
        <Route path = "/Contact" element = { <ContactUsPage />} />
        <Route path = "/example" element = { <div>Hi this is an example screen<br></br><button><NavLink to= "/">Come back</NavLink></button></div>} />
        <Route path = "*" element = { <ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
