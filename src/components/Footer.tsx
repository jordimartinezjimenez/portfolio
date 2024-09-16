import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="w-full flex sm:flex-row flex-col justify-evenly items-center pb-32">
            <div className="flex flex-col items-center">
                <p>Jordi Martinez</p>
                <p>© 2024</p>
            </div>

            <div className="flex gap-x-4">
                <a href="https://www.linkedin.com/in/jordi-martinez-jimenez/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FiLinkedin color="#334155" size={25} /></a>
                <a href="https://github.com/jordimartinezjimenez" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FiGithub color="#334155" size={25} /> </a>
                <a href="mailto:jordimj63@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FiMail color="#334155" size={25} /></a>
            </div>
        </footer>
    )
}
