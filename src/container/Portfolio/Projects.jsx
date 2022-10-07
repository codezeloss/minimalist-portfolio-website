import ProjectItem from "../../components/ProjectItem/ProjectItem";
import projects from "../../constants/content/projects";

const Projects = () => {
  return (
    <section className="mt-[94px] flex flex-col gap-[80px]">
      <ProjectItem
        imageDesk={projects.manage.images.desktop}
        imageTablet={projects.manage.images.tablet}
        imageMobile={projects.manage.images.mobile}
        description={projects.manage.description}
        title={projects.manage.title}
        text={projects.manage.text}
        link={projects.manage.link}
      />
      <ProjectItem
        imageDesk={projects.bookmark.images.desktop}
        imageTablet={projects.bookmark.images.tablet}
        imageMobile={projects.bookmark.images.mobile}
        description={projects.bookmark.description}
        title={projects.bookmark.title}
        text={projects.bookmark.text}
        link={projects.bookmark.link}
      />
      <ProjectItem
        imageDesk={projects.insure.images.desktop}
        imageTablet={projects.insure.images.tablet}
        imageMobile={projects.insure.images.mobile}
        description={projects.insure.description}
        title={projects.insure.title}
        text={projects.insure.text}
        link={projects.insure.link}
      />
      <ProjectItem
        imageDesk={projects.fylo.images.desktop}
        imageTablet={projects.fylo.images.tablet}
        imageMobile={projects.fylo.images.mobile}
        description={projects.fylo.description}
        title={projects.fylo.title}
        text={projects.fylo.text}
        link={projects.fylo.link}
      />
    </section>
  );
};

export default Projects;
