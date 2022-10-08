import Cta from "../components/Cta/Cta.jsx";
import AboutMe from "../container/Home/AboutMe.jsx";
import Header from "../container/Home/Header.jsx";
import Card from "../UI/Card";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <AboutMe />
        <Cta />
      </motion.div>
    </Card>
  );
};

export default HomePage;
