"use client"
/* eslint-disable @next/next/no-img-element */
import Uploader from './Uploader'
import Result from './Result';
import { IconUpload } from '@tabler/icons-react';
import { useState } from 'react';


export default function MainDrop() {
  const STATES_APP = {
    0: "cargando",
    1: "Pantalla inicial",
    2: "Pantalla resultado",
  };
  const [image, setImage] = useState<Blob>();
  const [stateApp, setStateApp] = useState<number>(1);

  const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    const file = element.files?.[0] as Blob ;
    const formData = new FormData()
    formData.append('file', file)
    if (file) {
      try {
        setStateApp(0)
        const res = await fetch("https://converter-2zj0.onrender.com/convertir", {
            method: "POST",
            body: formData
        })
    
        const data = await res.blob()
        if(data){
          setImage(data)
          setStateApp(2)
        }

    } catch (error) {
        console.error(error);
    }
    }
  };



  const App = () => {
    if (stateApp === 1) {
      return (
          <article className="dark:bg-[#212936] bg-[#FFFFFF] shadow-lg shadow-black/20 p-3 w-[90%] lg:w-[40%] h-1/2 rounded-lg flex justify-center items-center">
            <section className="flex relative justify-center z-10 rounded-md border-[#E5E7EB] dark:border-[#4D5562] border-dashed items-center gap-4 flex-col border-2 w-full h-full">
              <label className="w-full cursor-pointer inline-block h-full absolute" htmlFor="file">
                <input onChange={(e) => { handleChange(e) }} type="file" id="file" accept=".csv" />
              </label>

              <div className="bg-[#C2DAF9] text-[#3662E3] px-3 rounded-xl py-2"><IconUpload className=" text-[#3662E3] " /></div>
              <strong className="text-lg  text-[#121826] font-semibold dark:text-[#F9FAFB]">SUBA UN ARCHIVO </strong>
              <p className="text-[#4D5562] text-base font-normal ">CSV - Max file size 2MB</p>
            </section>
          </article>
        
      );
    }else if(stateApp === 0){
      return(
        <Uploader></Uploader>
      )
    }else{
      if (image) {
        return(
        <Result image={image}></Result>
          )  
      }
      
    }
  }

  return (
    <main className="w-full h-[80%] flex justify-center items-center">
      <App />
      </main>
  );
}
