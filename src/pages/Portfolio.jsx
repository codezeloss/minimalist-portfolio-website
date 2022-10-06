import { useEffect } from "react";
import Cta from "../components/Cta/Cta.jsx";
import Projects from "../container/Portfolio/Projects.jsx";
import Card from "../UI/Card";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Card>
      <Projects />
      <Cta />
    </Card>
  );
};

export default Portfolio;
