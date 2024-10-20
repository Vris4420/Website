import React from "react";
import Spline from "@splinetool/react-spline/next";
import { FocusCardsDemo } from "@/components/landingPage/FocusCardsDemo";

const Page = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[5%]">PROJECTS</h2>
            <section className="relative w-full min-h-screen  mt-[3%]">
                {/* Background video */}
                <div className="absolute inset-0 z-0 blur-md">
                    <Spline scene="https://prod.spline.design/9GeBdj9FbEUtpsoc/scene.splinecode" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10 h-full "></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-5">
                    <FocusCardsDemo />
                </div>
            </section>
        </>
    );
};

export default Page;
