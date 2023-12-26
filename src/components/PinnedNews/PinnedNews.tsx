"use client"
import Image from "next/image"
import Link from "next/link"
import PinnedNewsFunctions from "./PinnedNewsFunctions"
export default function PinnedNews() {
    const {Title, Content, Catalogue, updatedDate, Reporter, reporterImage, MainImage, Fetced, id, profileLoaded, setProfileLoaded, mainImgLoaded, setMainImgLoaded} = PinnedNewsFunctions()
    return (
        <>
        {Fetced ? 
        <div className="flex flex-row justify-center h-1/3 w-full">
            <div className="sm:basis-4/12 hidden lg:flex justify-center items-center p-4 rounded-l-lg shadow-[-25px_35px_60px_-30px_rgba(0,0,0,0.3)] shadow-primary">
                <Image className={mainImgLoaded ? "w-auto h-full rounded-lg flex-1" : "skeleton w-auto h-96"} onLoad={() => setMainImgLoaded(true)} priority={true} src={MainImage} alt={Title} width={0} height={0} sizes="100vw"></Image>
            </div>
            <div className="basis-11/12 sm:basis-9/12 lg:basis-5/12 flex flex-col justify-start items-start gap-6 p-4 rounded-r-lg shadow-[25px_35px_60px_-30px_rgba(0,0,0,0.3)] shadow-primary">
                <div className="flex flex-row items-center gap-2">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <Image className={profileLoaded ? "" : "skeleton w-10 h-10"} onLoad={() => setProfileLoaded(true)} alt={Reporter} src={reporterImage} width={0} height={0} sizes="100vw"/>
                        </div>
                    </div>
                    <p className="text-sm sm:text-lg">{Reporter}</p>    
                    <p className="text-xs sm:text-sm">•</p>   
                    <p className="text-xs sm:text-sm">{updatedDate}</p>      
                </div>
                <div className="lg:hidden flex justify-center items-center w-full">
                    <Image className={mainImgLoaded ? "w-full h-auto rounded-lg flex-1" : "skeleton w-full h-auto"} onLoad={() => setMainImgLoaded(true)} src={MainImage} alt={Title} width={0} height={0} sizes="100vw"></Image>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-primary break-all">{Title}</p>
                <p className="flex-1 text-md md:text-xl break-all line-clamp-3">{Content}</p>
                <div className="text-xs md:text-lg flex flex-row gap-2 items-center w-full"><div className="badge badge-secondary">{Catalogue}</div><div className="flex-1"></div><Link href={"/news/" + id} className="text-info"><p>Read more...</p></Link> </div>
            </div>
        </div>
        :
        <div className="flex flex-row justify-center h-1/3 w-3/4 ">
            <div className="sm:basis-4/12 hidden lg:block p-4 rounded-l-lg shadow-[-25px_35px_60px_-30px_rgba(0,0,0,0.3)] shadow-primary">
                <div className="skeleton w-auto h-96"></div>
            </div>
            <div className="basis-11/12 sm:basis-9/12 lg:basis-5/12 flex flex-col justify-start items-start gap-6 p-4 rounded-r-lg shadow-[25px_35px_60px_-30px_rgba(0,0,0,0.3)] shadow-primary">
                <div className="flex flex-row items-center gap-2">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <div className="skeleton w-10 h-10"></div>
                        </div>
                    </div>
                    <div className="skeleton h-4 w-44"></div>  
                    <div className="skeleton h-4 w-20"></div>    
                </div>
                <div className="lg:hidden">
                    <div className="skeleton w-full h-auto"></div>
                </div>
                <div className="skeleton h-10 w-72"></div>
                <div className="skeleton h-7 w-full"></div>
                <div className="skeleton h-7 w-3/4"></div>
            </div>
        </div>
    }
        </>
    )
}