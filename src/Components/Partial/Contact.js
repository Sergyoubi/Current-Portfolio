import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[10%] bg-slate-900"></div>
      <div className="w-full h-[80%] md:h-[60%] lg:h-[50%] xl:h-full bg-slate-900 flex flex-col justify-center items-center">
        <div
          id="getIntouch"
          className="w-full h-[60%] flex flex-col justify-center items-center"
        >
          <Fade delay={600} duration={1000} direction={"left"} triggerOnce>
            <p className="text-slate-300 text-3xl lg:text-6xl font-bold lg:font-semibold py-5 tracking-[0.8px]">
              Want To Get In Touch ?
            </p>
          </Fade>
          <Fade delay={700} duration={1000} direction={"right"} triggerOnce>
            <p className="text-gray-400 text-base lg:text-xl font-thin tracking-[0.8px] py-10">
              Email me at :{" "}
              <span className="text-light font-bold">sergyoubi@gmail.com</span>{" "}
              or
            </p>
          </Fade>
          <Fade delay={1000} duration={1000} triggerOnce>
            <p className="text-light text-base lg:text-xl font-thin">
              Contact Me via{" "}
              <a
                href="https://www.linkedin.com/in/sergy-r-396144203/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300"
              >
                LinkedIn
              </a>
            </p>
          </Fade>
        </div>
        <div
          id="designByMe"
          className="w-full h-[40%] flex justify-center items-end"
        >
          <p className="font-thin text-sm text-cyan-300 relative bottom-[10%]">
            Designed & Developed by Sergy
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
