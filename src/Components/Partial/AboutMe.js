import profile from "../../utils/images/me.jpeg";

const AboutMe = () => {
  return (
    <div className="w-full h-full md:h-[70%] lg:h-full bg-slate-900 flex justify-center items-center">
      <div className="w-[90%] h-full flex justify-center items-center">
        <div className="w-full lg:w-[80%] h-[80%] flex flex-col justify-center items-center">
          <div className="w-full h-[30%] lg:h-[20%] flex justify-center lg:justify-start items-center">
            <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
              <span className="text-cyan-300 font-thin">01-</span> About Me
            </p>
          </div>
          <div className="w-full h-[70%] md:h-[50%] lg:h-[80%] flex justify-center items-center">
            <div
              id="profile_img"
              className="w-[30%] h-full hidden lg:flex justify-center items-start"
            >
              <img
                src={profile}
                alt="profile_img"
                loading="lazy"
                className="w-[90%] h-[70%] object-cover relative top-[5%]"
              />
            </div>
            <div
              id="description"
              className="w-[90%] lg:w-[70%] h-full flex flex-col justify-start items-center space-y-2"
            >
              <p className="text-light text-3xl lg:text-5xl font-thin tracking-[1px] relative lg:left-[5%] top-[3%] select-none">
                I use <span className="text-cyan-300">HTML5</span>,{" "}
                <span className="text-cyan-300">CSS3</span>,{" "}
                <span className="text-cyan-300">JavaScript</span> and{" "}
                <span className="text-cyan-300">React.JS</span> to build
                Websites.
              </p>
              <p className="text-light text-3xl lg:text-5xl font-thin tracking-[1px] relative lg:left-[5%] top-[10%] select-none">
                My main server-side language is{" "}
                <span className="text-cyan-300">JavaScript (Node.JS)</span>,
                quite often paired with{" "}
                <span className="text-cyan-300">MongoDB</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
