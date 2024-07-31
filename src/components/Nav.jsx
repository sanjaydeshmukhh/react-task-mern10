import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <>
          <nav className="flex items-center justify-center h-16 px-4 md:px-6 bg-[#f1f5f9] border-b gap-20 text-xl">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/Gallery"}>Gallery</NavLink>
              <NavLink to={"/About"}>About</NavLink>
          </nav>
      </>
  );
}

export default Nav