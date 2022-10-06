import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-[150px]">
      <h2 className="max-w-[350px]">Interested in doing a project together?</h2>

      <div className="w-[534px] h-[1px] bg-dark-blue/[.15] mr-[32px]" />

      <Link to="/contact-me">
        <button className="btn-secondary w-[162px]">Contact me</button>
      </Link>
    </div>
  );
};

export default Cta;
