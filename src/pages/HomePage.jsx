import Cta from "../components/Cta/Cta.jsx";
import AboutMe from "../container/Home/AboutMe.jsx";
import Header from "../container/Home/Header.jsx";
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
