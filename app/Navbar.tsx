export default function Navbar() {
    return (
        <div className={"w-full h-16 p-5 flex justify-around font-semibold text-2xl"}>
            <a className={"hover:underline decoration-solid"} href={"/"}>Intro</a>
            <a className={"hover:underline decoration-solid"} href={"/gf1"}>GF1</a>
            <a className={"hover:underline decoration-solid"} href={"/contact"}>Kontakt Mig</a>
            <a className={"hover:underline decoration-solid"} href={"/mig"}>Om Mig</a>
        </div>
    )
}