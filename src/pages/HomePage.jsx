import Cta from "../components/CTA/Cta.jsx";
import AboutMe from "../container/AboutMe";
import Header from "../container/Header";
import Card from "../UI/Card";

const HomePage = () => {
  return (
    <Card>
      <Header />
      <AboutMe />
      <Cta />
    </Card>
  );
};

export default HomePage;
