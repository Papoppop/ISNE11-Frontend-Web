import { useSelector, useDispatch } from "react-redux";
import { IUser } from "@/interfaces/IUser";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { API } from "@/constants/API";
import { setImageURL, setName, setSurname } from "@/store/userSlice";
import io from "socket.io-client"
const socket = io(API.socket)
export default function PageFunctions() {
    const {Fetched,ImageURL,Name,Surname} = useSelector((state: {user: IUser}) => state.user)
    const [previewImg, setPreview] = useState<any>(null)
    const imgInput = useRef<any>(null)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
      if(Fetched && !ImageURL){
        router.push('/')
      }
    },[Fetched])

    const handlePreviewChange = () => {
        if(imgInput?.current){
            const reader = new FileReader();
            reader.readAsDataURL(imgInput.current.files[0])
            reader.onload = () => {
                setPreview(reader.result)
            }
        }
    }

    const handleImageChange = (event: any) => {
        event.preventDefault();
        const target = event.currentTarget
        const image = target.Image.files[0]
        const formData = new FormData();
        formData.append('Image', imgInput.current.files[0]);

        fetch(`${API.user}/image`, {
            method: 'PUT',
            body: formData,
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            dispatch(setImageURL(data.ImageURL))
            setPreview(null)
            target.Image.value = "";
            socket.emit('profile');
            (document.getElementById("modal-image") as HTMLFormElement)?.close()
        })

    }

    const handleNameChange = (event: any) => {
        event.preventDefault();
        const target = event.currentTarget
        const name = target.Name.value
        const surname = target.Surname.value

        fetch(`${API.user}/realname`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                Surname: surname
            }),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            dispatch(setName(data.Name))
            dispatch(setSurname(data.Surname));
            socket.emit('profile');
            (document.getElementById("modal-realName") as HTMLFormElement)?.close()
        })
    }

    return {
        ImageURL,
        Name,
        Surname,
        Fetched,
        previewImg,
        imgInput,
        handlePreviewChange,
        handleImageChange,
        handleNameChange
    }
}