import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import HeaderProfile from "../components/HeaderProfile";

const MainAdmin = () => {

  const { passwd } = useParams();  

  projectFirestore.collection("users").get().then((snapshot) => {

    if(passwd === 9725) {
        return true;
    } else {
        window.location.assign("/");
    }
  })

  // function 

  return (
    <div>
        <HeaderProfile />
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa dolorum at earum sed reprehenderit. Ipsum laborum quas vel culpa distinctio nulla doloribus itaque veritatis beatae obcaecati, molestias quos vero!
            Odio, libero! Temporibus expedita nemo esse molestias, atque accusamus sint repudiandae ducimus explicabo obcaecati, quaerat autem reiciendis animi quasi dolore ab! In facere quo nostrum perferendis dolores corrupti, nemo optio?
            Fuga autem iusto veritatis amet quidem repellat eveniet cumque eos voluptatem esse rem quae nobis magnam aliquid, soluta molestias corrupti dicta ex modi doloremque perspiciatis est ad. Officia, totam quia!
            Omnis quae aliquid maiores consequatur vero saepe vel rerum, illo porro veniam, inventore eveniet alias, mollitia quos atque nesciunt. Atque eligendi consequatur ratione, nam iure at a molestiae voluptate dolores.
            Minus nisi illo molestias est nam. Fugit illo corrupti veniam error porro, consectetur accusantium cupiditate! Sint in repellat nisi quis esse perferendis rerum earum voluptatum iusto magnam! Tempore, voluptas commodi.
            Ullam labore, adipisci eligendi corrupti sequi quidem facere pariatur culpa suscipit. Aspernatur quisquam, laudantium sunt quae, voluptate ea debitis accusamus recusandae similique eum, quasi deserunt harum voluptatibus quidem dolores dignissimos.
            Dolor iusto nostrum molestiae, placeat fuga dolorum quisquam alias earum, officia possimus enim dignissimos pariatur, unde similique adipisci tenetur itaque. Ipsam eligendi consequatur veniam totam nam sit molestiae? Dignissimos, mollitia?
            Eos, perspiciatis culpa hic consequatur vero sapiente deserunt voluptatum perferendis sunt iusto tempora fuga corrupti laudantium dicta. Nostrum perspiciatis esse nihil maxime eveniet, ad veniam velit eius. Illum, debitis repellat.
            Atque nulla saepe et repudiandae vero dolore magnam dolor consequuntur, facere ratione quos autem repellat aperiam sapiente sequi. Perferendis, at vero? Earum, consectetur consequuntur in distinctio explicabo maiores debitis architecto.
            Quod velit aspernatur voluptas facere neque, illum mollitia, distinctio harum quia id, sequi voluptate! Doloribus accusantium, voluptatibus asperiores, soluta temporibus delectus dolorem tempore nihil fuga sequi in dolores, accusamus neque!
        </p>
    </div>
  )
}

export default MainAdmin;