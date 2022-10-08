import { Link } from "react-router-dom";
import icons from "../../constants/images/icons";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[100%] bg-grayish-darkblue mt-[150px] h-[80px] flex flex-row items-center bottom-0 4bp:h-[100%] 4bp:py-[56px]">
      <footer className="w-[1111px] mx-auto flex flex-row justify-between px-[1.8rem] 4bp:flex-col 4bp:gap-[40px]">
        <div className="flex flex-row items-center gap-[48px] 4bp:flex-col 4bp:gap-[40px]">
          <img
            className="w-[61px] h-[32px]"
            src={icons.logoWhite}
            alt="Portfolio logo"
          />
          <ul className="flex flex-row gap-[42px] uppercase text-[12px] font-medium text-white font-publicsans tracking-[2px] leading-[14px] cursor-pointer 4bp:gap-[22px] 4bp:flex-col 4bp:items-center">
            <Link to="/" onClick={smoothScroll}>
              <li>Home</li>
            </Link>
            <Link to="/portfolio" onClick={smoothScroll}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contact-me" onClick={smoothScroll}>
              <li>Contact me</li>
            </Link>
          </ul>
        </div>

        <SocialMedia
          githubImg={icons.githubWhite}
          twitterImg={icons.twitterWhite}
          linkedinImg={icons.linkedinWhite}
        />
      </footer>
    </div>
  );
};

export default Footer;
