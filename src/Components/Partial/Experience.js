import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <>
      <div className="w-full h-[10%] lg:h-[30%] xl:h-[25%] bg-slate-900 flex justify-center items-center relative top-[15%] lg:top-[12%]">
        <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
          Professional Experience
        </p>
      </div>
      <div className="w-full h-[90%] lg:h-[70%] bg-slate-900 flex justify-center items-center">
        <div className="w-[80%] lg:w-[50%] h-[80%] flex flex-col justify-center items-center">
          <div className="w-full h-[25%] lg:h-[20%] flex flex-col justify-center items-start space-y-2">
            <Fade delay={500} duration={1800} triggerOnce>
              <p className="text-light text-lg lg:text-xl font-bold tracking-[0.8px]">
                Fullstack Software Engineer{" "}
                <span className="text-cyan-300">@</span>
                <a
                  href="https://www.nellium-ai.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300"
                >
                  Nellium
                </a>
              </p>
              <p className="text-light text-xs tracking-[0.8px]">
                June 2022- January 2024
              </p>
            </Fade>
          </div>
          <div className="w-full h-[75%] lg:h-[50%] flex flex-col justify-center items-center">
            <ul className="text-light text-base lg:text-xl font-thin list-inside list-disc">
              <Fade delay={600} duration={1800} triggerOnce>
                <li className="py-[1%] tracking-[0.8px] select-none">
                  Lead the development and architecture of technical tools like
                  REST APIs, and continuous integration pipelines to fulfill
                  business requirements.
                </li>
                <li className="py-[1%] tracking-[0.8px] select-none">
                  Developed high-quality websites, implemented design systems
                  using technologies such as JavaScript, React, NodeJs,
                  TailwindCSS and MongoDB.
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[90%] lg:h-[70%] bg-slate-900 flex justify-center items-center">
        <div className="w-[80%] lg:w-[50%] h-[50%] flex flex-col justify-center items-center">
          <div className="w-full h-[25%] flex flex-col justify-center items-start space-y-2">
            <Fade delay={500} duration={1800} triggerOnce>
              <p className="text-light text-lg lg:text-xl font-bold tracking-[0.8px]">
                Frontend software engineer {""}
                <span className="text-cyan-300">@</span>
                <a
                  href="www.misterharper.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300"
                >
                  misterharper.com
                </a>
              </p>
              <p className="text-light text-xs tracking-[0.8px]">
                March 2019- April 2022
              </p>
            </Fade>
          </div>
          <div className="w-full h-[75%] lg:h-[80%] flex flex-col justify-center items-center">
            <ul className="text-light text-base lg:text-xl font-thin list-inside list-disc">
              <Fade delay={600} duration={1800} triggerOnce>
                <li className="py-[1%] tracking-[0.8px] select-none">
                  Architected and implemented the user interface using
                  technologies such as React, JavaScript, TailwindCSS and
                  Material UI.
                </li>
                <li className="py-[1%] tracking-[0.8px] select-none">
                  Worked alongside project managers, designers, and Backend
                  engineers to transform creative concepts into refined digital
                  experiences.
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
