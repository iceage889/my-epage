"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
export default function DemoPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-primary h-screen">
            <div className="min-h-[48px] px-4 py-2 flex items-center justify-center text-center bg-black text-[#FAFAFA] relative">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <Link href="/" className="underline">
                        Shop Now
                    </Link>
                </p>

                <button className="hidden lg:block absolute right-4">English</button>
            </div>
            {/* Navbar */}
            <div className=" h-16 md:h-20 bg-white text-black px-4 flex items-center justify-center">
                <div className="flex items-center justify-between gap-4 w-full max-w-[1170px]">
                    <h1 className="text-2xl font-bold ">Exclusive</h1>

                    <nav className="hidden md:flex gap-4 lg:gap-8 xl:gap-12">
                        <Link href="/" className="hover:underline active:text-green">
                            Home
                        </Link>
                        <Link href="/" className="hover:underline active:text-green">
                            Contact
                        </Link>
                        <Link href="/" className="hover:underline active:text-green">
                            About
                        </Link>
                        <Link href="/" className="hover:underline active:text-green">
                            Sign Up
                        </Link>
                    </nav>

                    <div className="h-10 bg-[#F5F5F5] rounded px-3 hidden md:flex items-center focus-within:border focus-within:border-blue-700">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent flex-1 h-full outline-none"
                        />
                        <FiSearch />
                    </div>

                    {/* Menu Button */}
                    <button
                        className="flex items-center h-10 w-10 justify-center md:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>
            {/* End Navbar */}

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-neutral-900/40 z-50 backdrop-blur-lg md:hidden"
                    onClick={() => setMenuOpen(false)}
                >
                    <div
                        className="bg-white h-full w-[80%] max-w-[300px] p-5 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* close button */}
                        <button
                            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 hover:text-red-600 active:text-red-700"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FiX size={24} />
                        </button>
                        <nav className="flex flex-col gap-4 text-lg text-center mt-20 ">
                            <Link
                                href="/"
                                className="h-11 flex items-center hover:underline active:text-green"
                            >
                                Home
                            </Link>
                            <Link
                                href="/"
                                className="h-11 flex items-center hover:underline active:text-green"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/"
                                className="h-11 flex items-center hover:underline active:text-green"
                            >
                                About
                            </Link>
                            <Link
                                href="/"
                                className="h-11 flex items-center hover:underline active:text-green"
                            >
                                Sign Up
                            </Link>

                            <div className="h-10 bg-[#F5F5F5] rounded px-3 flex items-center focus-within:border focus-within:border-blue-700">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="bg-transparent flex-1 h-full outline-none"
                                />
                                <FiSearch />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
            {/* End Mobile Menu */}
        </div>
    );
}
