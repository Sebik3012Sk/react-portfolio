import profile_image from "../images/profile-image.png";

const HeaderProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center w-full h-full bg-slate-100 border border-solid border-slate-400">
        <img className="shadow-slate-600 shadow-lg rounded-full mt-20" src={profile_image} alt="" />
        <p className="text-black text-2xl m-8">Sebastian Kučera</p>
        <p className="p-2 m-2 w-[45%] text-center border-b-slate-300 shadow-sm shadow-slate-600 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Illo eum tempore voluptate architecto natus. <br />
            alias adipisci eos quia dolores animi dolor explicabo <br />
            delectus porro odio a dolorem non modi  reiciendis. <br />
        </p>
    </div>
  )
}

export default HeaderProfile;