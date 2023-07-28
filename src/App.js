import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/myProjects";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainAdmin from "./admin/MainAdmin";
import ErrorPage from "./pages/error/ErrorPage";


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
          <Route exact path="/admin-page/:passwd" element={ <MainAdmin /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;