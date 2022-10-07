import { Link } from "react-router-dom";

const PortfolioItem = ({ image, description, title, text, link }) => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const addClasses = `flex flex-row gap-[125px] ${
    title === "Bookmark" ? "flex-row-reverse" : ""
  } ${title === "Fylo" ? "flex-row-reverse" : ""}`;

  return (
    <div className={addClasses}>
      <img
        className="w-[540px] h-[500px]"
        src={image}
        alt={description}
      />

      <div className="w-[350px] border-y-[1px] border-dark-blue/[.15] flex flex-col justify-center">
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

export default PortfolioItem;
