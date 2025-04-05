import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div>
                <div className="hidden sm:flex md:bg-blue-600 max-w-full text-white p-4    ">
                    <div className=" container flex justify-between mx-auto sm:flex-col md:flex-col">
                        <div className="flex col  justify-center gap-2 text-sm md:text-base w-full ">
                            <p className="  flex justify-center text-sm">
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                                50%!
                            </p>
                            <ul>
                                <a href="#">
                                    {" "}
                                    <li className="font-bold text-sm">ShopNow</li>
                                </a>
                            </ul>
                        </div>
                        <div className="  flex justify-center text-sm  ">
                            <button>English</button> <RiArrowDropDownLine />
                        </div>
                    </div>
                </div>
                <div className="  container  p-4 ">
                    <div className="flex  justify-between items-center ">
                        <h1 className="font-bold text-2xl">Exclusive</h1>
                        <ul className="hidden  md:flex justify-between gap-10 text-base">
                            <li>
                                <Link to={"/"}>Home </Link>
                            </li>
                            <a href="#">
                                <li>Contact</li>
                            </a>
                            <a href="#">
                                <li>About</li>
                            </a>
                            <li>
                                <Link to={"/register"}>Sign Up </Link>
                            </li>
                        </ul>

                        <div className="hidden md:flex col gap-2 relative" >
                            <input className="placeholder:text-xs pr-8" type="text" placeholder=" What are you looking for?  " /> <CiSearch className="absolute right-2 top-1/2 -translate-1/2 " size={20} />
                        </div>
                        <button className="flex md:hidden" onClick={() => setMenuOpen(true)}>
                            <FiMenu size={30} />
                        </button>
                    </div>

                    {menuOpen && (
                        <div
                            className=" fixed top-0 left-0 w-full h-full z-50 backdrop-blur-lg  bg-neutral-900/40"
                            onClick={() => setMenuOpen(false)}
                        >
                            <div
                                className="bg-white h-full w[80%] max-w-[480px] p-5 relative "
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 hover:text-red-600 active:text-red-700"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <FiX size={30} />
                                </button>
                                <div className="flex-col items-center justify-between  mt-20">
                                    <ul className=" flex-col justify-between text-lg gap-10 ">
                                        <a href="#" className="hover:underline active:text-green">
                                            <li className="h-11 flex items-center ">Home</li>
                                        </a>
                                        <a href="#" className="hover:underline active:text-green">
                                            <li className="h-11 flex items-center ">Contact</li>
                                        </a>
                                        <a href="#" className="hover:underline active:text-green">
                                            <li className="h-11 flex items-center ">About</li>
                                        </a>
                                        <a href="#" className="hover:underline active:text-green">
                                            <li className="h-11 flex items-center ">Sign Up</li>
                                        </a>
                                    </ul>
                                    <div className="flex col gap-2 relative">
                                        <input
                                            className="placeholder:text-xs pr-8"
                                            type="text"
                                            placeholder=" What are you looking for?  "
                                        />{" "}
                                        <CiSearch
                                            className="absolute right-2 top-1/2 -translate-1/2 "
                                            size={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <hr class="hidden md:w-full border-t border-gray-400" />
            </div>
        </>
    );
}
