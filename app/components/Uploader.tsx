import { LinearProgress } from "@mui/material"
    export default function Loader() {
        return(
        <div className="w-1/2 h-1/4 rounded-xl bg-[#FFFFFF] shadow-lg shadow-black/20 dark:bg-[#212936] flex justify-center items-center ">
            <div className="w-full text-center p-10 text-base text-[#212936] dark:text-[#F9FAFBCC]">
            <span className="text-lg font-semibold text-[#121826] dark:text-[#F9FAFB] ">Uploading</span>, please wait..
            <LinearProgress className="mt-3"  />
            </div>
        </div>
    )
}