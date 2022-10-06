import homepageImages from "../../constants/images/homepage-images";
import icons from "../../constants/images/icons";

const Header = () => {
  return (
    <section>
      <div className="mt-[54px] flex flex-col justify-end">
        <img
          className="max-w-[100%] max-h-[600px] z-[-10] relative"
          src={homepageImages.desktopHeroImage}
          alt="Hero image"
        />

        <div className="w-[445px] h-[357px] bg-white z-[10] mt-auto absolute">
          <h1 className="mt-[56px]">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <a href="#about-me">
            <button className="btn-primary mt-[53px]">
              <img src={icons.downArrow} alt="down arrow icon" />
              <span>About me</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
