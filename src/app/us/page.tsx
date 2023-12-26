"use client"
import Student from "@/components/Student/Student"
import { IStudent } from "@/interfaces/Istudent"
import { useEffect, useState } from "react"
import { API } from "@/constants/API"
export default function Us() {
    const [students, setStudents] = useState<IStudent[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()
        fetch(API.student, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => {
            setStudents(data)
            setLoading(false)
        })

        return () => {
            abortController.abort()
        }

    },[])


    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center w-full mt-10 gap-20">
                {loading ? 
                <p>Loading...</p> : 
                <>
                <h1 className="text-3xl font-bold">TOTAL: {students.length}</h1>
                <div className="flex flex-row flex-wrap justify-center items-stretch w-full mt-10 gap-20">
                    {students.map((student, index) => (
                        <Student key={student.Name + index} {...student} />
                    ))}
                </div>  
                </>  
                }
            </div>
        </>
    )
}