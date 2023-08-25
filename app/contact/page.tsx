import Image from 'next/image'
import Navbar from "@/app/Navbar";

export default function Contract() {
    return (
        <main>
            <div className={"absolute w-full text-white"}>
                <Navbar />
            </div>
            <img src={"forest.jpg"} alt={"Forest"} className={"w-screen h-screen"} />
    <div className={"absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-2/2 text-white text-2xl"}>
        <p>Telefon: +45 60559872</p>
    </div>
            <div className={"absolute top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-2/2 min-w-max text-white text-2xl"}>
                <p>Email: Markusalad1225@gmail.com</p>
            </div>
        </main>
    )
}