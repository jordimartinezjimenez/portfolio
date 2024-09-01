import type { Skill } from "../types"
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { FaElementor, FaGitAlt, FaWordpress } from 'react-icons/fa6'
import { SiAdobephotoshop, SiJavascript, SiMysql, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si'

export const skills: Skill[] = [
    {
        id: 1,
        name: 'HTML5',
        icon: FaHtml5,
        type: 'wdev'
    },
    {
        id: 2,
        name: 'CSS3',
        icon: FaCss3Alt,
        type: 'wdev'
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: SiJavascript,
        type: 'wdev'
    },
    {
        id: 4,
        name: 'TypeScript',
        icon: SiTypescript,
        type: 'wdev'
    },
    {
        id: 5,
        name: 'React',
        icon: FaReact,
        type: 'wdev'
    },
    {
        id: 6,
        name: 'TailwindCSS',
        icon: SiTailwindcss,
        type: 'wdev'
    },
    {
        id: 7,
        name: 'Git',
        icon: FaGitAlt,
        type: 'tools'
    },
    {
        id: 8,
        name: 'GitHub',
        icon: FaGithub,
        type: 'tools'
    },
    {
        id: 9,
        name: 'Photoshop',
        icon: SiAdobephotoshop,
        type: 'tools'
    },
    {
        id: 10,
        name: 'VSCode',
        icon: SiVisualstudiocode,
        type: 'tools'
    },
    {
        id: 11,
        name: 'MySQL',
        icon: SiMysql,
        type: 'more'
    },
    {
        id: 12,
        name: 'WordPress',
        icon: FaWordpress,
        type: 'more'
    },
    {
        id: 13,
        name: 'Elementor',
        icon: FaElementor,
        type: 'more'
    },
    // {
    //     id: 14,
    //     name: 'DocuWare',
    //     icon: docuwareLogo,
    //     type: 'more'
    // }
]