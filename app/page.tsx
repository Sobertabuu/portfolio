import Image from 'next/image'
import Navbar from "@/app/Navbar";

export default function Home() {
  return (
      <main>
        <div className={"absolute w-full text-white"}>
          <Navbar />
        </div>
        <div>
          <img src={"Forest.jpg"} alt={"Forest"} className={"w-screen h-screen"} />
          <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-3xl text-white"}>
            <h1>Markus á lað</h1>
          </div>
        </div>
        <div className={"absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-white text-xl"}>
          <p></p>
        </div>

      </main>
  )
}
