import BackToHome from "../components/BackToHome"
import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const RegisterPage = () => {

  const [registerState , setRegisterState] = useState(false);  
  const [username , setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [passwordAgain , setPasswordAgain] = useState("");
  const [email,setEmail] = useState("");  

  const registerSubmit = (e) => {

    setRegisterState(true);

    let finally_obj = {
        username : username,
        password : password,
        passwordAgain : passwordAgain,
        email : email
    }

    if(password !== passwordAgain) {
        finally_obj.password = null;
        finally_obj.passwordAgain = null;
    } 

    projectFirestore.collection("users").add(finally_obj);

  } 


  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center content-center">

        <BackToHome />
        
        <form className="bg-slate-500 w-max h-full m-16 p-16 rounded-2xl" onSubmit={registerSubmit} action={registerState ? `/` : console.log("error")}>

            <h2 className="text-white text-3xl">Register Form</h2>

            <input onChange={ (e) => setUsername(e.target.value) } className="form-input" type="text" placeholder="Enter Your Username" /> <br />
            <input onChange={ (e) => setEmail(e.target.value) } className="form-input" type="email" placeholder="Enter Your Email" /> <br />
            <input onChange={ (e) => setPassword(e.target.value) } className="form-input" type="password" placeholder="Enter Your Password" /> <br />
            <input onChange={ (e) => setPasswordAgain(e.target.value) } className="form-input" type="password" placeholder="Enter Your Password Again" /> <br />
            <input className="btn-submit" type="submit" value="Register" />
        </form>
    </div>
  )
}

export default RegisterPage