// import projectsDetails from "../../constants/content/projects-details";
import Card from "../../UI/Card";

const ProjectDetailPage = ({
  heroImage,
  previewImg1,
  previewImg2,
  altTitle,
  title,
  description,
  type,
  techStack,
  backgroundText,
}) => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Card>
      <div className="mt-[98px]">
        <img
          className="max-h-[500px]"
          src={heroImage}
          alt="Manage Hero image"
        />

        <div className="flex flex-row gap-[125px] mt-[115px]">
          <div className="w-[350px] h-[498px] border-y-[1px] border-dark-blue/[.15]">
            <h2 className="mt-[48px]">{title}</h2>
            <p className="p-body2 mt-[29px] w-[350px]">{description}</p>
            <p className="text-desaturated-cyan font-publicsans font-bold text-[16px] leading-[30px] mt-[23px]">
              {type}
            </p>
            <p className="text-desaturated-cyan font-publicsans uppercase font-bold text-[16px] leading-[30px] mt-[16px]">
              {techStack}
            </p>
            <button
              onClick={smoothScroll}
              className="btn-secondary mt-[32px] w-[178px]"
            >
              Visit website
            </button>
          </div>

          <div className="w-[635px]">
            <div>
              <h3>Project Background</h3>
              <p className="p-body2 mt-[28px] w-[635px]">{backgroundText}</p>
            </div>
            <div className="mt-[40px]">
              <h3>Static Previews</h3>
              <div className="mt-[28px] flex flex-col gap-[32px]">
                <img src={previewImg1} alt={altTitle} />
                <img src={previewImg2} alt={altTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetailPage;
