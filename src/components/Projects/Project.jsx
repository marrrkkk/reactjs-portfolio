import Card from "./Card";
import snipe from "../../assets/snipe.webp";
import ghibli from "../../assets/Ghibli.webp";
import portfolio from "../../assets/portfolio.webp";

const Project = () => {
  return (
    <section className="slide-up">
      <h1 className="flex justify-center mt-10 mb-5 text-2xl text-transparent this bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-Inter">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <Card
          img={ghibli}
          title={"Ghibli"}
          content={
            "A Ghibli inspired web design, my very first attempt on designing using figma"
          }
          tag={"Figma"}
          link={"https://www.behance.net/gallery/182842763/Ghibli-Web-Design"}
        />
        <Card
          img={snipe}
          title={"Snipebot"}
          content={
            "Snipe is an advanced Discord SnipeBot that can retrieve upto 20 deleted/edited messages."
          }
          tag={"Discord.js"}
          link={"https://github.com/marrrkkk/SnipeBot"}
        />
        <Card
          img={portfolio}
          title={"Old Portfolio"}
          content={
            "My old portfolio made with html and css, inspired by my favourite game, Red Dead Redemption 2."
          }
          tag={"HTML + CSS"}
          link={"https://marrrkkk.github.io/MarkLouie/"}
        />
      </div>
    </section>
  );
};

export default Project;
