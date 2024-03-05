import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { menuLinks } from "@/constants";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="px-5 lg:px-10 h-20 w-full">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={70} height={70} />
            <h3>
              Mash<span>Vision</span>
            </h3>
          </div>

          <div className="flex items-center gap-6">
            {menuLinks.map((link, index) => {
              return (
                <ul key={index} className="hover:text-secondary duration-300">
                  <Link href={link.path}>
                    <li>{link.label}</li>
                  </Link>
                </ul>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
