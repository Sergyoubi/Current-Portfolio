const Contact = () => {
  return (
    <>
      <div className="w-full h-[10%] bg-slate-900"></div>
      <div className="w-full h-full bg-slate-900 flex flex-col justify-center items-center">
        <div
          id="getIntouch"
          className="w-full h-[60%] flex flex-col justify-center items-center"
        >
          <p className="text-slate-300 text-6xl font-semibold py-5 tracking-[0.8px]">
            Want To Get In Touch ?
          </p>
          <p className="text-light text-xl font-thin tracking-[0.8px] py-10">
            Email me at : <span className="font-bold">sergyoubi@gmail.com</span>{" "}
            or
          </p>
          <p className="text-light text-xl font-thin">
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
