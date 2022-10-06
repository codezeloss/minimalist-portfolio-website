import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetailPage from "./container/Portfolio/ProjectDetailPage";
import ContactMe from "./pages/ContactMe";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import projectsDetails from "./constants/content/projects-details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route
            path="/portfolio/manage"
            element={
              <ProjectDetailPage
                heroImage={projectsDetails.manage.images.desktop.hero}
                previewImg1={projectsDetails.manage.images.desktop.preview01}
                previewImg2={projectsDetails.manage.images.desktop.preview02}
                altTitle={projectsDetails.manage.altTitle}
                title={projectsDetails.manage.title}
                description={projectsDetails.manage.description}
                type={projectsDetails.manage.type}
                techStack={projectsDetails.manage.techStack}
                backgroundText={projectsDetails.manage.backgroundText}
              />
            }
          />
          <Route
            path="/portfolio/bookmark"
            element={
              <ProjectDetailPage
                heroImage={projectsDetails.bookmark.images.desktop.hero}
                previewImg1={projectsDetails.bookmark.images.desktop.preview01}
                previewImg2={projectsDetails.bookmark.images.desktop.preview02}
                altTitle={projectsDetails.bookmark.altTitle}
                title={projectsDetails.bookmark.title}
                description={projectsDetails.bookmark.description}
                type={projectsDetails.bookmark.type}
                techStack={projectsDetails.bookmark.techStack}
                backgroundText={projectsDetails.bookmark.backgroundText}
              />
            }
          />
          <Route
            path="/portfolio/insure"
            element={
              <ProjectDetailPage
                heroImage={projectsDetails.insure.images.desktop.hero}
                previewImg1={projectsDetails.insure.images.desktop.preview01}
                previewImg2={projectsDetails.insure.images.desktop.preview02}
                altTitle={projectsDetails.insure.altTitle}
                title={projectsDetails.insure.title}
                description={projectsDetails.insure.description}
                type={projectsDetails.insure.type}
                techStack={projectsDetails.insure.techStack}
                backgroundText={projectsDetails.insure.backgroundText}
              />
            }
          />
          <Route
            path="/portfolio/fylo"
            element={
              <ProjectDetailPage
                heroImage={projectsDetails.fylo.images.desktop.hero}
                previewImg1={projectsDetails.fylo.images.desktop.preview01}
                previewImg2={projectsDetails.fylo.images.desktop.preview02}
                altTitle={projectsDetails.fylo.altTitle}
                title={projectsDetails.fylo.title}
                description={projectsDetails.fylo.description}
                type={projectsDetails.fylo.type}
                techStack={projectsDetails.fylo.techStack}
                backgroundText={projectsDetails.fylo.backgroundText}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
