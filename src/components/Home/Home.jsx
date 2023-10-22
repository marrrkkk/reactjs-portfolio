import pic from "../../assets/coding.svg";
import githubIcon from "../../assets/github.svg";
import igIcon from "../../assets/instagram.svg";
import fbIcon from "../../assets/facebook.svg";
import lkIcon from "../../assets/linkedin.svg";

const Home = () => {
  const icon = [githubIcon, igIcon, fbIcon, lkIcon];
  const github = "https://github.com/marrrkkk";
  const instagram = "https://www.instagram.com/marrrrkkkk__/";
  const facebook = "https://www.facebook.com/marrrrrrkk";
  const linkedin = "https://www.linkedin.com/in/mark-louie-alvarez-b90162257/";
  const link = [github, instagram, facebook, linkedin];
  return (
    <section id="home" className="pt-1">
      <div className="lg:flex lg:flex-row flex flex-col-reverse lg:justify-center items-center lg:mt-52 lg:space-x-20">
        <div>
          <h1 className="font-Inter lg:text-6xl text-5xl mt-10 lg:mt-0 text-white">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Mark
            </span>
          </h1>
          <h1 className="font-Inter lg:text-6xl text-5xl text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Web
            </span>{" "}
            Developer
          </h1>
          <p className="lg:w-96 mt-3 text-left w-80 font-InterRegular">
            Hello! I'm Mark Louie Alvarez, an aspiring web developer focusing on
            React.js. I'm passionate about coding, and I'm dedicated to honing
            my skills in web development.
          </p>
          <ul className="flex space-x-4 mt-3">
            {icon.map((icon, i) => (
              <a href={link[i]} target="_blank" key={i}>
                <li>
                  <img src={icon} width={30} />
                </li>
              </a>
            ))}
          </ul>
        </div>
        <img src={pic} className="lg:w-[500px] w-80 mt-32 lg:mt-0" />
      </div>
    </section>
  );
};

export default Home;
