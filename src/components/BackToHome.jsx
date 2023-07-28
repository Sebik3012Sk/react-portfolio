import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <Link className="text-black text-lg float-left m-5" exact to="/">Back To Home</Link>
    </div>
  )
}

export default BackToHome