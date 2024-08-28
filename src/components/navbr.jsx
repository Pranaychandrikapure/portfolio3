
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
    <section className="flex flex-col justify-between h-screen">
      <header className="z-20 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto"> 
      <img src={logo} className="w-[6rem]" alt="Logo" />



        <div className="flex gap-4 mr-2 pointer-events-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <a href="tel:9356744015">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path></svg
          ></a>
          <a href="https://wa.me/9356744015?text=Hi, How are you?" target="_blank">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="whatsapp"
              className="svg-inline--fa fa-whatsapp fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <div className="flex mt-[100px] relative mb-10">
        <div className="w-full h-full px-4 max-w-screen-xl mx-auto">
    
          <div className="relative ml-3 md:ml-12">
            <h1
              className="pointer-events-none text-4xl md:text-[45px] font-['Spartan'] mr-8 mt-2 line"
            >
              Pranay Chandrikapure
            </h1>
            <p className="pointer-events-none font-['Merriweather'] my-5">
              Full Stack Developer
            </p>
            <div className="w-full md:w-1/2 h-10 mb-6 md:mb-15">
  <ul className="flex flex-wrap gap-2 mt-2 mb-5 w-full md:w-[29rem]">
    <li className="border rounded-[80px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-green-500">#Django</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-blue-500">#React.js</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-red-500">#Redux</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-yellow-500">#HTML</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-blue-900">#CSS</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-orange-500">#JavaScript</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-blue-600">#Flutter</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-yellow-700">#Firebase</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-pink-700">#OCR</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-red-900">#Node-RED</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-green-200">#SQL</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-blue-300">#C</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-red-200">#C++</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-green-500">#Python</li>
    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-xs sm:text-sm md:text-base cursor-pointer hover:border-blue-500">#Dart</li>
  </ul>
  <button className="bg-[#92f8d6] py-2 px-5 mt-1 rounded font-extrabold bg-gradient-to-l from-[#2f82ff] to-[#170349e6] relative hover:bg-black hover:border-[2px] hover:border-[#020202]">
    <a href="https://docs.google.com/uc?export=download&id=1EFt3dTY_o_KdK2-aORHZ8mnUKQJMweAk">Download Resume</a>
  </button>
</div>

          </div>
        </div>

        <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
          <li>
            <a
              href="https://www.linkedin.com/in/pranay-chandrikapure-ba4861252/"
              target="_blank"
            >
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:pranaychandrikapure@gmail.com" target="_blank">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/Pranaychandrikapure">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  fill="#FFFF"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div> 
      <div className="relative self-center mt-[100px]">
      <div
        className=" mt-3 relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]"
      >
        <button
          className="bg-[#4595eb] py-3 mt-[50px]  px-8 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20"
        >
          Latest Works

        </button>
      </div>
      </div>
    </section>
    </>
  );
};

export default Navbar;
