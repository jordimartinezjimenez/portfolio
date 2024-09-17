import type { Project } from "../types"
import { FaGithub, FaLink, FaReact } from 'react-icons/fa';

type CardProps = {
    project: Project
}

export default function Card({ project }: CardProps) {

    const { type, image, title, description, demoLink, codeLink, techs } = project

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
                    <div className="wp-project-scrollbar overflow-y-scroll max-h-48" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="w-full object-cover" src={image} alt={title} />
                    </div>
                    :
                    <div className="overflow-hidden max-h-48">
                        <img className="w-full object-cover hover:scale-110 transition-all ease-out" src={image} alt={title} />
                    </div>
            }
            <div className="px-6 pt-2">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                <p className="text-base text-pretty pb-2">
                    {description}
                </p>
                {/* inline-block bg-slate-800 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full */}
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                    {
                        techs?.map((tech, index) =>
                            <li key={index}>
                                <span className={`${tech.class} flex items-center justify-center gap-x-1 text-sm rounded-full py-0.5 px-2 font-medium text-zinc-800 select-none`}>
                                    {tech.icon && <tech.icon style={{ color: `${tech.color}` }} />}{tech.name}
                                </span>
                            </li>)
                    }
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between xs:flex-col xs:gap-y-2">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-slate-700 border-red-500 border text-white font-bold py-1 px-3 rounded-xl flex items-center justify-center gap-2">
                    <FaLink /><span>Deploy</span>
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