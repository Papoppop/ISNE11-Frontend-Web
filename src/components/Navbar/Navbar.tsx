import Link from "next/link"
import Image from "next/image"
import NavbarFunctions from "./NavbarFunctions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPalette } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    const {Fetched,ImageURL,Name,Surname,handleLogin,userInputRef,passwordInputRef,handleLogout,handlePost} = NavbarFunctions()
    return (
        <>
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/us">Us</Link></li>
                        <li><Link href="/us">Myo Destroyer</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-secondary font-bold">ISNE11</a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/us">Us</Link></li>
                        <li><Link href="/us">Myo Destroyer</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end flex flex-row gap-2">
                {Name &&
                <>
                    <div className="btn btn-ghost" onClick={()=>(document.getElementById('postNews') as HTMLDialogElement).showModal()}>
                        <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                    </div>
                    <dialog id="postNews" className="modal modal-top">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">News</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        
                    <form onSubmit={(e)=>handlePost(e)}> 
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                                <input required name="Title" type="text" placeholder="Title" className="input input-bordered w-full max-w-md"/>
                                <textarea required name="Content" placeholder="Content" className="input input-bordered w-full max-w-md"/>
                                <div className="flex flex-col w-full max-w-md">
                                    <label className="label">
                                        <span className="label-text">Image:</span>
                                    </label>
                                    <input required accept="image/*" name="Image" type="file" className="file-input file-input-bordered w-full max-w-md"/>
                                </div>
                                <input required name="Catalogue" type="text" placeholder="Catalogue" className="input input-bordered w-full max-w-md"/>
                        </div>
                        
                        <div className="modal-action">
                            <input type="submit" className="btn btn-primary" value={"Post"}/>
                        </div>

                    </form>
                    </div>
                </dialog>
                </>
                }
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                        <summary>
                            <FontAwesomeIcon icon={faPalette} size="lg"/>
                        </summary>

                        <ul tabIndex={0} className="p-2 bg-base-100 rounded-t-none">
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Luxury" value="luxury"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" value="halloween"/></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    {Fetched ? 
                    Name ? 
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image width={0} height={0} sizes="100vw" alt={Name + " " + Surname} src={ImageURL} />
                        </div>
                    </div> 
                    :
                    <>
                    <button className="btn btn-ghost" onClick={()=>(document.getElementById('login-modal') as HTMLFormElement).showModal()}>Login</button>
                    <dialog id="login-modal" className="modal modal-middle">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Login</h3>
                            <form onSubmit={(e) => handleLogin(e)}>
                                <div className="flex flex-col justify-center items-center gap-2 mt-6">
                                    <input ref={userInputRef} required type="text" name="studentID" placeholder="Student ID" className="input input-bordered w-full max-w-xs" />
                                    <input ref={passwordInputRef} required type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="modal-action">
                                    <input type="submit" className="btn btn-primary" value={"Login"}/>
                                </div>
                            </form>
                        </div>
                    </dialog>
                    </>
                    :
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <div className="skeleton animate-ping w-16 h-16 rounded-full"></div>
                        </div>
                    </div>
                    }
                    {Name &&
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/settings">Settings</Link></li>
                        <li><button onClick={() => handleLogout()}>Logout</button></li>
                    </ul>}
                </div>
            </div>
        </div>
        </>
    )
}