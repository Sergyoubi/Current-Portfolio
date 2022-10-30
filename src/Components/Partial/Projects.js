import FolderIcon from "../../utils/icon/Folder";

const Projects = () => {
  return (
    <>
      <div className="w-full h-[20%] bg-slate-900 flex justify-center items-center">
        <p className="text-slate-200 text-3xl font-bold tracking-[0.8px]">
          <span className="text-cyan-300 font-thin">03-</span> Personal Projects
        </p>
      </div>
      <div className="w-full h-[10%] bg-slate-900"></div>
      <div className="w-full h-[50%] bg-slate-900 flex justify-center items-center space-x-4">
        <a
          href="https://github.com/Sergyoubi/MERN-Shopping-Cart"
          className="w-[25%] h-[90%] bg-gray-800 flex flex-col justify-center items-start rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderIcon />
          <p className="text-light font-bold text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
            React.js Shopping Cart
          </p>
          <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
            Tech : React.js, Redux, CSS3
          </p>
        </a>
        <a
          href="https://github.com/Sergyoubi/Simple-React.js-Blog"
          className="w-[25%] h-[90%] bg-gray-800 flex flex-col justify-center items-start rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderIcon />
          <p className="text-light font-bold text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
            Simple React.js Blog
          </p>
          <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
            Tech : React.js, CSS3, db.json
          </p>
        </a>
      </div>
      <div className="w-full h-[50%] bg-slate-900 flex justify-center items-start space-x-4">
        <a
          href="https://github.com/Sergyoubi/CRUD-Book-App"
          className="w-[25%] h-[90%] bg-gray-800 flex flex-col justify-center items-start rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderIcon />
          <p className="text-light font-bold text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
            CRUD Application
          </p>
          <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
            Tech : HTML5, TailwindCSS, Node/Express.js, PostgreSQL
          </p>
        </a>
        <a
          href="https://github.com/Sergyoubi/Expense-Tracker"
          className="w-[25%] h-[90%] bg-gray-800 flex flex-col justify-center items-start rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderIcon />
          <p className="text-light font-bold text-2xl pl-[5%] py-[5%] tracking-[0.8px]">
            Expense Tracker App
          </p>
          <p className="text-slate-300 text-sm font-thin pl-[5%] py-[5%] tracking-[0.8px]">
            Tech : Vue.js, TailwindCSS, Expres.js, Node.js, PostgreSQL
          </p>
        </a>
      </div>
      <div className="w-full h-[5%] bg-slate-900"></div>
    </>
  );
};

export default Projects;
