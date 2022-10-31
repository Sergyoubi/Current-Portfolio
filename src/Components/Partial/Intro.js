const Intro = () => {
  return (
    <div className="w-[97%] h-[70%] md:w-full md:h-[50%] lg:w-full lg:h-[90%] bg-slate-900 flex justify-center items-center relative top-[15%] lg:top-[12%]">
      <div className="w-full lg:w-[70%] h-[90%] flex flex-col justify-center items-start space-y-3 relative bottom-[10%]">
        <p className="text-cyan-300 font-thin text-base tracking-[0.8px] relative left-2 md:left-[5%] lg:left-0">
          Hello, my name is
        </p>
        <p className="text-light text-4xl lg:text-8xl font-bold tracking-[0.8px] relative left-2 md:left-[5%] lg:left-0">
          Sergy !
        </p>
        <p className="text-slate-300 text-3xl lg:text-7xl font-bold tracking-[0.8px] relative left-2 md:left-[5%] lg:left-0">
          I'm a Front-End Developer.
        </p>
        <p className="w-full md:w-[85%] text-slate-400 text-base lg:text-xl font-thin tracking-[0.8px] relative top-[7%] left-2 md:left-[5%] lg:left-0 select-none ">
          A meticulous Front-End Developer who works with{" "}
          <span className="font-bold text-cyan-300">React.JS</span>. A Big
          enthusiast of AI & Machine Learning. I seek way to fix problem using
          engineering methods.
        </p>
      </div>
    </div>
  );
};

export default Intro;
