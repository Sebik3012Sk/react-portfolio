import Footer from "../components/Footer";
import MainText from "../components/MainText";
import NavBar from "../components/NavBar";
import OneProject from "../components/OneProject";

const myProjects = () => {
    return (
        <div className="bg-slate-300">
            <NavBar />
            <MainText text="My Projects"/>
            <OneProject projectName="C#-Login-Project" projectAdress="https://github.com/Sebik3012Sk/Csharp-Login-Project" />
            <OneProject projectName="React-Learn-Cook-Repo" projectAdress="https://github.com/Sebik3012Sk/react-learn-cook-repo" />
            <Footer />
        </div>
    )
}

export default myProjects;