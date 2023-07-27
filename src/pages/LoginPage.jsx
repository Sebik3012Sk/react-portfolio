import BackToHome from "../components/BackToHome"
import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const LoginPage = () => {

  const [loginSubmitState,setLoginSubmitState] = useState(false);
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");  

  const loginSubmit = (e) => {

    projectFirestore.collection("users").get().then((snapshot) => {
        snapshot.docs.forEach((one_user) => {
            const data_one_user = one_user.data();

            if(data_one_user.email === email && data_one_user.password === password) {
               setLoginSubmitState(true) ;
            }

        })
        
    })
  }

  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center content-center">

        <BackToHome />
        
        <form onSubmit={loginSubmit} action={loginSubmitState ? window.location.assign("/") : console.error("Login Failed")} className="bg-slate-500 w-max h-full m-16 p-16 rounded-2xl">
            <h2 className="text-white text-3xl">Login Form</h2>
            <input onChange={ (e) => setEmail(e.target.value) } className="form-input" type="email" placeholder="Enter Your Email" /> <br />
            <input onChange={ (e) => setPassword(e.target.value) } className="form-input" type="password" placeholder="Enter Your Password" /> <br />
            <input className="btn-submit" type="submit" value="Log In" />
        </form>
    </div>
  )
}

export default LoginPage;