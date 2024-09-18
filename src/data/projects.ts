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
        title_es: 'Control de Gastos',
        description: 'Manage your budget and track your expenses',
        description_es: 'Gestione su presupuesto y controle sus gastos',
        demoLink: "https://nimble-treacle-9deeb4.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/control-gastos-contextapi",
        techs: [techStyles.React, techStyles.Tailwind, techStyles.ContextApi]
    },
    {
        id: 2,
        type: 'code',
        image: '/crypto-quoter.webp',
        title: 'Crypto Quoter',
        title_es: 'Cotizador de Criptomonedas',
        description: 'Get real-time cryptocurrency prices',
        description_es: 'Obtenga precios de criptomonedas en tiempo real',
        demoLink: "https://jazzy-tanuki-abcac4.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/crypto-quoter",
        techs: [techStyles.React, techStyles.Tailwind]
    },
    {
        id: 3,
        type: 'code',
        image: '/calorie-tracker.webp',
        title: 'Calorie Tracker',
        title_es: 'Seguimiento de Calorías',
        description: 'Monitor your daily calorie intake',
        description_es: 'Monitore su ingesta de calorías diarias',
        demoLink: "https://dreamy-dragon-38c580.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/calorie-tracker",
        techs: [techStyles.React, techStyles.Tailwind]
    },
    // {
    //     id: 4,
    //     type: 'code',
    //     image: '/citas-react.webp',
    //     title: 'Veterinary Patient Monitoring',
    //     title_es: 'Seguimiento Sanitario de Pacientes',
    //     description: 'Health tracking for veterinary patients',
    //     description_es: 'Seguimiento sanitario de pacientes veterinarios',
    //     demoLink: "https://aquamarine-brioche-d5b0cf.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/citas-react"
    // },
    // {
    //     id: 5,
    //     type: 'code',
    //     image: '/guitarla.webp',
    //     title: 'GuitarLA',
    //     description: 'Shop a wide range of guitars online',
    //     description_es: 'Compre un amplio rango de guitarras en línea',
    //     demoLink: "https://chipper-snickerdoodle-355054.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/guitarla-ts"
    // },
    // {
    //     id: 6,
    //     type: 'code',
    //     image: '/tip-calculator.webp',
    //     title: 'Tip Calculator',
    //     title_es: 'Calculadora de Propinas',
    //     description: 'Quickly calculate tips and consumption whith ease',
    //     description_es: 'Calcule rápidamente propinas y consumo con facilidad',
    //     demoLink: "https://curious-khapse-c09d81.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/tip-calculator-reducer"
    // },
    {
        id: 7,
        type: 'wp',
        image: '/kit-digital.actualinternet.com.webp',
        title: 'Kit Digital',
        description: 'Landing Page to promote Kit Digital',
        description_es: 'Página de destino para promocionar Kit Digital',
        demoLink: "https://kit-digital.actualinternet.com/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    },
    {
        id: 8,
        type: 'wp',
        image: '/control-horario.oraculus.es.webp',
        title: 'Control Horario',
        description: 'Landing Page for a feature of Oraculus App',
        description_es: 'Página de destino para una funcionalidad de la App Oraculus',
        demoLink: "https://control-horario.oraculus.es/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    },
    {
        id: 9,
        type: 'wp',
        image: '/anticcar.com.webp',
        title: 'Anticcar',
        description: 'Club of classic cars',
        description_es: 'Club de coches clásicos',
        demoLink: "https://anticcar.com/",
        techs: [techStyles.Wordpress, techStyles.Elementor]
    }
]