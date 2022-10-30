import Header from "../Partial/Header";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <Header />
      <div className="w-full h-[87%] flex flex-col justify-center items-center space-y-4">
        <p className="text-cyan-300 font-bold text-[100px] ">Error 404 !</p>
        <p className="text-light font-thin text-4xl">
          The page you are trying to access does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
