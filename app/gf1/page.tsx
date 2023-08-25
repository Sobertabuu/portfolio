import Navbar from "@/app/Navbar";

export default function GF1() {
    return (
        <main>
            <div className={"absolute w-full text-white"}>
                <Navbar />
            </div>
            <img src={"forest.jpg"} alt={"Forest"} className={"w-screen h-screen"} />
            <div className={"absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-white text-2xl"}>
            </div>
        </main>
    )
}