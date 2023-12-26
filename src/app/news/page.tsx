"use client"
import { INews } from "@/interfaces/INews";
import News from "@/components/News/News";
import PageFunctions from "./pageFunctions"
export default function NewsPage() {
    const {newsList, Fetced} = PageFunctions()
    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center w-full mt-10 gap-20">
                {!Fetced ? 
                <p>Loading...</p> : 
                <>
                <div className="flex flex-row flex-wrap justify-center items-stretch w-full mt-10 gap-20">
                    {newsList.map((news : INews , index : number) => (
                        <News key={news.Title + index} {...news} />
                    ))}
                </div>  
                </>  
                }
            </div>
        </>
    )
}