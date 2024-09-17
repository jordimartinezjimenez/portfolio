import type { Project } from "../types"
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { FaElementor, FaWordpress } from "react-icons/fa6";

const techStyles = {
    React: {
        name: 'React',
        icon: FaReact,
        class: 'bg-sky-600/30',
        color: '#57c4db'
    },
    Tailwind: {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
        class: 'bg-stone-600/30',
        color: '#0ea6e9'
    },
    ContextApi: {
        name: 'ContextAPI',
        icon: TbApiApp,
        class: 'bg-orange-600/30',
        color: '#ff4400',
    },
    Wordpress: {
        name: 'WordPress',
        icon: FaWordpress,
        class: 'bg-blue-600/30',
        color: '#0775aa',
    },
    Elementor: {
        name: 'Elementor',
        icon: FaElementor,
        class: 'bg-violet-600/30',
        color: '#8f013d',
    }
}

export const projects: Project[] = [
    {
        id: 1,
        type: 'code',
        image: '/control-gastos.webp',
        title: 'Expense Planner',
        description: 'Manage your budget and track your expenses',
        demoLink: "https://nimble-treacle-9deeb4.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/control-gastos-contextapi",
        techs: [techStyles.React, techStyles.Tailwind, techStyles.ContextApi]
    },
    {
        id: 2,
        type: 'code',
        image: '/crypto-quoter.webp',
        title: 'Crypto Quoter',
        description: 'Get real-time cryptocurrency prices',
        demoLink: "https://jazzy-tanuki-abcac4.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/crypto-quoter",
        techs: [techStyles.React, techStyles.Tailwind]
    },
    {
        id: 3,
        type: 'code',
        image: '/calorie-tracker.webp',
        title: 'Calorie Tracker',
        description: 'Monitor your daily calorie intake',
        demoLink: "https://dreamy-dragon-38c580.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/calorie-tracker",
        techs: [techStyles.React, techStyles.Tailwind]
    },
    // {
    //     id: 4,
    //     type: 'code',
    //     image: '/citas-react.webp',
    //     title: 'Veterinary Patient Monitoring',
    //     description: 'Health tracking for veterinary patients',
    //     demoLink: "https://aquamarine-brioche-d5b0cf.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/citas-react"
    // },
    // {
    //     id: 5,
    //     type: 'code',
    //     image: '/guitarla.webp',
    //     title: 'GuitarLA',
    //     description: 'Shop a wide range of guitars online',
    //     demoLink: "https://chipper-snickerdoodle-355054.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/guitarla-ts"
    // },
    // {
    //     id: 6,
    //     type: 'code',
    //     image: '/tip-calculator.webp',
    //     title: 'Tip Calculator',
    //     description: 'Quickly calculate tips and consumption whith ease',
    //     demoLink: "https://curious-khapse-c09d81.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/tip-calculator-reducer"
    // },
    {
        id: 7,
        type: 'wp',
        image: '/kit-digital.actualinternet.com.webp',
        title: 'Kit Digital',
        description: 'Landing Page to promote Kit Digital',
        demoLink: "https://kit-digital.actualinternet.com/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    },
    {
        id: 8,
        type: 'wp',
        image: '/control-horario.oraculus.es.webp',
        title: 'Control Horario',
        description: 'Landing Page for a feature of Oraculus App',
        demoLink: "https://control-horario.oraculus.es/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    },
    {
        id: 9,
        type: 'wp',
        image: '/anticcar.com.webp',
        title: 'Anticcar',
        description: 'Club of classic cars',
        demoLink: "https://anticcar.com/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    }
]