import Image from '../../../assets/logo.png'

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '/' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="/" className="flex items-center">
          হোম
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="" className="flex items-center ">
          মেনু
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="" className="flex items-center ">
          অফার
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '/branch' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="/branch" className="flex items-center ">
          ব্রাঞ্চসমূহ
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="" className="flex items-center ">
          অর্ডার প্রসেস
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-semibold ${window.location.pathname === '/about' ? 'text-[#FE0000]' : ''}`}
        >
          <a href="/about" className="flex items-center ">
          আমাদের সম্পর্কে
          </a>
        </Typography>
 
       
        
      </ul>
    );
   
    return (
      <div className="max-h-[768px] w-[calc(100%+48px)">
        <Navbar className="sticky top-0 z-10 h-max max-w-[1280px] px-4 py-2 lg:px-8 lg:py-5 mx-auto shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className='flex items-center'>
            <Typography
              as="a"
              href="/"
              className="mr-7 cursor-pointer py-1.5 font-medium"
            >
            <img src={Image} alt="" className='w-[50px] h-[50px]'/>
            </Typography>
           
             <RiFacebookCircleLine size={25}  className='hover:text-[#FE0000] cursor-pointer me-3'/>
          
            <div className='hover:text-[#FE0000] cursor-pointer'>
             <FaInstagram  size={25}/>
            </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="mr-2 hidden lg:block">{navList}</div>
              <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-normal bg-[#FE0000] text-white px-5 rounded-full py-2 ${window.location.pathname === '' ? 'text-white' : ''}`}
        >
          <a href="" className="flex items-center">
          বুকিং 
          </a>
        </Typography>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
          </MobileNav>
        </Navbar>
        
      </div>
    )
};

export default Header;