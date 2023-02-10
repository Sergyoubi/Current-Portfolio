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
import MaterialIcon from "../../utils/icon/MaterialIcon";
import ReduxIcon from "../../utils/icon/Redux";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <>
      <div className="w-full h-[18%] bg-slate-900 flex justify-center items-center">
        <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
          <span className="text-cyan-300 font-thin">04-</span> Technical Skills
        </p>
      </div>
      <div className="w-full h-[60%] lg:h-[40%] xl:h-[90%] bg-slate-900 flex flex-col justify-center items-center space-y-3">
        <div
          id="coding"
          className="w-full h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <Fade delay={600} duration={1000} triggerOnce>
              <p className="text-light text-base lg:text-xl font-bold tracking-[0.8px]">
                Coding Languages
              </p>
            </Fade>
          </div>
          <div className="w-[80%] h-[45%] flex justify-start items-center">
            <Fade delay={800} duration={2000} triggerOnce>
              <ul className="w-full h-full flex justify-start items-center space-x-[5%]">
                <li className="text-slate-200 flex justify-center items-center">
                  <HtmlIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    HTML 5
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <CssIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    CSS 3
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <JsIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    JavaScript (ES6)
                  </span>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <div
          id="libraries"
          className="w-full h-[50%] md:h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <Fade delay={600} duration={1000} triggerOnce>
              <p className="text-light text-base lg:text-xl font-bold tracking-[0.8px]">
                Libraries & Frameworks
              </p>
            </Fade>
          </div>
          <div className="w-[80%] h-[45%] flex justify-start items-center">
            <Fade delay={800} duration={2000} triggerOnce>
              <ul className="w-full h-full flex justify-start items-center space-x-[5%]">
                <li className="text-slate-200 flex justify-center items-center">
                  <NodeJsIcon />
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    Node.JS / Express.JS
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <ReactJsIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    React.JS
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <ReduxIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    Redux Toolkit
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <MaterialIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    Material UI
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <TailwindIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    TailwindCSS
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <TensorflowIcon />{" "}
                  <span className="pl-2 font-thin text-sm hidden lg:block">
                    TensorFlow / Keras
                  </span>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <div
          id="platforms"
          className="w-full h-[30%] flex flex-col justify-center items-center"
        >
          <div className="w-[80%] h-[30%] flex justify-start items-center">
            <Fade delay={600} duration={1000} triggerOnce>
              <p className="text-light text-base lg:text-xl font-bold tracking-[0.8px]">
                Tools & Platforms
              </p>
            </Fade>
          </div>
          <div className="w-[85%] lg:w-[80%] h-[45%] flex justify-start items-center">
            <Fade delay={600} duration={2000} triggerOnce>
              <ul className="w-full h-full flex justify-start items-center space-x-[10%] lg:space-x-[5%]">
                <li className="text-slate-200 flex justify-center items-center">
                  <GitIcon />{" "}
                  <span className="pl-2  font-thin text-sm hidden lg:block">
                    Git
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <GitHubIcon
                    width="30"
                    height="30"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                  />{" "}
                  <span className="pl-2  font-thin text-sm hidden lg:block">
                    GitHub
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <JiraIcon />{" "}
                  <span className="pl-2  font-thin text-sm hidden lg:block">
                    Jira
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <NpmIcon />{" "}
                  <span className="pl-2  font-thin text-sm hidden lg:block">
                    Npm
                  </span>
                </li>
                <li className="text-slate-200 flex justify-center items-center">
                  <MongoDBIcon />{" "}
                  <span className="pl-2  font-thin text-sm hidden lg:block">
                    MongoDB
                  </span>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
