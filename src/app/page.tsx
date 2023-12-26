import PinnedNews from "@/components/PinnedNews/PinnedNews"
import LastestNews from "@/components/LastestNews/LastestNews"
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-fit mt-10 gap-20 ">
          <PinnedNews/>
          <LastestNews/>
      </div>       
    </>
  )
}
