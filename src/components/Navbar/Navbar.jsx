import { Link, NavLink } from "react-router-dom";
import icons from "../../constants/images/icons";
import Card from "../../UI/Card";

const Navbar = () => {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let activeStyle = {
    color: "#5FB4A2",
  };

  return (
    <Card>
      <nav className="flex flex-row justify-between items-center mt-[64px]">
        <img className="w-[68.08px] h-[32px]" src={icons.logo} alt="logo" />
        <ul className="flex flex-row gap-[32px] uppercase text-[12px] font-medium font-publicsans tracking-[2px] leading-[14px] cursor-pointer">
          <NavLink
            onClick={smoothScroll}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            onClick={smoothScroll}
            to="/portfolio"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            onClick={smoothScroll}
            to="/contact-me"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Contact me</li>
          </NavLink>
        </ul>
      </nav>
    </Card>
  );
};

export default Navbar;
