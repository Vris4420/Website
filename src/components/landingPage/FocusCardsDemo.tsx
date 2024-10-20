import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
    const cards = [
        {
            title: "Web Development",
            src: "/Domain/img2.jpeg",
            href: "/projects/WebDev", // Ensure this is the correct path
        },
        {
            title: "Artificial Intelligence",
            src: "/Domain/img3.jpg",
            href: "/projects/ArtificialInt", // Change to an appropriate route
        },
        {
            title: "Machine Learning",
            src: "/Domain/img4.png",
            href: "/projects/MachineL", // Change to an appropriate route
        },
        {
            title: "VLSI",
            src: "/Domain/img5.png",
            href: "/projects/Vlsi", // Ensure this is the correct path
        },
        {
            title: "Robotics",
            src: "/Domain/img6.png",
            href: "/projects/Robotics", // Change to an appropriate route
        },
        {
            title: "Internet of Things",
            src: "/Domain/img7.jpg",
            href: "/projects/IOT", // Change to an appropriate route
        },
    ];

    return <FocusCards cards={cards} />;
}
