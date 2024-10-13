/* eslint-disable react/no-unknown-property */
import { Carousel, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import image from "../data/event.png"
import { useState } from "react";



export default function Slider() {

    const [popup, setPopup] = useState(true)

    const slider = [
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-1.jpg?alt=media&token=3e1b8022-80ef-4cf5-b6e2-49d2ea870554' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-2.jpg?alt=media&token=0ba6a141-4adb-46db-b664-7ea92c002867' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-3.jpg?alt=media&token=7f23e980-c8b8-470f-a263-2e0825c86753' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-4.jpg?alt=media&token=82b061ee-3b78-4755-b0f9-8494a387af6c' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-5.jpg?alt=media&token=f035e02c-776b-414e-b692-9f2d04f26e3c' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-6.jpg?alt=media&token=563597d3-ae45-40a6-8111-e053a96f36d9' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-7.png?alt=media&token=ff3692f7-ea91-4d2e-84cc-51809e0592b0' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-8.jpg?alt=media&token=985a41ef-e435-47a1-99be-d72004ec7895' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-9.jpg?alt=media&token=ab99e947-eef9-4a0e-b19c-a4133df788d6' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-10.jpg?alt=media&token=5dda968f-8fed-4878-b46b-5b921733efbd' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-11.jpg?alt=media&token=abbb6853-7ffa-4c50-9e8d-b731241d92b4' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-12.jpg?alt=media&token=23020d0c-60ed-4da0-817b-efbea9d14e04' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-13.jpg?alt=media&token=c9350099-e1b7-4081-b933-8e20087ffed4' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-14.jpg?alt=media&token=8f326754-7b48-44df-a7d6-7ba218e08c95' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-15.jpg?alt=media&token=d1b10ac4-e34c-4595-a953-b31d18433478' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-16.jpeg?alt=media&token=9ce8c564-5528-49ea-be37-f3f04934552a' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-17.jpg?alt=media&token=05dd2926-f217-4cb7-b9fd-f2d09b4249cd' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-18.jpg?alt=media&token=a3b9f309-1c52-48cb-a296-7a50706a904f' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-19.jpg?alt=media&token=59114ea4-39ca-464f-95ed-50d07d543b0e' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-20.jpg?alt=media&token=d81e00ef-17f2-4057-9254-0b41ad5bfc48' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2Fslide-21.jpg?alt=media&token=93a73eca-143f-42a4-a494-115a21546651' },

    ]
    // -17.5rem

    return (
        <div className="">
            <div className="w-[90%] flex m-auto pt-[35%] md:pt-[4%] mb-20">
                <Carousel
                    className="rounded-xl overflow-y-visible"
                    autoplay={true}
                    loop={true}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    {slider.map((i, index) => (

                        <img
                            key={index}
                            src={i.src}
                            alt="image 1"
                            className="h-[30rem] w-full object-cover
                             bg-center"
                        />))}


                </Carousel>
            </div>

            <div className={`w-[20rem] p-4 flex gap-2 absolute top-48 ${popup ? 'right-2' : 'right-[-16.5rem]'} bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30 transition-all ease-in-out duration-300`}>
                <div className="flex flex-col items-center gap-3 border-[#f6640f] border-2 rounded-lg text-blue-900">
                    <span>
                        {popup ?
                            <span onClick={() => setPopup(false)} className="cursor-pointer">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                            :
                            <span onClick={() => setPopup(true)} className="cursor-pointer">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </span>
                        }
                    </span>
                    <span className="flex flex-col items-center ">
                        <span className="font-bold text-lg text-blue-900 -mb-2">U</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">P</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">C</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">O</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">M</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">I</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">N</span>
                        <span className="font-bold text-lg text-blue-900 -mb-2">G</span>
                    </span>
                </div>
                <div className="flex flex-col justify-evenly">
                    <img src={image} className="w-full h-40 rounded-md cursor-pointer " />
                    <div className="flex flex-col gap-1 justify-center items-center mt-2">
                        <Link
                            to={'https://drive.google.com/file/d/1BjtAtKDltsDY40CiEn21Ln_BpV3QZosA/view?usp=sharing'}
                            target='_blank'
                            className='w-fit text-center rounded-md py-1 px-2 lg:mx-0  text-sm  text-white bg-blue-600 font-semibold transition-all duration-300 hover:bg-blue-700'
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto mb-36">
                <marquee id='marquee' className="text-2xl font-semibold py-2" loop="5" direction="right-to-left">Promoting the advancement of aviation through education, scholarships, and mutual support while honoring our unique history and sharing our passion for flight</marquee>
            </div>
        </div>
    );
}
