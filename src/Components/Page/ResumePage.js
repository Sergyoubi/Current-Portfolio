import { useEffect } from "react";
import resume_Sergy from "../../utils/resume/resume_Ethan.pdf";

const ResumePage = () => {
  useEffect(() => {
    document.title = "Sergy | My Resume";
  });

  return (
    <div className="w-screen h-screen justify-center items-center bg-slate-900">
      <iframe
        title="resume"
        src={resume_Sergy}
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ResumePage;
