import friendLink from "../../utils/images/friendLink.png";
import GitHubIcon from "../../utils/icon/GitHubIcon";

const Recent = () => {
  return (
    <>
      <div className="w-full h-[20%] bg-slate-900 flex justify-center items-center">
        <p className="text-slate-200 text-xl lg:text-3xl font-bold tracking-[0.8px]">
          Recent Project
        </p>
      </div>
      <div className="w-full h-[70%] bg-slate-900 flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="text-light text-xl lg:text-2xl font-bold tracking-[0.8px]">
            FullStack Social Media App
          </p>
          <p className="text-gray-200 w-[80%] bg-gray-800 text-sm font-thin my-10 mx-5 py-5 px-3">
            <span className="font-bold text-base">
              Included functionalities:
            </span>{" "}
            Authentication (login, register), Authorization, create posts,
            like/unlike posts, comment posts, Light/Dark mode, follow/unfollow
            other users, responsive.
          </p>
          <p className="text-gray-200">
            Tech: React.js, Node.js, Express.js, MongoDB, Material UI, Redux
            Toolkit
          </p>
          <div className="w-[80%] h-[15%] flex justify-start items-center">
            <a
              href="https://github.com/Sergyoubi/friend_Link_Client"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 flex justify-center items-center"
            >
              <p className="text-gray-100 mr-2 font-thin text-xs">React Code</p>
              <GitHubIcon
                width="20"
                height="20"
                stroke="#ffffff"
                strokeWidth="1"
              />
            </a>
            <a
              href="https://github.com/Sergyoubi/friend_Link_Server"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 flex justify-center items-center"
            >
              <p className="text-gray-100 mr-2 font-thin text-xs">
                NodeJS Code
              </p>
              <GitHubIcon
                width="20"
                height="20"
                stroke="#ffffff"
                strokeWidth="1"
              />
            </a>
            {/* 
            <a
              href="https://github.com/Sergyoubi/friend_Link_Client"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <GitHubIcon
                width="30"
                height="30"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </a>
            */}
          </div>
        </div>
        <div className="w-full h-full hidden lg:flex justify-center items-center">
          <a
            href="https://friendlink-dun.vercel.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src={friendLink}
              alt="Social_media_image"
              className="w-[90%] h-full object-contain"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Recent;
