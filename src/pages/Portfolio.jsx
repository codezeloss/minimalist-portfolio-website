import { useEffect } from "react";
import Cta from "../components/Cta/Cta.jsx";
import Projects from "../container/Portfolio/Projects.jsx";
import Card from "../UI/Card";
import { motion } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
        <Cta />
      </motion.div>
    </Card>
  );
};

export default Portfolio;
