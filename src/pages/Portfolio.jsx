import Cta from "../components/Cta/Cta.jsx";
import Projects from "../container/Portfolio/Projects.jsx";
import Card from "../UI/Card";

const Portfolio = () => {
  return (
    <Card>
      <Projects />
      <Cta />
    </Card>
  );
};

export default Portfolio;
