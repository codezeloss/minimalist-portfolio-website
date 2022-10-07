const SocialMedia = ({ twitterImg, githubImg, linkedinImg }) => {
  return (
    <div className="flex flex-row gap-[15px] items-center">
      <img
        className="w-[25px] h-[24px] cursor-pointer"
        src={githubImg}
        alt="github"
      />
      <img
        className="w-[24px] h-[19.5px] cursor-pointer"
        src={twitterImg}
        alt="twitter"
      />
      <img
        className="w-[24px] h-[24px] cursor-pointer"
        src={linkedinImg}
        alt="linkedin"
      />
    </div>
  );
};

export default SocialMedia;
