import SocialMedia from "../../components/SocialMedia/SocialMedia";
import icons from "../../constants/images/icons";

const GetInTouch = () => {
  return (
    <section className="mt-[94px] flex flex-row justify-between border-t-[1px] border-dark-blue/[.15] 1bp:gap-[2rem] 2bp:flex-col 2bp:gap-[24px]">
      <h2 className="mt-[48px]">Get in Touch</h2>

      <div className="mt-[48px] flex flex-col justify-start 2bp:mt-0">
        <p className="p-body1 w-[635px] 2bp:w-[100%]">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
        <div className="mt-[24px]">
          <SocialMedia
            githubImg={icons.github}
            twitterImg={icons.twitter}
            linkedinImg={icons.linkedin}
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
