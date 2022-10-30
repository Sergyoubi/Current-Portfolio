const Intro = () => {
  return (
    <div className="w-full h-[90%] bg-slate-900 flex justify-center items-center relative top-[12%]">
      <div className="w-[70%] h-[90%] flex flex-col justify-center items-start space-y-3 relative bottom-[10%]">
        <p className="text-cyan-300 font-thin text-base tracking-[0.8px]">
          Hello, my name is
        </p>
        <p className="text-light text-8xl font-bold tracking-[0.8px]">
          Sergy !
        </p>
        <p className="text-slate-300 text-7xl font-bold tracking-[0.8px]">
          I'm a Front-End Developer.
        </p>
        <p className="text-slate-400 text-xl font-thin tracking-[0.8px] relative top-[7%] select-none">
          A meticulous Front-End Developer who works with{" "}
          <span className="font-bold text-cyan-300">React.JS</span>; A Big
          enthusiast of AI & Machine Learning. I seek way to fix problem using
          engineering methods.
        </p>
      </div>
    </div>
  );
};

export default Intro;
