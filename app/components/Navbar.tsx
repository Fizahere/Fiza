"use client"
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";
import { useState,useEffect } from "react";

export default function Navbar() {
    const [isScrolled,setScrolled]=useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])

    return (
        <div className={`flex justify-between items-center sticky top-0 z-50 py-5 ${isScrolled?'bg-black/50 backdrop-blur-sm':''}`}>
            <h1 className="text-2xl font-bold">Fiza</h1>
            <ul className="flex items-center gap-5">
                <li>
                   <a
                    download="Fiza_Resume.pdf" href="/Fiza Developer.pdf"
                     className="flex items-center gap-2 bg-white rounded-full px-6 py-2 text-black text-sm font-semibold cursor-pointer">
                     Resume
                    <FiDownload/>
                   </a>
                </li>
                <li>
                  <a href="https://github.com/Fizahere" target="blank">
                    <FaGithub className="text-xl cursor-pointer" />
                    </a>
                </li>
                <li>
                    {/* <CgDarkMode className="text-2xl cursor-pointer" /> */}
                </li>
            </ul>
        </div>
    )
}