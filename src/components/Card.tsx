import type { Project } from "../types"
import { FaGithub, FaLink } from 'react-icons/fa';

type CardProps = {
    project: Project
}

export default function Card({ project }: CardProps) {

    const { type, image, title, description, demoLink, codeLink } = project

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.offsetParent?.children[1].classList.add('hidden')
        event.currentTarget.offsetParent?.children[2].classList.add('hidden')
        event.currentTarget.classList.add('max-h-[21.9rem]')
        console.log()
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.offsetParent?.children[1].classList.remove('hidden')
        event.currentTarget.offsetParent?.children[2].classList.remove('hidden')
        event.currentTarget.classList.remove('max-h-[21.9rem]')
    }

    return (
        <article className="card max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-50 flex flex-col justify-between">
            {
                type === 'wp' ?
                    <div className="overflow-y-scroll max-h-48" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="w-full object-cover" src={image} alt={title}/>
                    </div>
                    :
                    <div className="overflow-hidden max-h-48">
                        <img className="w-full object-cover hover:scale-110 transition-all ease-out" src={image} alt={title}/>
                    </div>
            }
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                <p className="text-base text-pretty">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between xs:flex-col xs:gap-y-2">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-slate-700 border-red-500 border text-white font-bold py-1 px-3 rounded-xl flex items-center justify-center gap-2">
                    <FaLink /><span>Preview</span>
                </a>
                {
                    codeLink &&
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-xl flex items-center justify-center gap-2">
                        <FaGithub /><span>Code</span>
                    </a>
                }

            </div>
        </article>
    );
};