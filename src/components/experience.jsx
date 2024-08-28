// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

//images
import itsaWinner from '../assets/images/itsa_winner.png'
import udmey_certificate from '../assets/images/Udmey_certificate.png'
import oasis_infobyte from '../assets/images/Oasis_infobytes.png'
import prajwalan from '../assets/images/prajwalan.png'

const Experience = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto pb-12 ">
                <h2
                    className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md"
                >
                    Experience and Certificate
                </h2>
                <div className="swiper mySwiper !py-14">
                    <div className="swiper-wrapper items-center">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{ clickable: true }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <div className="swiper-slide px-4 py-[100px]">
                                    <div
                                        className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab"
                                    >
                                        <img
                                            className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-[20px] drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                            src={prajwalan}
                                            alt="testimonial 3"
                                        />
                                        <div
                                            className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative"
                                        >
                                            <p className="text-sm md:text-base mb-2">
                                                “I am part of Team Nayaan, which recently published its patent. Over the past year, I have primarily worked on the OCR component of the Nayaan device and have also contributed to the frontend website using Three.js.Where Nayaan achived lots of prize and also published the <b>patient</b> of Nayaan”
                                            </p>
                                            <h2
                                                className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl"
                                            >
                                                Nayaan
                                            </h2>
                                            <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                                Founder Bhavesh Chaudhari (Senior)<br/>
                                                https://nayaan.vercel.app/
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide px-4 py-[100px]">
                                    <div
                                        className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab"
                                    >
                                        <img
                                            className="shrink-0 w-[120px] h-[180px] md:w-[180px] md:h-[180px] rounded-[20px] drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                            src={itsaWinner}
                                            alt="testimonial 3"
                                        />
                                        <div
                                            className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative"
                                        >
                                            <p className="text-sm md:text-base mb-2">
                                                “I am winner of ITSA (Information Technology Student Assosiation) project expo competition with my friend Shivendoo and Team Nayaan. This competition held in Goverment College of Engineering, Amravati.”
                                            </p>
                                            <h2
                                                className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl"
                                            >
                                                Winner 
                                            </h2>
                                            <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                                ITSA Project Expo
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide px-4 py-[100px]">
                                    <div
                                        className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab"
                                    >
                                        <img
                                            className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-[20px] drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                            src={udmey_certificate}
                                            alt="testimonial 3"
                                        />
                                        <div
                                            className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative"
                                        >
                                            <p className="text-sm md:text-base mb-2">
                                                “I completed a Tkinter course on Udemy, where I gained expertise in GUI desktop application development using Python&apos;s Tkinter library. As part of the course, I developed a cross-platform calculator application that can run independently on Windows, iOS, and Linux, providing a seamless experience across different operating systems.”
                                            </p>
                                            <h2
                                                className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl"
                                            >
                                                Certificate 
                                            </h2>
                                            <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                                Udmey
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="swiper-slide px-4 py-[100px]">
                                    <div
                                        className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab"
                                    >
                                        <img
                                            className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-[20px] drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                            src={oasis_infobyte}
                                            alt="testimonial 3"
                                        />
                                        <div
                                            className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative"
                                        >
                                            <p className="text-sm md:text-base mb-2">
                                                “I successfully completed a virtual internship at Oasis Infobyte, where I was assigned tasks focused on frontend development. Upon the successful submission of these tasks, I was awarded a certificate by the company, recognizing my accomplishments and skills in this area.”
                                            </p>
                                            <h2
                                                className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl"
                                            >
                                                Viratual Internship
                                            </h2>
                                            <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                                Oasis Infobyte
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Experience;
