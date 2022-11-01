import { Link } from "react-router-dom";
import GitHubIcon from "../../utils/icon/Github";
import LinkedInIcon from "../../utils/icon/LinkedIn";
import AsideMenu from "./AsideMenu";

const Header = () => {
  return (
    <div className="w-full h-[10%] bg-slate-900/80 backdrop-blur-sm z-10 fixed flex justify-center items-center">
      <div id="logo" className="w-full h-full flex justify-start items-center">
        <Link
          to="/"
          className="text-light tracking-[0.8px] text-2xl font-medium relative left-[8%]"
        >
          Sergy
        </Link>
      </div>
      <div
        id="resume"
        className="w-full h-full hidden lg:flex justify-end items-center"
      >
        <div className="w-[40%] h-full flex justify-center items-center space-x-5">
          <a
            href="https://github.com/Sergyoubi"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sergy-r-396144203/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <a
          href="/myresume"
          target="_blank"
          rel="noreferrer"
          className="text-light tracking-[0.8px] py-[1.7%] px-[4%] border-[1px] border-light rounded-full text-sm font-light hover:bg-slate-50 hover:text-gray-700 relative right-[8%]"
        >
          My Resume
        </a>
      </div>
      <AsideMenu />
    </div>
  );
};

export default Header;
