import HtmlIcon from "../../utils/icon/HtmlIcon";
import CssIcon from "../../utils/icon/CssIcon";
import JsIcon from "../../utils/icon/JsIcon";
import NodeJsIcon from "../../utils/icon/NodeJsIcon";
import ReactJsIcon from "../../utils/icon/ReactJsIcon";
import TailwindIcon from "../../utils/icon/TailwindIcon";
import TensorflowIcon from "../../utils/icon/Tensorflow";
import GitIcon from "../../utils/icon/GitIcon";
import GitHubIcon from "../../utils/icon/GitHubIcon";
import JiraIcon from "../../utils/icon/JiraIcon";
import NpmIcon from "../../utils/icon/NpmIcon";
import MongoDBIcon from "../../utils/icon/MongoDBIcon";
import FlaskIcon from "../../utils/icon/FlaskIcon";
import MaterialIcon from "../../utils/icon/MaterialIcon";

const Skills = () => {
  return (
    <>
      <div className="w-full h-[30%] bg-slate-900 flex justify-center items-center">
        <p className="text-slate-200 text-3xl font-bold tracking-[0.8px]">
          <span className="text-cyan-300 font-thin">04-</span> Technical Skills
        </p>
      </div>
      <div className="w-full h-[90%] bg-slate-900 flex flex-col justify-center items-center space-y-3">
        <div
          id="coding"
          className="w-full h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <p className="text-light text-xl font-bold tracking-[0.8px]">
              Coding Languages
            </p>
          </div>
          <div className="w-[80%] h-[45%] flex justify-start items-center">
            <ul className="w-full h-full flex justify-start items-center space-x-[5%]">
              <li className="text-slate-200 flex justify-center items-center">
                <HtmlIcon />{" "}
                <span className="pl-2 font-thin text-sm">HTML 5</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <CssIcon />{" "}
                <span className="pl-2 font-thin text-sm">CSS 3</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <JsIcon />{" "}
                <span className="pl-2 font-thin text-sm">JavaScript (ES6)</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="libraries"
          className="w-full h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <p className="text-light text-xl font-bold tracking-[0.8px]">
              Libraries & Frameworks
            </p>
          </div>
          <div className="w-[80%] h-[45%] flex justify-start items-center">
            <ul className="w-full h-full flex justify-start items-center space-x-[5%]">
              <li className="text-slate-200 flex justify-center items-center">
                <NodeJsIcon />
                <span className="pl-2 font-thin text-sm">
                  Node.JS / Express.JS
                </span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <ReactJsIcon />{" "}
                <span className="pl-2 font-thin text-sm">React.JS</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <MaterialIcon />{" "}
                <span className="pl-2 font-thin text-sm">Material UI</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <TailwindIcon />{" "}
                <span className="pl-2 font-thin text-sm">TailwindCSS</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <FlaskIcon />
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <TensorflowIcon />{" "}
                <span className="pl-2 font-thin text-sm">
                  TensorFlow / Keras
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="platforms"
          className="w-full h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <p className="text-light text-xl font-bold tracking-[0.8px]">
              Tools & Platforms
            </p>
          </div>
          <div className="w-[80%] h-[45%] flex justify-start items-center">
            <ul className="w-full h-full flex justify-start items-center space-x-[5%]">
              <li className="text-slate-200 flex justify-center items-center">
                <GitIcon /> <span className="pl-2  font-thin text-sm">Git</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <GitHubIcon />{" "}
                <span className="pl-2  font-thin text-sm">GitHub</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <JiraIcon />{" "}
                <span className="pl-2  font-thin text-sm">Jira</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <NpmIcon /> <span className="pl-2  font-thin text-sm">Npm</span>
              </li>
              <li className="text-slate-200 flex justify-center items-center">
                <MongoDBIcon />{" "}
                <span className="pl-2  font-thin text-sm">MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
