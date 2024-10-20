import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative w-[95%] h-screen overflow-hidden mt-[-2%] border rounded-lg  ">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/Hero/HeroVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    IETE MAIT
                </h1>
                <p className="text-lg md:text-2xl max-w-xl">
                    Explore amazing content and experience the future with us.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;