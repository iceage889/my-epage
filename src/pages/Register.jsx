import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
export default function Register() {
  return (
    <>
      <div className=" md:py-16 flex  justify-between  ">
        <div className="hidden md:block w-180 ">
          <img
            src="/src/pages/images/Sided Image.svg"
            alt="Side Image"
            className=" sm: w-xl max-w-full  "
          />
        </div>
        <div className="max-w-md mx-auto p-6 ">
          <h1 className="text-2xl mb-2 ">Create an account</h1>
          <p className="text-base mb-4">Enter your details below</p>
          <form className="flex flex-col space-y-4" action="">
            <input
              type="text"
              placeholder="Name"
              className="border-b w-56 border-gray-600 p-2 focus:outline-none focus:border-blue-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="border-b w-56 border-gray-600 p-2 focus:outline-none focus:border-blue-500 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b w-56 border-gray-600 p-2 focus:outline-none focus:border-blue-500 text-sm"
            />
          </form>
          <button className="  my-8  bg-red-500 border w-56 h-10 rounded text-sm text-white">
            Create Account
          </button>
          <div className=" ">
            <button className=" flex items-center justify-center gap-2 my-8  border w-56 h-10 rounded text-sm ">
              {" "}
              <FaGoogle className="text-red-500 text-xl  " /> Sign up with
              Google{" "}
            </button>
          </div>
          <p className="text-sm">Already have account ?</p>{" "}
          <Link to={"/login"} className="text sm" href="#">
            login
          </Link>
        </div>
      </div>
    </>
  );
}
