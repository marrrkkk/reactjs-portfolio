import arrow from "../../assets/arrow.svg";
// lg:block w-[350px] md:w-[50%] lg:w-[25%] lg:h-[370px]

const Card = ({ title, content, img, tag, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center justify-center mx-2 mb-10 text-lg transition-colors rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 hover:drop-shadow-md"
      >
        <div className="flex flex-col items-center lg:block lg:w-[400px] md:w-[50%] pb-7">
          <div className="flex justify-center">
            <img src={img} width={340} className="m-5 rounded-lg" />
          </div>
          <div className="flex">
            <h1 className="ml-7 text-xl text-white this hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-Inter">
              {title}
            </h1>
            <img src={arrow} width={20} />
          </div>
          <p className="mb-2 mx-7 text-sm">{content}</p>
          <div className="flex">
            <p className="px-5 py-2 m-3 ml-7 text-sm text-black bg-white rounded-3xl">
              {tag}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
