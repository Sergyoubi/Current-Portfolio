import FolderIcon from "../../utils/icon/Folder";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="w-full h-[20%] bg-slate-900 flex justify-center items-center">
        <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
          <span className="text-cyan-300 font-thin">03-</span>Other Personal
          Projects
        </p>
      </div>
      <div className="w-full h-[0%] lg:h-[0%] xl:h-[10%] bg-slate-900"></div>
      <div className="w-full md:h-[30%] lg:h-[25%] xl:h-[50%] bg-slate-900 hidden md:flex justify-center items-center space-x-4">
        <Fade
          delay={600}
          duration={1000}
          direction={"left"}
          triggerOnce
          className="w-[40%] lg:w-[25%] md:h-[80%] lg:h-[90%] bg-gray-800 hover:bg-slate-800 flex justify-center items-center rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/MERN-Shopping-Cart"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base lg:text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
              React.js Shopping Cart
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : React.js, Redux, CSS3
            </p>
          </a>
        </Fade>
        <Fade
          delay={600}
          duration={1000}
          direction={"right"}
          triggerOnce
          className="w-[40%] lg:w-[25%] md:h-[80%] lg:h-[90%] bg-gray-800 hover:bg-slate-800 flex justify-center items-center rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/Simple-React.js-Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base lg:text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
              Simple React.js Blog
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : React.js, CSS3, db.json
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full md:h-[30%] lg:h-[25%] xl:h-[50%] bg-slate-900 hidden md:flex justify-center items-start space-x-4">
        <Fade
          delay={800}
          duration={1000}
          direction={"left"}
          triggerOnce
          className="w-[40%] lg:w-[25%] md:h-[80%] lg:h-[90%] bg-gray-800 hover:bg-slate-800 flex justify-center items-center rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/CRUD-Book-App"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base lg:text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
              CRUD Application
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : HTML5, TailwindCSS, Node/Express.js, PostgreSQL
            </p>
          </a>
        </Fade>
        <Fade
          delay={800}
          duration={1000}
          direction={"right"}
          triggerOnce
          className="w-[40%] lg:w-[25%] md:h-[80%] lg:h-[90%] bg-gray-800 hover:bg-slate-800 flex justify-center items-center rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/Expense-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base lg:text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
              Expense Tracker App
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : Vue.js, TailwindCSS, Expres.js, Node.js, PostgreSQL
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full h-[50%] bg-slate-900 flex md:hidden justify-center items-center">
        <Fade
          delay={600}
          duration={1000}
          triggerOnce
          className="w-[80%] h-[90%] bg-gray-800 hover:bg-slate-800 flex flex-col justify-center items-start rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/MERN-Shopping-Cart"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base pl-[5%] py-[5%] tracking-[0.8px]">
              React.js Shopping Cart
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : React.js, Redux, CSS3
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full h-[50%] bg-slate-900 flex md:hidden justify-center items-center">
        <Fade
          delay={600}
          duration={1000}
          triggerOnce
          className="w-[80%] h-[90%] bg-gray-800 hover:bg-slate-800 flex flex-col justify-center items-start rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/Simple-React.js-Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base pl-[5%] py-[5%] tracking-[0.8px]">
              Simple React.js Blog
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : React.js, CSS3, db.json
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full h-[50%] bg-slate-900 flex md:hidden justify-center items-center">
        <Fade
          delay={600}
          duration={1000}
          triggerOnce
          className="w-[80%] h-[90%] bg-gray-800 hover:bg-slate-800 flex flex-col justify-center items-start rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/CRUD-Book-App"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base pl-[5%] py-[5%] tracking-[0.8px]">
              CRUD Application
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : HTML5, TailwindCSS, Node/Express.js, PostgreSQL
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full h-[50%] bg-slate-900 flex md:hidden justify-center items-center">
        <Fade
          delay={600}
          duration={1000}
          triggerOnce
          className="w-[80%] h-[90%] bg-gray-800 hover:bg-slate-800 flex flex-col justify-center items-start rounded-md"
        >
          <a
            href="https://github.com/Sergyoubi/Expense-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col justify-center items-start"
          >
            <FolderIcon />
            <p className="text-light font-bold text-base pl-[5%] py-[5%] tracking-[0.8px]">
              Expense Tracker App
            </p>
            <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
              Tech : Vue.js, TailwindCSS, Expres.js, Node.js, PostgreSQL
            </p>
          </a>
        </Fade>
      </div>
      <div className="w-full h-[5%] bg-slate-900"></div>
    </>
  );
};

export default Projects;
