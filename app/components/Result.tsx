/* eslint-disable @next/next/no-img-element */
"use client"
import { IconLink, IconDownload,IconFileSpreadsheet } from '@tabler/icons-react';

export default function Result({ image }: { image: Blob}) {
    const handleDownload = () => {
        const link = document.createElement('a');
        const download = window.URL.createObjectURL(image)
        link.href = download;
        link.setAttribute('download', 'TELEFONOS_NO_ENTREGADOS.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='flex justify-center items-center flex-col gap-4'>
            <div className="dark:bg-[#212936] bg-[#FFFFFF] shadow-lg shadow-black/20 p-3 w-[100%] lg:w-[100%] h-1/2 rounded-lg flex justify-center items-center">
                <div className="flex relative justify-center z-10 rounded-md items-center gap-4 flex-col w-full h-full">
                    <IconFileSpreadsheet color='green' size={70}></IconFileSpreadsheet>
                    <strong className="text-lg  text-[#121826] font-semibold dark:text-[#F9FAFB]">TELEFONOS_NO_ENTREGADOS.xlsx</strong>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button onClick={handleDownload} className='bg-[#3662E3] py-1 px-3 flex rounded-lg font-semibold text-base items-center text-[white]   justify-center gap-2 hover:scale-105 hover:shadow hover:shadow-[#3647e3] transition'>
                    <IconDownload />
                    Descargar
                </button>
            </div>
        </section>
    );
}
