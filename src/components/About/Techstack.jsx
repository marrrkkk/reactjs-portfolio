import react from "../../assets/react.svg";
import js from "../../assets/js.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import nodejs from "../../assets/nodejs.svg";

const Techstack = () => {
  const icons = [react, js, html, css, tailwind, nodejs];
  return (
    <section className="flex justify-center mt-10 mb-40">
      <ul className="flex flex-wrap space-x-3 lg:space-x-4">
        {icons.map((icon, i) => (
          <li key={i}>
            <img src={icon} className="w-[40px] lg:w-[70px]" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techstack;
