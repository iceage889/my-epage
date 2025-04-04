import { IoEnter } from "react-icons/io5";
export default function Footer() {
    return (
        <>
            <div className="bg-black " >
                <div className=" flex-row flex-wrap px-10 gap-10  md:bg-black  text-white flex justify-center space-x-10 mt-10 ">
                    <ul className=" hidden  md:flex-col space-y-2 ">
                        <h1 className="font-extrabold text-xl">Excluive</h1>
                        <a href=""><li className="text-sm">Subscribe</li></a>
                        <a href=""><li className="text-xs">Get 10% off your first order</li></a>

                        <input type="email" placeholder="Enter your email" className=" border border-e-white text-sm w-40 h-8 rounded text-center " /> <IoEnter />
                    </ul>
                    <ul className=" flex flex-col space-y-2">
                        <h1 className="font-bold text-sm">Support</h1>
                        <a href=""><li className="text-xs">111 Bijoy sarani,Dhaka, <br /> DH1515,Banglaesh.</li></a>
                        <a href=""><li className="text-xs">exclusive@gmail.com</li></a>
                        <a href=""><li className="text-xs">+88015-888888-9999</li></a>
                    </ul>
                    <ul className=" flex flex-col space-y-2">
                        <h1 className="font-bold text-sm">Account</h1>
                        <a href=""><li className="text-xs">My Account</li></a>
                        <a href=""><li className="text-xs">Login / Register</li></a>
                        <a href=""><li className="text-xs">Cart</li></a>
                        <a href=""><li className="text-xs">Wishlist</li></a>
                        <a href=""><li className="text-xs">Shop</li></a>
                    </ul>
                    <ul className=" flex flex-col space-y-2">
                        <h1 className="font-bold text-sm">Quick Link</h1>
                        <a href=""><li className="text-xs">Privacy Policy</li></a>
                        <a href=""><li className="text-xs">Terms Of Use</li></a>
                        <a href=""><li className="text-xs">FAQ</li></a>
                        <a href=""><li className="text-xs">Contact</li></a>
                    </ul>
                    <ul className=" md:flex-col space-y-2">
                        <h1 className="font-bold text-sm">DownLoad App</h1>
                        <a href=""><li className="text-sm">Save $3 with App New User Only</li></a>
                        <div>
                            <div className="flex gap-2">
                                <img src="/src/pages/images/Qr Code.svg" alt="" className="w-18 h-20" />
                                <img src="/src/pages/images/Frame 718.svg" alt="" className="w-18 h-20" />
                            </div>
                            <img src="/src/pages/images/Frame 741.svg" alt="" className="py-4 w-25 " />
                        </div>
                    </ul>
                </div>


            </div>
        </>
    );
}