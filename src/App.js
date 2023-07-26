import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/myProjects";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about-me" element={ <AboutMe /> } />
          <Route exact path="/my-projects" element={ <MyProjects /> } />
          <Route exact path="/login-page" element={ <LoginPage /> } />
          <Route exact path="/register-page" element={ <RegisterPage /> } />
          <Route path="*" element={ <h1>Error</h1> } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
