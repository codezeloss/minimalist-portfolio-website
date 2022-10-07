import { useEffect } from "react";
import ContactForm from "../container/ContactMe/ContactForm";
import GetInTouch from "../container/ContactMe/GetInTouch";
import Card from "../UI/Card";

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Card>
      <GetInTouch />
      <ContactForm />
    </Card>
  );
};

export default ContactMe;
