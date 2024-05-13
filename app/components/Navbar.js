"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Sidebar from "./Sidebar";
import ExploreButton from "./ExploreButton";
const Navbar = () => {


  return (
    <>
  <ExploreButton></ExploreButton>
      
      {/* <div className="w-full h-20 bg-sky-300 top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
        
          
           <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <p>Careers</p>
                </Link>
              </li>
              <li>
                <Link href="/campus">
                  <p>Campus</p>
                </Link>
              </li>
              <li>
                <Link href="/graduates">
                  <p>Graduates</p>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <p>Insights</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul> 
          </div>
        </div>
      </div> */}

      <header className="flex flex-col items-center justify-between p-8 bg-sky-300">
  <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  <Sidebar />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/logoo.png"
              alt="Convex Logo"
              className="dark:invert"
              width={200}
              height={50}
              priority
            />
          </a>
        </div>
        
      </div>
  </header>
    </>
  );
};

export default Navbar;