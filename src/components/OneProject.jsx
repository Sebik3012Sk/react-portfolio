import profile_image from "../images/profile-image.png";

const OneProject = (props) => {
  return (
    <section className="flex flex-col justify-center items-center">

        <div className="bg-slate-200 one-project flex flex-col justify-center items-center mt-16 mb-5 w-80 h-96 border-2 border-solid border-black rounded-xl m-auto">
            <img className="w-44 h-44 m-12 border-2 border-solid border-black rounded-full" src={profile_image} alt="" />
            <h2 className="text-2xl text-black">{props.projectName}</h2>
            <a href={props.projectAdress}>GitHub Link : {props.projectName}</a>
        </div>
        
    </section>
  )
}

export default OneProject;