import type { Project } from "../types"
import { useTranslation } from "react-i18next"
import { FaGithub, FaLink } from 'react-icons/fa';

type CardProps = {
    project: Project
}

export default function Card({ project }: CardProps) {

    const { type, image, title, title_es, description, description_es, demoLink, codeLink, techs } = project
    const { t } = useTranslation()
    const lng = localStorage.getItem('i18nLng')

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.offsetParent?.children[1].classList.add('hidden')
        event.currentTarget.offsetParent?.children[2].classList.add('hidden')
        event.currentTarget.classList.add('max-h-[22.4rem]')
        console.log()
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.offsetParent?.children[1].classList.remove('hidden')
        event.currentTarget.offsetParent?.children[2].classList.remove('hidden')
        event.currentTarget.classList.remove('max-h-[22.4rem]')
    }

    return (
        <article className="flex flex-col justify-between max-w-sm overflow-hidden bg-white bg-opacity-50 rounded shadow-lg card">
            {
                type === 'wp' ?
                    <div className="overflow-y-scroll wp-project-scrollbar max-h-48" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="object-cover w-full" src={image} alt={title} />
                    </div>
                    :
                    <div className="overflow-hidden max-h-48">
                        <img className="object-cover w-full transition-all ease-out hover:scale-110" src={image} alt={title} />
                    </div>
            }
            <div className="px-6 pt-2">
                <h4 className="mb-2 text-xl font-bold">{title_es ? (lng === 'es' ? title_es : title) : title}</h4>
                <p className="pb-2 text-base text-pretty">
                    {description_es ? (lng === 'es' ? description_es : description) : description}
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
            <div className="flex justify-between px-6 pt-4 pb-2 xs:flex-col xs:gap-y-2">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-1 font-bold text-white border border-red-500 bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-slate-700 rounded-xl">
                    <FaLink /><span>{t('projects.deployBtn')}</span>
                </a>
                {
                    codeLink &&
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-1 font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-gray-700 rounded-xl">
                        <FaGithub /><span>{t('projects.codeBtn')}</span>
                    </a>
                }
            </div>
        </article>
    );
};