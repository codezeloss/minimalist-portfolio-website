import { Link } from "react-router-dom";

const ProjectItem = ({
  imageDesk,
  imageTablet,
  imageMobile,
  description,
  title,
  text,
  link,
}) => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const addClasses = `flex flex-row gap-[125px] ${
    title === "Bookmark" ? "flex-row-reverse" : ""
  } ${
    title === "Fylo" ? "flex-row-reverse" : ""
  } 1bp:gap-[43px] 3bp:items-center 4bp:flex-col 4bp:gap-[32px]`;

  return (
    <div className={addClasses}>
      <img
        className="w-[540px] h-[500px] 1bp:w-[100%] 1bp:h-[100%] 3bp:hidden"
        src={imageDesk}
        alt={description}
      />
      <img
        className="hidden w-[339px] h-[314px] 1bp:w-[100%] 1bp:h-[100%] 3bp:flex 4bp:hidden"
        src={imageTablet}
        alt={description}
      />
      <img
        className="hidden 1bp:w-[100%] 1bp:h-[100%] 4bp:flex 4bp:w-[311px] 4bp:h-[288px]"
        src={imageMobile}
        alt={description}
      />

      <div className="w-[350px] border-y-[1px] border-dark-blue/[.15] flex flex-col justify-center 1bp:w-[100%] 3bp:h-[418px] 4bp:h-[368px]">
        <h2>{title}</h2>
        <p className="p-body1 mt-[28px]">{text}</p>
        <Link to={link}>
          <button
            onClick={smoothScroll}
            className="btn-secondary w-[175px] mt-[24px]"
          >
            View project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
