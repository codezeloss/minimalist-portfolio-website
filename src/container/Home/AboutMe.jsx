import { Link } from "react-router-dom";
import homepageImages from "../../constants/images/homepage-images";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="flex flex-row mt-[150px] gap-[125px] justify-start">
        <img
          className="w-[540px] h-[600px]"
          src={homepageImages.desktopProfileImage}
          alt="Profile picture"
        />

        <div className="max-w-[350px] border-y-[1px] border-dark-blue/[.15]">
          <h2 className="mt-[50px]">About Me</h2>
          <p className="p-body1 mt-[28px]">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Link to="/portfolio">
            <button className="btn-secondary w-[202px] mt-[24px] mb-[46px]">
              Go to portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
