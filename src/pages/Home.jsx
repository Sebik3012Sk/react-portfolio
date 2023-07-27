import Footer from "../components/Footer";
import HeaderProfile from "../components/HeaderProfile";
import MainProfile from "../components/MainProfile";
import NavBar from "../components/NavBar";

const Home = () => {

  return (
    <div className="bg-slate-300">
      <NavBar />
      <HeaderProfile />
      <MainProfile />
      <Footer />
    </div>
  )
}

export default Home;