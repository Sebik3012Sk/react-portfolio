import Images from "../data-images";
import MainText from "./MainText";

const MainProfile = () => {
  return (
    <div>

      <MainText text_size="text-2xl" text="What i Learn ?"/>  

      <div id="fotogallery-images">
        <div id="images" className="flex flex-row flex-wrap">

            <div className="one-image m-6">
                <img className="logo-image" src={Images[0].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[1].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[2].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[3].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[4].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[5].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[6].image} alt="" />
            </div>

            <div className="one-image m-6">
                <img className="logo-image" src={Images[7].image} alt="" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default MainProfile;
