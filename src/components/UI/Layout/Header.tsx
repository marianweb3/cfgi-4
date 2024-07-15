import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white my-12 relative z-[10]">
      <div className="max-w-[1440px] mx-auto w-full sm:flex-row flex-col flex justify-between items-center bg-[#0000001A] rounded-full border-2 border-[#FFFFFF1A] px-8 py-2 sm:pr-2">
        <Link to="/" className="flex items-center space-x-4">
          <img src={"/assets/logo.svg"} alt="" />
        </Link>
        <nav className="hidden lg:flex space-x-[50px]">
          <a
            href="#"
            className="text-white hover:text-orangeBg font-medium text-[20px] leading-[30px] tracking-tighter transition-all duration-300 ease-in-out"
          >
            What's W&N Index?
          </a>
          <a
            href="#"
            className="text-white hover:text-orangeBg font-medium text-[20px] leading-[30px] tracking-tighter transition-all duration-300 ease-in-out"
          >
            W&N Indicators
          </a>
        </nav>
        <div className="flex space-x-4 mx-auto sm:mx-0 mt-4 sm:mt-0 w-full sm:w-auto">
          <button className="text-white px-8 py-2 rounded-full font-semibold text-[20px] leading-[30px] tracking-tighter border-2 border-[#FFFFFF1A] grow hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg">
            Login
          </button>
          <button className="bg-orangeBg hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg text-white px-8 py-2 rounded-full font-semibold text-[20px] tracking-tighter leading-[30px] border-2 border-[#FFFFFF1A] grow">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
