import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="fixed left-0 right-0 h-20 bg-slate-200 shadow-slate-400 shadow-lg">
        
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

        </nav>

    </div>
  )
}

export default NavBar