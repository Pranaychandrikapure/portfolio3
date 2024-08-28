import nest from "../assets/images/Nest Django backend.png"
import docwise from "../assets/images/expense-tracker.png"
import recipe_site from "../assets/images/django recipe.jpg"
import calculator from "../assets/images/crossplatfrom calculator.png"
import nayaan from "../assets/images/nayaan.png"

const Project = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto px-4 relative pb-1 sm:pb-16">
                <h2
                    className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2  w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]"
                >
                    Latest Works
                </h2>
                <div
                    className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
                >
                    <div
                        className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"
                    ></div>
                    <div
                        className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                    ></div>
                    <a
                        href="https://github.com/Pranaychandrikapure/Django-Ecommerce"
                        className="flex w-full relative justify-center sm:justify-start"
                    >
                        <div
                            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
                        >
                            <img
                                className="max-w-[500px] mr-3 w-full  relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                                src={nest}
                                alt=""
                            />
                            <span
                                className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                            >Nest Ecommerce
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                        </div>
                    </a>

                    <div className="w-full">
                        <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
                            Nest Ecommerce
                        </h3>
                        <span className="text-[#459bd5] text-base md:text-lg"
                        >(Django Bakend Ecommerce)</span
                        >
                        <p className="text-justify text-sm md:text-base mt-2">
                            The application uses a Django backend and includes essential ecommerce features like product listings, shopping cart, and checkout.
                            It supports secure user authentication, product management, payment
                            processing, inventory control, and enhanced search and filtering.
                        </p>

                        <ul className="flex flex-wrap gap-2 mt-2">
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Django
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #HTML
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #CSS
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #JQuery
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Ajax
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
                >
                    <div className="order-2 sm:order-1 w-full">
                        <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
                            DocWise Application
                        </h3>
                        <span className="text-[#ffe578] text-base md:text-lg"
                        >(Centralized application for schemes and document)</span
                        >
                        <p className="text-justify text-sm md:text-base mt-2">
                            A centralized app that helps users create documents and fill
                            out scheme applications in their regional languages, providing detailed
                            guidance to overcome language barriers and avoid missed deadlines.
                        </p>

                        <ul className="flex flex-wrap gap-2 mt-2">
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #flutter
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #firebase
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #google api
                            </li>

                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #materail UI
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #figma
                            </li>
                        </ul>
                    </div>
                    <div
                        className="h-[1px] left-1/2 right-1 bg-[#1788ae] absolute top-1/2 hidden sm:block"
                    ></div>
                    <div
                        className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                    ></div>
                    <a
                        href="https://github.com/Pranaychandrikapure/DocWise-Application"
                        className="order-1 sm:order-2 flex w-full relative justify-start sm:justify-start"
                    >
                        <div
                            className="flex flex-col items-start relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
                        >
                            <img
                                className="max-w-[200px] mr-auto w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                                src={docwise}
                                alt=""
                            />
                            <span
                                className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/3 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                            >DocWise
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
                    <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
                    <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
                    <a href="https://github.com/Pranaychandrikapure/Basic_recipes_site" className="flex w-full relative justify-center sm:justify-start">
                        <div
                            className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
                        >
                            <img
                                className="max-w-[500px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                                src={recipe_site}
                                alt=""
                            />
                            <span
                                className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                            >Recipe Site
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                        </div>
                    </a>

                    <div className="w-full">
                        <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
                            Recipe Site
                        </h3>
                        <span className="text-[#fc815c] text-base md:text-lg"
                        >(Recipe upload and watch new recipes)</span
                        >
                        <p className="text-justify text-sm md:text-base mt-2">
                            Manages recipes using Django (backend) with HTML, CSS,
                            and JavaScript (frontend).
                        </p>

                        <ul className="flex flex-wrap gap-2 mt-2">
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Django
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #HTML
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #CSS
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Java script
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #figma
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
                    <div className="order-2 sm:order-1 w-full">
                        <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
                            Cross Platfrom Calculator
                        </h3>
                        <span className="text-[#47afa1] text-base md:text-lg"
                        >(Calculator GUI desktop application)</span
                        >
                        <p className="text-justify text-sm md:text-base mt-2">
                            It is cross platfrom calculator that can run on any operating system it might windows, Linux or MacOS
                        </p>

                        <ul className="flex flex-wrap gap-2 mt-2">
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Python
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Tkinter
                            </li>

                        </ul>
                    </div>
                    <div
                        className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"
                    ></div>
                    <div
                        className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                    ></div>
                    <a
                        href="https://github.com/Pranaychandrikapure/crossplatfrom_calculator"
                        className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
                    >
                        <div
                            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
                        >
                            <img
                                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                                src={calculator}
                                alt=""
                            />
                            <span
                                className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                            >Calculator
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
                    <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
                    <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
                    <a href="https://nayaan.vercel.app/" className="flex w-full relative justify-center sm:justify-start">
                        <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
                            <img
                                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                                src={nayaan}
                                alt=""
                            />
                            <span
                                className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                            >Nayaan
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                        </div>
                    </a>

                    <div className="w-full">
                        <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
                            Nayaan is AI device
                        </h3>
                        <span className="text-[#fc815c] text-base md:text-lg"
                        >(I am team member of team Nayaan.)</span
                        >
                        <p className="text-justify text-sm md:text-base mt-2">
                            Nayaan is an AI-enabled smart assistive device designed specifically for individuals who are blind or visually impaired. With its advanced object detection and OCR capabilities, Nayaan empowers users to effortlessly read text from books, newspapers, magazines, and more using the OCR feature. Additionally, it enables users to perceive their surroundings with ease through its object detection feature.
                        </p>

                        <ul className="flex flex-wrap gap-2 mt-2">
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #AI
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #IoT
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #OCR
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Next.js
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Three.js
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #HTML
                            </li>

                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #CSS
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #Javascript
                            </li>
                            <li
                                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                            >
                                #figma
                            </li>

                        </ul>
                    </div>
                </div>
                <div
                    className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
                ></div>
            </section>
        </>
    );
};
export default Project;