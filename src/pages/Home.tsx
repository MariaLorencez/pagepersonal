import DynamicBG from "@common/DynamicBG";
import MainNavbar from "@components/MainNavbar/MainNavbar";

const Home = () => {
  return (
    <>
      <MainNavbar />
      <DynamicBG
        url={"/public/home-bg.webp"}
        bgColor="bg-primary-300"
        bgOpacity="bg-opacity-50"
        title={
          <h1 className="text-5xl font-bold text-white mb-4">MARÍA LORENCEZ</h1>
        }
      />
      xd
    </>
  );
};

export default Home;
