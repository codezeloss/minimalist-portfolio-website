import UserForm from "../../components/UserForm/UserForm";

const ContactForm = () => {
  return (
    <section className="mt-[48px] flex flex-row justify-between border-t-[1px] border-dark-blue/[.15] 1bp:gap-[2rem] 2bp:flex-col 2bp:gap-[24px]">
      <h2 className="mt-[48px]">Contact Me</h2>

      <div className="mt-[48px] 2bp:mt-0">
        <UserForm />
      </div>
    </section>
  );
};

export default ContactForm;
