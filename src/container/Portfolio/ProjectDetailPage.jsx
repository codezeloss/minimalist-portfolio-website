// import projectsDetails from "../../constants/content/projects-details";
import { useEffect } from "react";
import ProjectsNavigation from "../../components/ProjectsNavigation/ProjectsNavigation";
import Card from "../../UI/Card";
import { motion } from "framer-motion";

const ProjectDetailPage = ({
  heroImgDesk,
  previewImgDesk1,
  previewImgDesk2,
  heroImgTablet,
  previewImgTablet1,
  previewImgTablet2,
  heroImgMobile,
  previewImgMobile1,
  previewImgMobile2,
  altTitle,
  title,
  description,
  type,
  techStack,
  backgroundText,
  prevProject,
  nextProject,
  prevpLink,
  nextpLink,
}) => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-[98px]">
          <img
            className="max-h-[500px] 3bp:hidden"
            src={heroImgDesk}
            alt="Manage Hero image"
          />
          <img
            className="hidden max-h-[310px] 3bp:flex"
            src={heroImgTablet}
            alt="Manage Hero image"
          />

          <div className="flex flex-row gap-[125px] mt-[115px] 1bp:gap-[53px] 3bp:flex-col 3bp:mt-[40px]">
            <div className="w-[350px] h-[498px] border-y-[1px] border-dark-blue/[.15] 3bp:w-[100%] 3bp:h-[100%]">
              <h2 className="mt-[48px]">{title}</h2>
              <p className="p-body2 mt-[29px] w-[350px] 3bp:w-[100%]">
                {description}
              </p>
              <p className="text-desaturated-cyan font-publicsans font-bold text-[16px] leading-[30px] mt-[23px]">
                {type}
              </p>
              <p className="text-desaturated-cyan font-publicsans uppercase font-bold text-[16px] leading-[30px] mt-[16px]">
                {techStack}
              </p>
              <button
                onClick={smoothScroll}
                className="btn-secondary mt-[32px] w-[178px] 3bp:mb-[32px]"
              >
                Visit website
              </button>
            </div>

            <div className="w-[635px] 3bp:w-[100%]">
              <div>
                <h3>Project Background</h3>
                <p className="p-body2 mt-[28px] w-[100%]">{backgroundText}</p>
              </div>
              <div className="mt-[40px]">
                <h3>Static Previews</h3>
                <div className="mt-[28px] flex flex-col gap-[32px] 3bp:hidden">
                  <img src={previewImgDesk1} alt={altTitle} />
                  <img src={previewImgDesk2} alt={altTitle} />
                </div>
                <div className="hidden mt-[28px] 3bp:flex 3bp:flex-col gap-[32px]">
                  <img src={previewImgTablet1} alt={altTitle} />
                  <img src={previewImgTablet2} alt={altTitle} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectsNavigation
          prevProject={prevProject}
          nextProject={nextProject}
          prevpLink={prevpLink}
          nextpLink={nextpLink}
        />
      </motion.div>
    </Card>
  );
};

export default ProjectDetailPage;
