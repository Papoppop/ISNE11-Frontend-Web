import Link from "next/link"
export default function Settings() {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center items-center gap-28 md:gap-64">
                <div className="h-screen flex flex-col justify-center items-center">
                    <div className="text-md md:text-4xl btn btn-ghost"><Link href="/settings/profile">Customize Profile</Link></div>
                </div>
                <div className="h-screen flex flex-col justify-center items-center">
                    <div className="text-md md:text-4xl btn btn-ghost">Change Password</div>
                </div>
            </div>
        </>
    )
}