import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import projects from "../../constants/content/projects";

const Projects = () => {
  return (
    <section className="mt-[94px] flex flex-col gap-[80px]">
      <PortfolioItem
        image={projects.manage.images.desktop}
        description={projects.manage.description}
        title={projects.manage.title}
        text={projects.manage.text}
        link={projects.manage.link}
      />
      <PortfolioItem
        image={projects.bookmark.images.desktop}
        description={projects.bookmark.description}
        title={projects.bookmark.title}
        text={projects.bookmark.text}
        link={projects.bookmark.link}
      />
      <PortfolioItem
        image={projects.insure.images.desktop}
        description={projects.insure.description}
        title={projects.insure.title}
        text={projects.insure.text}
        link={projects.insure.link}
      />
      <PortfolioItem
        image={projects.fylo.images.desktop}
        description={projects.fylo.description}
        title={projects.fylo.title}
        text={projects.fylo.text}
        link={projects.fylo.link}
      />
      {/* image, description, title, text, link */}
    </section>
  );
};

export default Projects;
