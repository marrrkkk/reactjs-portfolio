const Blur = () => {
  return (
    <>
      <span className="blurEffect top-[-50%] left-[5%] transform translate-x-[-50%]"></span>
      <span className="hidden md:block blurEffect top-[-50%] right-[-50%] transform translate-x-[-50%]"></span>
      <span className="blurEffect top-[50%] left-[50%] transform translate-x-[-50%]"></span>
    </>
  );
};

export default Blur;
