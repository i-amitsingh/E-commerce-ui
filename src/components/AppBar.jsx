import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import logo from "../assets/Logo.png";
function AppBar() {
  return (
    <div className="p-2">
      <ul className="flex px-10 items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={logo} alt="Logo" className="w-10" />
          <li className="font-semibold text-2xl cursor-pointer ">
            <Link to="/">Furniro</Link>
          </li>
        </div>
        <div className="flex items-center gap-10">
          <li className="hover:underline hover:text-blue-600 hover:font-semibold cursor-pointer duration-100">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:underline hover:text-blue-600 hover:font-semibold cursor-pointer duration-100">
            <Link to="/shop"> Shop </Link>
          </li>
          <li className="hover:underline hover:text-blue-600 hover:font-semibold cursor-pointer duration-100">
            <Link to="/about"> About </Link>
          </li>
          <li className="hover:underline hover:text-blue-600 hover:font-semibold cursor-pointer duration-100">
            <Link to="/contact"> Contact </Link>
          </li>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/search">
            <FaSearch className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
          </Link>
          <Link to="/about">
            <FaRegHeart className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
          </Link>
          <Link to="/cart">
            <FaCartPlus className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
          </Link>
          <Link to="/profile">
            <IoPerson className="text-xl cursor-pointer text-gray-900 hover:text-blue-600" />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default AppBar;
