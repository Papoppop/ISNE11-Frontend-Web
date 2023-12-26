import Link from "next/link";
import Image from "next/image";
import { INews } from "@/interfaces/INews";
import { useState } from "react";
export default function News(props : INews) {
    const {Title, Content, Catalogue, MainImage, student, id} = props
    const [profileLoaded, setProfileLoaded] = useState(false)
    const [mainImgLoaded, setMainImgLoaded] = useState(false)
    return (
        <>
        <div className="card card-compact sm:w-96 bg-base-100 shadow-xl">
            <figure><Image onLoad={() => setMainImgLoaded(true)} loading="lazy" className={mainImgLoaded ? "w-full" : "skeleton w-full"} src={MainImage} alt={Title} width={0} height={0} sizes="100vw" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {Title}
                    <div className="badge badge-secondary">{Catalogue}</div>
                </h2>
                <p className="line-clamp-1">{Content}</p>
                <div className="card-actions justify-start items-center flex flex-row mt-4">
                    <div className="flex-1">
                        <div className="flex flex-row items-center gap-2">
                            <div className="avatar">
                                <div className="w-7 rounded-full">
                                    <Image className={profileLoaded ? "" : "skeleton w-7 h-7"} onLoad={() => setProfileLoaded(true)} alt={student.Name + " " + student.Surname} src={student.ImageURL} width={0} height={0} sizes="100vw"/>
                                </div>
                            </div>
                            <p className="text-sm">{student.Name + " " + student.Surname}</p>         
                        </div>
                    </div>
                    <Link href={"/news/" + id} className="text-info">Read more...</Link>
                </div>
            </div>
        </div>
        </>
    )
}