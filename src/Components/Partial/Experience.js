const Experience = () => {
  return (
    <div className="w-full h-[80%] md:h-[50%] lg:h-full bg-slate-900 flex flex-col justify-center items-center">
      <div className="w-full h-[10%] lg:h-[30%] flex justify-center items-center">
        <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
          <span className="text-cyan-300 font-thin">02-</span> Professional
          Experience
        </p>
      </div>
      <div className="w-full h-[90%]  lg:h-[70%] flex justify-center items-center">
        <div className="w-[80%] lg:w-[50%] h-[80%] md:h-[65%] flex flex-col justify-center items-center">
          <div className="w-full h-[25%] lg:h-[20%] flex flex-col justify-center items-start space-y-2">
            <p className="text-light text-lg lg:text-xl font-bold tracking-[0.8px]">
              Software Engineer <span className="text-cyan-300">@</span>
              <a
                href="https://shoyo.io/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300"
              >
                Shoyo
              </a>
            </p>
            <p className="text-light text-xs tracking-[0.8px]">
              Remote | September 2021 - March 2022
            </p>
          </div>
          <div className="w-full h-[75%] lg:h-[80%] flex flex-col justify-center items-center">
            <ul className="text-light text-base lg:text-xl font-thin list-inside list-disc">
              <li className="py-[1%] tracking-[0.8px] select-none">
                Implemented enhancements that improved the User Experience and
                responsiveness of the App using ES6.
              </li>
              <li className="py-[1%] tracking-[0.8px] select-none">
                Worked closely with designers, developers and management team to
                develop the project requirements, goals, and desired
                functionality.
              </li>
              <li className="py-[1%] tracking-[0.8px] select-none">
                Maintained code and proposed solutions to issues identified.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
