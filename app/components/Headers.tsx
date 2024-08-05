"use client"

import Image from "next/image";
import {inter} from '@/app/fonts/fonts'
import logo from '@/public/logo-small.svg'
import {IconSunFilled, IconMoon} from '@tabler/icons-react'
import { useState,useEffect } from "react";


export default function Header() {
    const [isdark, setIsdark] = useState<boolean>(false)
    const [change, setChange] = useState<boolean>(true)

    useEffect(()=>{
        if (document.querySelector('html')?.classList.contains('dark') ) {
            setIsdark(true);
            console.log(true);
            
            
        }else{
            setIsdark(false);
            console.log(false);
            
        }
        
    },[change])
    
    const handleTheme = ()=>{
        document.querySelector('html')?.classList.toggle('dark')
        setChange(!change)
    }
    const theme = isdark ? <IconSunFilled className="text-black dark:text-white"></IconSunFilled> : <IconMoon className="text-black dark:text-white"></IconMoon>
    return (
        <header className="w-full p-6  dark:border-[#4d556262] border-[#E5E7EB] border-b flex justify-between">
        <div className="flex gap-2 text-black dark:text-white font-extrabold text-xl items-center">
        <Image className={`${inter.className} size-9`}  src={logo} alt="logo"></Image>
        ConversorCsv
        </div>
  
       <button onClick={handleTheme} className=" bg-white dark:bg-[#212936]  border p-3 rounded-lg border-[#E5E7EB] hover:shadow-md hover:shadow-black/20 dark:hover:shadow-white/20 dark:border-[#4d556262] hover:scale-100 transition">{theme}</button>
  
      </header>
    )
}