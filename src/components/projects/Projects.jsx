import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
// import portfolios from "../assets/data/portfolioData";
import Modal from "./Modal";

export default function Projects(props) {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState("all");
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems((prev) => prev + 3);
    };

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === "all") {
            setPortfolios(data);
        }

        if (selectTab === "web-design") {
            const filteredData = data.filter(
                (item) => item.category === "Web Design"
            );
            setPortfolios(filteredData);
        }

        if (selectTab === "ux-design") {
            const filteredData = data.filter((item) => item.category === "Ux");
            setPortfolios(filteredData);
        }
    }, [selectTab]);

    return (
        <div name='work' className='w-full lg:h-screen text-gray-300 bg-[#0a192f]'>
            <div className="sm:mx-32 mx-7">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-0 sm:mb-[-20px] sm:text-center sm:mx-auto">
                        <h3 className="dark:text-white text-[2rem] font-[700] mt-[20px] border-b-4 border-pink-600">
                            My Projects
                        </h3>
                    </div>

                    {/* <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UX Design
            </button>
          </div> */}
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-8">
                    {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div
                            key={index}
                            className={props.nav ? 'group max-w-full sm:w-[50%] md:w-[48%] lg:w-[32.2%]  sm:z-[] ' : 'group max-w-full sm:w-[50%] md:w-[48%] lg:w-[32.2%] relative sm:z-[] '}>
                            <figure>
                                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" style={{ width: '550px' }} />
                            </figure>

                            <div className="w-full h-full  bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button
                                        onClick={() => showModalHandler(portfolio.id)}
                                        className="text-white bg-[#2978B5] hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[700] ease-in duration-200"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button
                        onClick={loadMoreHandler}
                        className="text-white bg-[#2978B5] hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                    >
                        Load More
                    </button>
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </div>
    )
}
