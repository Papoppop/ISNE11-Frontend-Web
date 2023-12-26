import Image from "next/image"
import { IStudent } from "@/interfaces/Istudent"
import { useState } from "react"
export default function Student(props: IStudent) {
    const { StudentID, Name, Surname, Gender, Nationality, Instagram, ImageURL } = props
    const [profileLoaded, setProfileLoaded] = useState(false)
    return (
        <>
        <div className="group artboard relative phone-1 bg-base-300 rounded-3xl">
            <Image src={ImageURL} alt={Name + " " + Surname} width={0} height={0} sizes="100vw" className={profileLoaded ? "w-auto h-full rounded-3xl" : "skeleton w-auto h-full rounded-3xl"} onLoad={() => setProfileLoaded(true)}/>
            <div className="absolute left-5 bottom-20 text-3xl text-primary font-bold z-10">{Name + " " + Surname}</div>
            <div className="absolute left-5 bottom-10 text-lg font-bold z-10">{Gender}</div>
            <div className="absolute left-5 bottom-5 text-lg font-bold z-10">
                <div className="flex flex-row justify-start items-center w-80">
                    <div className="basis-24">{StudentID}</div>
                    <div className="basis-36">
                        <div className="badge badge-outline">{Instagram}</div>
                    </div>
                    <div>{Nationality}</div>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-80 h-40 bg-base-300 opacity-75 group-hover:opacity-100 transition-opacity duration-200 rounded-b-3xl z-0">

            </div>
        </div>
        </>
    )
}