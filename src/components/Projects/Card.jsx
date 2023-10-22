import arrow from "../../assets/arrow.svg";

const Card = ({ title, content, img, tag, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center justify-center lg:block w-[90%] md:w-[50%] lg:w-[25%] lg:h-[370px] mb-10 rounded-lg text-lg hover:bg-white hover:bg-opacity-10 hover:drop-shadow-md transition-colors cursor-pointer"
      >
        <div className="w-full flex justify-center">
          <img src={img} width={340} className="m-5 rounded-lg" />
        </div>
        <div className="flex">
          <h1 className="ml-5 text-xl hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-Inter">
            {title}
          </h1>
          <img src={arrow} width={20} />
        </div>
        <p className="ml-5 mb-2 text-sm">{content}</p>
        <div className="flex">
          <p className="ml-5 px-5 py-2 bg-white text-black rounded-3xl text-sm m-3">
            {tag}
          </p>
        </div>
      </a>
    </>
  );
};

export default Card;
