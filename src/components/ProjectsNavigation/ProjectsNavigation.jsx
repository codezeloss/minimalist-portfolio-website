import { Link } from "react-router-dom";
import icons from "../../constants/images/icons";

const ProjectsNavigation = ({
  prevProject,
  nextProject,
  prevpLink,
  nextpLink,
}) => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="border-y-[1px] border-dark-blue/[.15] mt-[64px] flex flex-row justify-between items-center">
      <Link to={`../portfolio/${prevpLink}`} onClick={smoothScroll}>
        <div className="flex flex-row my-[32px] gap-[32px] items-center justify-center">
          <img
            className="w-[8px] h-[16px]"
            src={icons.arrowLeft}
            alt="arrow left"
          />
          <div className="flex flex-col items-start">
            <h3>{prevProject}</h3>
            <span className="text-dark-blue/[.5] font-publicsans font-normal leading-[30px]">
              Previous Project
            </span>
          </div>
        </div>
      </Link>

      <div className="w-[1px] h-[130px] bg-dark-blue/[.15]" />

      <Link to={`../portfolio/${nextpLink}`} onClick={smoothScroll}>
        <div className="flex flex-row my-[32px] gap-[32px] items-center justify-center">
          <div className="flex flex-col items-end">
            <h3>{nextProject}</h3>
            <span className="text-dark-blue/[.5] font-publicsans font-normal leading-[30px]">
              Next Project
            </span>
          </div>
          <img
            className="w-[8px] h-[16px]"
            src={icons.arrowRight}
            alt="arrow right"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsNavigation;
