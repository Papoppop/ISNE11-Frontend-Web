"use client"
import PageFunctions from "./pageFunctions"
import Image from "next/image"
export default function Profile() {
    const {ImageURL,Name,Surname,Fetched,previewImg,imgInput,handlePreviewChange,handleImageChange,handleNameChange} = PageFunctions()
    return (
        <>
        {Fetched && ImageURL ?
        <>
            <div className="flex flex-col flex-wrap justify-center items-center w-full mt-3 gap-4">
                <Image onClick={() => (document.getElementById("modal-image") as HTMLFormElement)?.showModal()} priority={true} src={ImageURL} alt={Name} width={0} height={0} sizes="100vw" className="cursor-pointer rounded-full w-60"/>
                <dialog id="modal-image" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Profile</h3>
                    
                    <form onSubmit={(e) => handleImageChange(e)}>
                        <div className="flex flex-col gap-4 justify-center items-center mt-3">
                            {previewImg && <Image src={previewImg} alt="preview" width={0} height={0} sizes="100vw" className="w-full rounded-2xl" />}
                            <input name="Image" required onChange={handlePreviewChange} ref={imgInput} accept="image/*" type="file" className="file-input file-input-bordered w-full max-w-xs"/>
                        </div>
                        
                        
                        <div className="modal-action">
                            <input type="submit" className="btn btn-primary" value="Change"/>
                        </div>
                    </form>
                </div>
                </dialog>
                <h1 onClick={() => (document.getElementById("modal-realName") as HTMLFormElement)?.showModal()} className="text-3xl font-bold cursor-pointer">{Name} {Surname}</h1>
                <dialog id="modal-realName" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h3 className="font-bold text-lg">Name & Surname</h3>
                        <form onSubmit={(e) => handleNameChange(e)}>
                            <div className="flex flex-col gap-4 justify-center items-center mt-3">
                                <input defaultValue={Name} required name="Name" type="text" placeholder={Name} className="input input-bordered w-full max-w-xs"/>
                                <input defaultValue={Surname} required name="Surname" type="text" placeholder={Surname} className="input input-bordered w-full max-w-xs"/>
                            </div>
                            <div className="modal-action">
                                <input type="submit" className="btn btn-primary" value="Change"/>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
        :
        <div className="h-screen">
        Loading....
        </div>
        }
        </>
    )
}