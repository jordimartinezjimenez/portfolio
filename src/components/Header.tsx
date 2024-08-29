import logo from "../assets/jordi-logo.svg"
import { FaRegFileAlt } from "react-icons/fa"

export default function Header() {
    return (
        <header className="flex justify-between items-center py-8">
            <a href="#home"><img src={logo} alt="logo" className="w-[124px] cursor-pointer" /></a>
            <a href="#contact" className="flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg gap-2 py-1.5 px-8 cursor-pointer shadow-lg shadow-rose-500/50"><FaRegFileAlt /> Hire me</a>
        </header>
    )
}
