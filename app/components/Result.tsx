/* eslint-disable @next/next/no-img-element */
"use client"
import { IconLink, IconDownload } from '@tabler/icons-react';

export default function Result({ image }: { image: string | ArrayBuffer }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image as string;
        link.setAttribute('download', 'imagen_descargada.png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='flex justify-center items-center flex-col gap-4'>
            <div className="dark:bg-[#212936] bg-[#FFFFFF] shadow-lg shadow-black/20 p-3 w-[90%] lg:w-[40%] h-1/2 rounded-lg flex justify-center items-center">
                <div className="flex relative justify-center z-10 rounded-md items-center gap-4 flex-col w-full h-full">
                    <img src={image as string} className='object-contain' alt="imagen resultado" />
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button onClick={handleDownload} className='bg-[#3662E3] py-1 px-3 flex rounded-lg font-semibold text-base items-center text-[white]   justify-center gap-2 hover:scale-105 hover:shadow hover:shadow-[#3647e3] transition'>
                    <IconDownload />
                    Download
                </button>
                <button className='bg-[#3662E3] py-1 px-3 text-[white]   flex rounded-lg font-semibold text-base items-center justify-center  gap-2 hover:scale-105 hover:shadow hover:shadow-[#3647e3] transition'>
                    <IconLink />
                    Share
                </button>
            </div>
        </section>
    );
}
