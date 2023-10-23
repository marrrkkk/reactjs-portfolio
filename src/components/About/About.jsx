import js from "../../assets/js2.svg";

const About = () => {
  return (
    <section className="flex justify-center text-white mt-52" id="about">
      <div className="w-[90%] lg:w-[70%] bg-[#161b22] rounded-lg slide-down">
        <h1 className="my-2 text-sm text-center text-gray-500">
          Visual Studio Code
        </h1>
        <div className="flex w-fit px-5 py-2 rounded-t-md mx-5 bg-[#24292f]">
          <img src={js} width={17} className="mr-2" />
          about.js
        </div>
        <div className="overflow-scroll md:overflow-hidden  bg-[#24292f] p-2 rounded-b-lg">
          <pre>
            &nbsp;1 <span className="text-[#c3a2ef]">const</span>{" "}
            <span className="text-[#d3b775]">aboutMe</span>{" "}
            <span className="text-[#4b95a0]">=</span>{" "}
            <span className="text-[#ad5b45]">&#123;</span>
          </pre>
          <pre>
            &nbsp;2 <span className="text-[#ea7461]">    name</span>:{" "}
            <span className="text-[#88af62]">'Mark Louie Alvarez'</span>,
          </pre>
          <pre>
            &nbsp;3 <span className="text-[#ea7461]">    age</span>:{" "}
            <span className="text-[#c38e58]">19</span>,
          </pre>
          <pre>
            &nbsp;4 <span className="text-[#ea7461]">    location</span>:{" "}
            <span className="text-[#88af62]">'Philippines'</span>,
          </pre>
          <pre>
            &nbsp;5 <span className="text-[#ea7461]">    interest</span>:{" "}
            <span className="text-[#c3a2ef]">&#91;</span>
            <span className="text-[#88af62]">'coding'</span>,{" "}
            <span className="text-[#88af62]">'gaming'</span>,{" "}
            <span className="text-[#88af62]">'tech'</span>
            <span className="text-[#c3a2ef]">&#93;</span>,
          </pre>
          <pre>
            &nbsp;6 <span className="text-[#ea7461]">        contact</span>:{" "}
            <span className="text-[#ad5b45]">&#123;</span>
          </pre>
          <pre>
            &nbsp;7 <span className="text-[#ea7461]">            email</span>:{" "}
            <span className="text-[#88af62]">'definitelynotmark@gmail.com</span>
            ',
          </pre>
          <pre>
            &nbsp;8 <span className="text-[#ea7461]">            linkedin</span>:{" "}
            <span className="text-[#88af62]">'Mark Louie Alvarez'</span>,
          </pre>
          <pre>
            &nbsp;9 <span className="text-[#ea7461]">            twitter</span>:{" "}
            <span className="text-[#88af62]">'marrkkk___'</span>
          </pre>
          <pre>
            10 <span className="text-[#ad5b45]">    &#125;</span>
          </pre>
          <pre>
            11 <span className="text-[#ad5b45]">&#125;</span>;
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
