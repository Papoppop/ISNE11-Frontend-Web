import {API} from "@/constants/API"
import {useEffect, useState} from "react"
import io  from "socket.io-client"
const socket = io(API.socket)
export default function PageFunctions() {
    const [newsList, setNewsList] = useState([])
    const [Fetced, setFetced] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const fetchNews = (abortController : AbortController) => {
        fetch(`${API.news}/page/${currentPage}`, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => {
          setNewsList(data)
          setCurrentPage(currentPage + 1)
          setFetced(true)
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

        socket.on("addPost", () => {
            console.log("addPost")
            fetchNews(abortController)
        })

        return () => {
            abortController.abort()
            socket.off("addPost")
        }
    },[socket])

    return {
        newsList,
        Fetced
    }
}