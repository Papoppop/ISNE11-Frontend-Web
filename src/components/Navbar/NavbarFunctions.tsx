import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setStudentID ,setName, setSurname, setGender, setInstagram, setImageURL, setFetched, setNationality } from "@/store/userSlice"
import { API } from "@/constants/API"
import { IStudent } from "@/interfaces/Istudent"
import { IUser } from "@/interfaces/IUser"
import io from "socket.io-client"
const socket = io(API.socket)

export default function NavbarFunctions() {
    const dispatch = useDispatch()
    const userInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const {Fetched,ImageURL,Name,Surname} = useSelector((state: {user: IUser}) => state.user)

    useEffect(() => {
      const abortController = new AbortController()
      fetch(API.user, {
        signal: abortController.signal,
        credentials: "include"
    })
      .then(res => res.json())
      .then((data: IStudent) => {
        if(data?.StudentID){
          dispatch(setStudentID(data.StudentID))
          dispatch(setName(data.Name))
          dispatch(setSurname(data.Surname))
          dispatch(setGender(data.Gender))
          dispatch(setInstagram(data.Instagram))
          dispatch(setImageURL(data.ImageURL))
          dispatch(setNationality(data.Nationality))
        }
        dispatch(setFetched(true))
      })
      return () => {
        abortController.abort()
      }
    },[])

    const handleLogout = () => {
        fetch(`${API.user}/logout`, {
            method: "DELETE",
            credentials: "include"
        })
        .then(res => {
            if(res.status === 200){
                dispatch(setStudentID(null))
                dispatch(setName(null))
                dispatch(setSurname(null))
                dispatch(setGender(null))
                dispatch(setInstagram(null))
                dispatch(setImageURL(null))
                dispatch(setNationality(null))
            }
        })
    }

    const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.currentTarget;
        const username = target.studentID.value
        const password = target.password.value


        fetch(`${API.user}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            }),
            credentials: "include"
        })
        .then(res => {
            if(res.status === 200){
                return res.json()
            }else if(res.status === 404){
                userInputRef.current?.focus()
                userInputRef.current?.classList.add("input-error")
            }else{
                userInputRef.current?.classList.remove("input-error")
                passwordInputRef.current?.classList.add("input-error")
            }
        }).then(data => {
            if(data?.StudentID){
                dispatch(setStudentID(data.StudentID))
                dispatch(setName(data.Name))
                dispatch(setSurname(data.Surname))
                dispatch(setGender(data.Gender))
                dispatch(setInstagram(data.Instagram))
                dispatch(setImageURL(data.ImageURL))
                dispatch(setNationality(data.Nationality))
                userInputRef.current?.classList.remove("input-error")
                passwordInputRef.current?.classList.remove("input-error")
            }
        })
    }

    const handlePost = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.currentTarget
        const title = target.Title.value
        const content = target.Content.value
        const image = target.Image.files[0]
        const catalogue = target.Catalogue.value

        const formData = new FormData()
        formData.append("Title", title)
        formData.append("Content", content)
        formData.append("Image", image)
        formData.append("Catalogue", catalogue)

        fetch(API.news, {
            method: "POST",
            body: formData,
            credentials: "include",
        })
        .then(res => {
            if(res.status === 201){
                target.Title.value = ""
                target.Content.value = ""
                target.Image.value = ""
                target.Catalogue.value = ""
                socket.emit("addPost",  "News");
                (document.getElementById("postNews") as HTMLDialogElement)?.close()
            }
        })
    }

    return {
        Fetched,
        ImageURL,
        Name,
        Surname,
        handleLogin,
        userInputRef,
        passwordInputRef,
        handleLogout,
        handlePost
    }
}