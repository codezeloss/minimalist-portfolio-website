import { Link } from "react-router-dom";
import icons from "../../constants/icons";

const Footer = () => {
  return (
    <div className="w-[100%] bg-dark-blue mt-[150px] h-[80px] flex flex-row items-center bottom-0">
      <footer className="w-[1111px] mx-auto flex flex-row justify-between px-[1.8rem] ">
        <div className="flex flex-row items-center gap-[48px]">
          <img
            className="w-[61px] h-[32px]"
            src={icons.logoWhite}
            alt="Portfolio logo"
          />
          <ul className="flex flex-row gap-[42px] uppercase text-[12px] font-medium text-white font-publicsans tracking-[2px] leading-[14px] cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact-me">
              <li>Contact me</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row gap-[15px] items-center justify-center">
          <img
            className="w-[25px] h-[24px]"
            src={icons.githubWhite}
            alt="github"
          />
          <img
            className="w-[24px] h-[19.5px]"
            src={icons.twitterWhite}
            alt="twitter"
          />
          <img
            className="w-[24px] h-[24px]"
            src={icons.linkedinWhite}
            alt="linkedin"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
