import { FocusCardsTeam } from "@/components/landingPage/FocusCardTeam";
import React from "react";

export default function Team() {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[10%]">
                Our Team
            </h2>
            <div className="mt-[5%]">
                <FocusCardsTeam />
            </div>
        </>
    );
}
