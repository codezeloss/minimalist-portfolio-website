import { Route, Routes } from "react-router-dom";
import projectsDetails from "./constants/content/projects-details";
import ProjectDetailPage from "./container/Portfolio/ProjectDetailPage";
import ContactMe from "./pages/ContactMe";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route
        path="/portfolio/manage"
        element={
          <ProjectDetailPage
            heroImgDesk={projectsDetails.manage.images.desktop.hero}
            previewImgDesk1={projectsDetails.manage.images.desktop.preview01}
            previewImgDesk2={projectsDetails.manage.images.desktop.preview02}
            heroImgTablet={projectsDetails.manage.images.tablet.hero}
            previewImgTablet1={projectsDetails.manage.images.tablet.preview01}
            previewImgTablet2={projectsDetails.manage.images.tablet.preview02}
            heroImgMobile={projectsDetails.manage.images.mobile.hero}
            previewImgMobile1={projectsDetails.manage.images.mobile.preview01}
            previewImgMobile2={projectsDetails.manage.images.mobile.preview02}
            altTitle={projectsDetails.manage.altTitle}
            title={projectsDetails.manage.title}
            description={projectsDetails.manage.description}
            type={projectsDetails.manage.type}
            techStack={projectsDetails.manage.techStack}
            backgroundText={projectsDetails.manage.backgroundText}
            prevProject={projectsDetails.fylo.title}
            prevpLink={projectsDetails.fylo.pLink}
            nextProject={projectsDetails.bookmark.title}
            nextpLink={projectsDetails.bookmark.pLink}
          />
        }
      />
      <Route
        path="/portfolio/bookmark"
        element={
          <ProjectDetailPage
            heroImgDesk={projectsDetails.bookmark.images.desktop.hero}
            previewImgDesk1={projectsDetails.bookmark.images.desktop.preview01}
            previewImgDesk2={projectsDetails.bookmark.images.desktop.preview02}
            heroImgTablet={projectsDetails.bookmark.images.tablet.hero}
            previewImgTablet1={projectsDetails.bookmark.images.tablet.preview01}
            previewImgTablet2={projectsDetails.bookmark.images.tablet.preview02}
            heroImgMobile={projectsDetails.bookmark.images.mobile.hero}
            previewImgMobile1={projectsDetails.bookmark.images.mobile.preview01}
            previewImgMobile2={projectsDetails.bookmark.images.mobile.preview02}
            altTitle={projectsDetails.bookmark.altTitle}
            title={projectsDetails.bookmark.title}
            description={projectsDetails.bookmark.description}
            type={projectsDetails.bookmark.type}
            techStack={projectsDetails.bookmark.techStack}
            backgroundText={projectsDetails.bookmark.backgroundText}
            prevProject={projectsDetails.manage.title}
            prevpLink={projectsDetails.manage.pLink}
            nextProject={projectsDetails.insure.title}
            nextpLink={projectsDetails.insure.pLink}
          />
        }
      />
      <Route
        path="/portfolio/insure"
        element={
          <ProjectDetailPage
            heroImgDesk={projectsDetails.insure.images.desktop.hero}
            previewImgDesk1={projectsDetails.insure.images.desktop.preview01}
            previewImgDesk2={projectsDetails.insure.images.desktop.preview02}
            heroImgTablet={projectsDetails.insure.images.tablet.hero}
            previewImgTablet1={projectsDetails.insure.images.tablet.preview01}
            previewImgTablet2={projectsDetails.insure.images.tablet.preview02}
            heroImgMobile={projectsDetails.insure.images.mobile.hero}
            previewImgMobile1={projectsDetails.insure.images.mobile.preview01}
            previewImgMobile2={projectsDetails.insure.images.mobile.preview02}
            altTitle={projectsDetails.insure.altTitle}
            title={projectsDetails.insure.title}
            description={projectsDetails.insure.description}
            type={projectsDetails.insure.type}
            techStack={projectsDetails.insure.techStack}
            backgroundText={projectsDetails.insure.backgroundText}
            prevProject={projectsDetails.bookmark.title}
            prevpLink={projectsDetails.bookmark.pLink}
            nextProject={projectsDetails.fylo.title}
            nextpLink={projectsDetails.fylo.pLink}
          />
        }
      />
      <Route
        path="/portfolio/fylo"
        element={
          <ProjectDetailPage
            heroImgDesk={projectsDetails.fylo.images.desktop.hero}
            previewImgDesk1={projectsDetails.fylo.images.desktop.preview01}
            previewImgDesk2={projectsDetails.fylo.images.desktop.preview02}
            heroImgTablet={projectsDetails.fylo.images.tablet.hero}
            previewImgTablet1={projectsDetails.fylo.images.tablet.preview01}
            previewImgTablet2={projectsDetails.fylo.images.tablet.preview02}
            heroImgMobile={projectsDetails.fylo.images.mobile.hero}
            previewImgMobile1={projectsDetails.fylo.images.mobile.preview01}
            previewImgMobile2={projectsDetails.fylo.images.mobile.preview02}
            altTitle={projectsDetails.fylo.altTitle}
            title={projectsDetails.fylo.title}
            description={projectsDetails.fylo.description}
            type={projectsDetails.fylo.type}
            techStack={projectsDetails.fylo.techStack}
            backgroundText={projectsDetails.fylo.backgroundText}
            prevProject={projectsDetails.insure.title}
            prevpLink={projectsDetails.insure.pLink}
            nextProject={projectsDetails.manage.title}
            nextpLink={projectsDetails.manage.pLink}
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
