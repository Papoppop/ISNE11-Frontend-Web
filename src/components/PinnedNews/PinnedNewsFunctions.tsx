import { useEffect, useState } from "react";
import { API } from "@/constants/API";
import io from "socket.io-client"
const socket = io(API.socket)
export default function PinnedNewsFunctions() {
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [Catalogue, setCatalogue] = useState("")
    const [updatedDate, setupdatedDate] = useState("")
    const [Reporter, setReporter] = useState("")
    const [reporterImage, setReporterImage] = useState("")
    const [MainImage, setMainImage] = useState("")
    const [id, setId] = useState(0)
    const [Fetced, setFetced] = useState(false)
    const [profileLoaded, setProfileLoaded] = useState(false)
    const [mainImgLoaded, setMainImgLoaded] = useState(false)

    const fetchNews = (abortController : AbortController) => {
        fetch(`${API.news}/pinned`, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => {
            setTitle(data.Title)
            setContent(data.Content)
            setCatalogue(data.Catalogue)
            setupdatedDate(new Date(data.updatedAt).toLocaleDateString("en-GB"))
            setMainImage(data.MainImage)
            setReporter(data.student.Name + " " + data.student.Surname)
            setReporterImage(data.student.ImageURL)
            setFetced(true)
            setId(data.id)
        })
    }

    useEffect(() => {
        const abortController = new AbortController()
        
        fetchNews(abortController)

        return () => {
            abortController.abort()
        }

    },[])

    useEffect(() => {
        const abortController = new AbortController()     
        socket.on("profile", () => {
            fetchNews(abortController)
        })

        return () => {
            socket.off("profile")
            abortController.abort()
        }
    },[socket])

    return {
        Title,
        Content,
        Catalogue,
        updatedDate,
        Reporter,
        reporterImage,
        MainImage,
        Fetced,
        id,
        profileLoaded,
        setProfileLoaded,
        mainImgLoaded,
        setMainImgLoaded
    }
}