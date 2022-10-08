import { useEffect } from "react";
import homepageImages from "../../constants/images/homepage-images";
import icons from "../../constants/images/icons";

const Header = () => {
  // const smoothScroll = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  useEffect(() => {
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  }, []);

  return (
    <section>
      <div className="mt-[54px] flex flex-col justify-end 4bp:justify-start">
        <img
          className="max-w-[100%] h-[600px] z-[-10] relative 3bp:hidden 4bp:flex 4bp:h-[100%] 4bp:mb-[24px] 5bp:hidden"
          src={homepageImages.desktopHeroImage}
          alt="Hero image"
        />
        <img
          className="hidden max-w-[688px] h-[600px] z-[-10] relative 3bp:flex 4bp:hidden"
          src={homepageImages.tabletHeroImage}
          alt="Hero image"
        />
        <img
          className="hidden max-w-[100%] h-[271px] z-[-10] relative 5bp:flex 5bp:mb-[24px]"
          src={homepageImages.mobileHeroImage}
          alt="Hero image"
        />

        <div className="w-[445px] h-[357px] bg-very-lightgrey z-[10] mt-auto absolute 3bp:w-[514px] 3bp:h-[278px] 3bp:flex 3bp:flex-col 3bp:justify-between 4bp:max-w-[100%] 4bp:h-[100%] 4bp:relative">
          <h1 className="mt-[56px] 3bp:text-[40px] 4bp:pr-[1.8rem] 4bp:max-w-[100%] 4bp:mt-0">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <button className="btn-primary mt-[53px] 3bp:mt-[0px] 4bp:mt-[32px]">
            <img src={icons.downArrow} alt="down arrow icon" />
            <a href="#about-me">
              <span>About me</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
