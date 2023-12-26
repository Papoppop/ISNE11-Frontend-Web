import {API} from "@/constants/API"
import {useEffect, useState} from "react"
import io  from "socket.io-client"
const socket = io(API.socket)
export default function LastestNewsFunction() {
    const [newsList, setNewsList] = useState([])
    const [Fetced, setFetced] = useState(false)

    const fetchNews = (abortController : AbortController) => {
        fetch(`${API.news}/latest`, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => {
          setNewsList(data)
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
            fetchNews(abortController)
        })

        socket.on("profile", () => {
            fetchNews(abortController)
        })

        return () => {
            abortController.abort()
            socket.off("addPost")
            socket.off("profile")
        }
    },[socket])

    return {
        newsList,
        Fetced
    }
}