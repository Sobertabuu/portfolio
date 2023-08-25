import Navbar from "@/app/Navbar";

export default function Mig() {
    return (
        <main>
            <div className={"absolute w-full text-white z-50"}>
                <Navbar />
            </div>
            <div className={"absolute w-full"}>
                <div className={"relative w-full h-screen"}>
                    <img src={"Markus.png"} alt={"Markus"} className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 rounded-lg"} />
                </div>
            </div>
            <img src={"forest.jpg"} alt={"Forest"} className={"w-screen h-screen"} />
            <div className={"absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/2 text-white text-xl"}>
                <p>Jeg hedder Markus, jeg er fra Færøerne (født i København), jeg læser til at blive IT-Supporter. Jeg har meget erfaring med computere, siden jeg har stor interresse i dem og hvordan de fungere, hardware og software mæssigt.</p>
            </div>

        </main>
    )
}