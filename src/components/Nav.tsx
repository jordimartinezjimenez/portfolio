import { FaCode, FaHome, FaRegCommentDots, FaRegUser } from "react-icons/fa"

export default function Nav() {
    return (
        <nav className="nav container mx-auto bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="glass w-full h-[90px] backdrop-blur-2xl rounded-3xl max-w-[350px] mx-auto px-5 flex justify-between items-center text-white/60">
                <a href="#home" className="cursor-pointer size-6 flex items-center justify-center hover:scale-125 transition-all duration-[400ms] ease"><FaHome color="#334155" size={35} /></a>
                <a href="#projects" className="cursor-pointer size-6 flex items-center justify-center hover:scale-125 transition-all duration-[400ms] ease"><FaCode color="#334155" size={35} /></a>
                <a href="#about" className="cursor-pointer size-6 flex items-center justify-center hover:scale-125 transition-all duration-[400ms] ease"><FaRegUser color="#334155" size={35} /></a>
                {/* <a className="cursor-pointer size-6 flex items-center justify-center hover:scale-125 transition-all duration-[400ms] ease"><FaRegChartBar color="#334155" size={35} /></a> */}
                <a href="#contact" className="cursor-pointer size-6 flex items-center justify-center hover:scale-125 transition-all duration-[400ms] ease"><FaRegCommentDots color="#334155" size={35} /></a>
            </div>
        </nav>
    )
}
