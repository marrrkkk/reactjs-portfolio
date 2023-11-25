import arrow from "../../assets/arrow.svg";

const Card = ({ title, content, img, tag, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center justify-center mx-2 mb-10 text-lg transition-colors rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 hover:drop-shadow-md"
      >
        <div className="flex flex-col lg:block lg:w-[400px] pb-7">
          <div className="flex justify-center">
            <div
              className="w-[340px] h-[170px] m-5 rounded-lg bg-cover bg-white"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
          <div className="flex w-[340px]">
            <h1 className="ml-5 lg:ml-7 text-xl text-white this hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-Inter">
              {title}
            </h1>
            <img src={arrow} width={20} />
          </div>
          <p className="w-[340px] mb-2 ml-5 lg:ml-7 text-sm">{content}</p>
          <div className="flex">
            <p className="px-5 py-2 m-3 ml-5 lg:ml-7 text-sm text-black bg-white rounded-3xl">
              {tag}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
