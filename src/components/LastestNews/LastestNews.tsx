"use client"
import News from "@/components/News/News"
import Link from "next/link"
import LastestNewsFunction from "./LastestNewsFunction"
import { INews } from "@/interfaces/INews"
export default function LastestNews() {
    const {newsList, Fetced} = LastestNewsFunction()
    return(
    <>
        {Fetced ?
        <>
            <div className="flex flex-row items-center justify-start w-fit sm:w-full pr-20 pl-20">
                <h2 className="self-start flex-1 text-3xl sm:text-5xl font-bold ">Lasest News</h2>
                <h2 className="text-lg text-info hidden sm:block"><Link href="/news">See All...</Link></h2>
            </div>
            <div className="flex flex-row flex-wrap items-stretch justify-center w-screen pr-20 pl-20 gap-10">
                {newsList.map((news : INews , index : number) => (
                    <News key={news.Title + index} {...news} />
                ))}
                <h2 className="text-lg text-info sm:hidden block"><Link href="/news">See All...</Link></h2>
            </div>
        </> 
        :
        <>
            <div className="flex flex-row items-center justify-start w-fit sm:w-full pr-20 pl-20">
                <h2 className="self-start flex-1 text-3xl sm:text-5xl font-bold ">Lasest News</h2>
                <h2 className="text-lg text-info hidden sm:block"><Link href="/news">See All...</Link></h2>
            </div>
            <div className="flex flex-row flex-wrap items-stretch justify-center w-screen pr-20 pl-20 gap-10">
                
                <h2 className="text-lg text-info sm:hidden block"><Link href="/news">See All...</Link></h2>
            </div>
        </>
        }
    </>
    )
}