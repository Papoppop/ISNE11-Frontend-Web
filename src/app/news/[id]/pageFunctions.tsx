import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { API } from '@/constants/API'
import { INews } from '@/interfaces/INews'
export default function PageFunctions() {
    const path = useParams()
    const [news, setNews] = useState<INews | null>()
    const [fetched, setFetched] = useState(false)
    useEffect(() => {
        const abortController = new AbortController()
        fetch(`${API.news}/${path?.id}`, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => {
            setNews(data)
            setFetched(true)
        })
        return () => {
            abortController.abort()
        }
    },[path?.id])

    return {
        news,
        fetched
    }
}