import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div className="w-[97%] h-[70%] md:w-full md:h-[50%] xl:h-[90%] bg-slate-900 flex justify-center items-center relative top-[15%] lg:top-[12%]">
      <div className="w-full lg:w-[70%] h-[90%] flex flex-col justify-center items-start space-y-3 relative bottom-[10%]">
        <Fade
          delay={500}
          duration={1800}
          triggerOnce
          className="relative left-2 md:left-[5%] lg:left-0"
        >
          <p className="text-cyan-300 font-thin text-base tracking-[0.8px]">
            Hello, my name is
          </p>
        </Fade>
        <Fade
          delay={600}
          duration={1800}
          triggerOnce
          className="relative left-2 md:left-[5%] lg:left-0"
        >
          <p className="text-light text-4xl lg:text-8xl font-bold tracking-[0.8px]">
            Sergy !
          </p>
        </Fade>
        <Fade
          delay={700}
          duration={1800}
          triggerOnce
          className="relative left-2 md:left-[5%] lg:left-0"
        >
          <p className="text-slate-300 text-3xl lg:text-7xl font-bold tracking-[0.8px]">
            I'm a Front-End Developer.
          </p>
        </Fade>
        <Fade
          delay={800}
          duration={1800}
          triggerOnce
          className="relative top-[7%]"
        >
          {/* 
          <p className="w-full md:w-[85%] text-slate-400 text-base lg:text-xl font-thin tracking-[0.8px] relative top-[7%] left-2 md:left-[5%] lg:left-0 select-none">
            A meticulous Front-End Developer who works with{" "}
            <span className="font-bold text-cyan-300">React.JS</span>. A Big
            enthusiast of AI & Machine Learning. I seek way to fix problem using
            engineering methods.
          </p>
          */}
          <p className="w-full md:w-[85%] text-slate-400 text-base lg:text-xl font-thin tracking-[0.8px] relative top-[7%] left-2 md:left-[5%] lg:left-0 select-none">
            As a meticulous Front-End Developer with expertise in{" "}
            <span className="font-bold text-cyan-300">ReactJS</span>, I am also
            highly interested in the fields of AI and Machine Learning. <br />I
            am constantly seeking ways to utilize engineering methods to solve
            problems and improve my skills.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
