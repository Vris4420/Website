"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Shimmer from "./ui/shimmer";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <nav className="flex justify-between items-center text-[0.7rem] md:mt-2 pl-2 md:pl-5 md:text-xl">
                <Link href="/">
                    <Image
                        src="/Hero/logo.jpg"
                        alt="Logo"
                        width={130}
                        height={130}
                        className="object-contain"
                    />
                </Link>
                <div className="flex items-center  space-x-4">
                    <div className="flex justify-center  text-white space-x-4 md:space-x-10">
                        <Link href="/">
                            <div
                                className={`${
                                    pathname === "/" ? "" : "text-gray-400"
                                } hidden md:block`}
                            >
                                {pathname === "/" ? "HOME" : "HOME"}
                            </div>
                        </Link>
                        <Link href="/team">
                            <div
                                className={
                                    pathname === "/team" ? "" : "text-gray-400"
                                }
                            >
                                {pathname === "/team" ? "TEAM" : "TEAM"}
                            </div>
                        </Link>
                        <Link href="/events">
                            <div
                                className={
                                    pathname === "/events"
                                        ? ""
                                        : "text-gray-400"
                                }
                            >
                                {pathname === "/events" ? "EVENTS" : "EVENTS"}
                            </div>
                        </Link>
                        <Link href="/projects">
                            <div
                                className={
                                    pathname === "/projects"
                                        ? ""
                                        : "text-gray-400"
                                }
                            >
                                {pathname === "/projects"
                                    ? "PROJECTS"
                                    : "PROJECTS"}
                            </div>
                        </Link>
                        <Link href="/gallery">
                            <div
                                className={
                                    pathname === "/gallery"
                                        ? ""
                                        : "text-gray-400"
                                }
                            >
                                {pathname === "/gallery"
                                    ? "GALLERY"
                                    : "GALLERY"}
                            </div>
                        </Link>

                        <Link href="/about">
                            <div
                                className={
                                    pathname === "/about" ? "" : "text-gray-400"
                                }
                            >
                                {pathname === "/about" ? "ABOUT" : "ABOUT"}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=" mr-[5%]">
                    <Link href="/pages/results">
                        <Shimmer />
                    </Link>
                </div>
            </nav>
        </>
    );
}
