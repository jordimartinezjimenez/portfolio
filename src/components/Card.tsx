import type { Project } from "../types"
import { FaGithub, FaLink } from 'react-icons/fa';

type CardProps = {
    project: Project
}

export default function Card({ project }: CardProps) {

    const { image, title, description, demoLink, codeLink } = project

    return (
        <article className="card max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-50 flex flex-col justify-between">
            <div className="overflow-hidden">
                <img className="card-img w-full h-48 object-cover" src={image} alt={title} />
            </div>
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                <p className="text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between xs:flex-col xs:gap-y-2">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-slate-700 border-red-500 border text-white font-bold py-1 px-3 rounded-xl flex items-center justify-center gap-2">
                    <FaLink /><span>Preview</span>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-xl flex items-center justify-center gap-2">
                    <FaGithub /><span>Code</span>
                </a>
            </div>
        </article>
    );
};