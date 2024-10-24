import { FocusCardsTeam } from "@/components/landingPage/FocusCardTeam";
import SquareCard from "@/components/ui/TeamCard";
import React from "react";

export default function Team() {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[5%] mb-[5%]">
                Our Team
            </h2>
            <div>
                <div className="flex justify-center space-x-20 mt-10">
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                        name="Manasvi Sinha"
                        designation="Chairperson"
                        iconLink="https://www.linkedin.com/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                        name="Ansh Tiwari"
                        designation="Vice Chairperson"
                        iconLink="https://www.linkedin.com/in/ansh-tiwari-892038256/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                        name="Dhvani Rana"
                        designation="General Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                </div>

                <div className="flex justify-center space-x-20 mt-10">
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                        name="Ritika Gupta"
                        designation="Joint Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                        name="Priyanshu Raj"
                        designation="Finance Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                </div>
            </div>
            <div className="flex justify-around">
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Technical Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Vrishank Sharma"
                            designation="Technical Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Arjun"
                            designation="Technical Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Social Media & Graphics Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Prem sai"
                            designation="Social Media & Graphics Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Shrey Kothari"
                            designation="Social Media & Graphics Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Content Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Dhwani Bali"
                            designation="Content Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Akshita"
                            designation="Content Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>PR Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Pranav Bansal"
                            designation="PR Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Nishchay Kapoor"
                            designation="PR Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Operations Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Ishaan Garg"
                            designation="Operations Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776437/IETE/New%20Team/prof_xu3zqe.png"
                            name="Ojas"
                            designation="Operations Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
