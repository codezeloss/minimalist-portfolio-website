import UserForm from "../../components/UserForm/UserForm";

const ContactForm = () => {
  return (
    <section className="mt-[48px] flex flex-row justify-between border-t-[1px] border-dark-blue/[.15]">
      <h2 className="mt-[48px]">Contact Me</h2>

      <div className="mt-[48px]">
        <UserForm />
      </div>
    </section>
  );
};

export default ContactForm;
