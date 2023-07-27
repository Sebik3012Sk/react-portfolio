import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="fixed left-0 right-0 bg-slate-200">
        
        <nav className="h-10 w-full p-2">
            
            <ul className="flex flex-row">
                
                <li className="item-menu">
                    <Link to="/">Home</Link>
                </li>

                <li className="item-menu">
                    <Link to="/about-me">About Me</Link>
                </li>

                <li className="item-menu">My Webpages</li>

                <li className="item-menu">
                    <Link to="/my-projects">My Projects</Link>
                </li>

            </ul>

            <ul className="flex flex-row float-right space-x-5">

                <li className="mb-3 text-xl text-black">
                    <Link to="/login-page">Log In</Link>
                </li>

                <li className="mb-3 text-xl text-black">
                    <Link to="/register-page">Register</Link>
                </li>

            </ul>
        </nav>

    </div>
  )
}

export default NavBar