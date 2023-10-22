import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import projects from "../../assets/projects.svg";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  return (
    <>
      <nav className="navBar md:hover:h-[10%] lg:hover:h-[15%] lg:w-[25%] md:w-[40%] md:h-[9%] transition-all rounded-lg flex justify-center items-center bg-black/50 border backdrop-blur-sm font-InterRegular z-50">
        <ul className="flex flex-wrap space-x-10 md:space-x-16">
          <li>
            <a
              href="#home"
              data-tooltip-id={"my-tooltip"}
              data-tooltip-content="Home"
              data-tooltip-place="left"
              data-tooltip-offset={70}
              data-tooltip-float={true}
            >
              <img
                src={home}
                className="w-[45px] hover:w-[70px] transition-all"
              />
            </a>
          </li>
          <li>
            <a
              href="#about"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="About"
              data-tooltip-place="left"
              data-tooltip-offset={70}
              data-tooltip-float={true}
            >
              <img
                src={about}
                className="w-[45px] hover:w-[70px] transition-all"
              />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Projects"
              data-tooltip-place="left"
              data-tooltip-offset={70}
              data-tooltip-float={true}
            >
              <img
                src={projects}
                className="w-[45px] hover:w-[70px] transition-all"
              />
            </a>
          </li>
          <Tooltip id="my-tooltip" />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
