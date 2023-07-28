import BackToHome from "../../components/BackToHome";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">

        <h1 className="text-4xl shadow-slate-400 mt-2 p-2 border-b-2 border-solid border-black">Error 404</h1>

        <p className="text-lg shadow-slate-400 text-center mt-2">
            Page Not Found <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Eveniet sed veniam molestiae vero eius adipisci labore temporibus impedit illum <br />
            Quam, aliquam repellendus. Asperiores non consequatur quasi neque? Placeat fuga.
        </p>

        <BackToHome />

    </div>
  )
}

export default ErrorPage;