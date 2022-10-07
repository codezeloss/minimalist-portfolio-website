import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import icons from "../../constants/images/icons";
import Card from "../../UI/Card";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const smoothScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let activeStyle = {
    color: "#5FB4A2",
  };

  const menuToggle = () => {
    setMenuDisplay((prevState) => !prevState);
  };

  return (
    <Card>
      <nav className="flex flex-row justify-between items-center mt-[64px]">
        <Link to="/">
          <img className="w-[68.08px] h-[32px]" src={icons.logo} alt="logo" />
        </Link>

        <ul className="flex flex-row gap-[32px] uppercase text-[12px] font-medium font-publicsans tracking-[2px] leading-[14px] cursor-pointer 4bp:hidden">
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

        <div className="hidden 4bp:flex">
          {!menuDisplay ? (
            <img
              src={icons.hamburger}
              alt="navigation menu"
              className="w-[24px] h-[13px] cursor-pointer"
              onClick={menuToggle}
            />
          ) : (
            <img
              src={icons.close}
              alt="navigation menu"
              className="w-[18px] h-[19px] cursor-pointer"
              onClick={menuToggle}
            />
          )}

          {menuDisplay && (
            <ul className="bg-dark-blue w-[223px] h-[186px] text-white uppercase text-[12px] font-publicsans leading-[14px] text-center flex flex-col gap-[32px] tracking-[2px] justify-center items-center 4bp:absolute top-[116px] right-[1.8rem] z-20">
              <Link to="/" onClick={menuToggle}>
                <li>Home</li>
              </Link>
              <Link to="/portfolio" onClick={menuToggle}>
                <li>Portfolio</li>
              </Link>
              <Link to="contact-me" onClick={menuToggle}>
                <li>Contact me</li>
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </Card>
  );
};

export default Navbar;
