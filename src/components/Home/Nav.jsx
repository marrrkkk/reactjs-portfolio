import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import projects from "../../assets/projects.svg";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  return (
    <>
      <nav className="fixed left-1/2 bottom-0 transform -translate-x-1/2 w-[70%] h-[11%] active:h-[15%] md:active:h-[10%] md:w-[40%] md:h-[9%] lg:h-[13%] lg:hover:h-[15%] lg:w-[25%] transition-all rounded-lg flex justify-center items-center bg-black/50 border backdrop-blur-sm z-50">
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
                className="w-[45px] active:w-[70px] lg:hover:w-[70px] transition-all"
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
                className="w-[45px] active:w-[70px] lg:hover:w-[70px] transition-all"
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
                className="w-[45px] active:w-[70px] lg:hover:w-[70px] transition-all"
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
