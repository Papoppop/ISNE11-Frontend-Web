"use client"
import PageFunctions from "./pageFunctions"
import { INews } from "@/interfaces/INews"
import Image from "next/image"
export default function newsID() {
    const {news, fetched} = PageFunctions()
    return(
        <>
        {fetched ?
        <>
        {
            <div>
                <p>{news?.Title}</p>
                <p>{news?.Content}</p>
                <p>{news?.Catalogue}</p>
                <p>{news?.student.Name}</p>
            </div>
        }
        </>
        :
        <>
        Loading...
        </>
        }
        </>
    )
}