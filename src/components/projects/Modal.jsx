import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="overflow-auto w-full h-full fixed top-[0] left-0 z-10 bg-headingColor bg-opacity-40">
      <div className=" dark:bg-slate-800 w-11/12 md:max-w-[600px] md:w-full absolute sm:top-[75%] sm:left-[27%] left-4 top-[55%] z-20 bg-white rounded-[8px] transform-translate-x-1/2 -translate-y-1/2 p-5 ">
        <div>
          <figure>
            {
              portfolio.vidUrl != null ?
            <video controls autoPlay autoFocus src={portfolio.vidUrl} className="rounded-[8px]"></video>:
            <img src={portfolio.imgUrl} alt={portfolio.title} />
            }
          </figure>
        </div>

        <div>
          <h2 className="text-2xl dark:text-white font-[700] my-5">
            {portfolio.title}
          </h2>

          <p className="text-[15px] leading-7 text-smallTextColor font-semibold dark:text-white">
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="dark:text-white text-[18px] text-[700] font-semibold">
              Technologies:
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-[#23283E] text-[#CDCDFF] py-2 px-3 rounded-[5px] text-[15px] font-semibold leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <a href={portfolio.siteUrl} target="_blank" rel="noreferrer">
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Live Site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
