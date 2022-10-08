import { useEffect } from "react";
import ContactForm from "../container/ContactMe/ContactForm";
import GetInTouch from "../container/ContactMe/GetInTouch";
import Card from "../UI/Card";
import { motion } from "framer-motion";

const ContactMe = () => {
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
        <GetInTouch />
        <ContactForm />
      </motion.div>
    </Card>
  );
};

export default ContactMe;
