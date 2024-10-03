import type { Project } from "../types"
import { SiExpress, SiJest, SiPostgresql, SiReactrouter, SiSequelize, SiSwagger, SiTailwindcss, SiZod } from "react-icons/si";
import { FaReact, FaWpforms } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { FaElementor, FaWordpress } from "react-icons/fa6";
import { RiBearSmileLine, RiRobot2Line } from "react-icons/ri";

const techStyles = {
    React: {
        name: 'React',
        icon: FaReact,
        class: 'bg-sky-600/30',
        color: '#57c4db'
    },
    Tailwind: {
        name: 'Tailwind',
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
    },
    Zustand: {
        name: 'Zustand',
        icon: RiBearSmileLine,
        class: 'bg-amber-900/30',
        color: '#443f39',
    },
    Zod: {
        name: 'Zod',
        icon: SiZod,
        class: 'bg-emerald-400/30',
        color: '#55af82',
    },
    ReactHookForm: {
        name: 'RHookForm',
        icon: FaWpforms,
        class: 'bg-pink-500/30',
        color: '#ec5990',
    },
    ReactRouter: {
        name: 'RRouter',
        icon: SiReactrouter,
        class: 'bg-rose-500/30',
        color: '#f44251',
    },
    ExpressJS: {
        name: 'ExpressJS',
        icon: SiExpress,
        class: 'bg-slate-200/50',
        color: '#010409',
    },
    Valibot: {
        name: 'Valibot',
        icon: RiRobot2Line,
        class: 'bg-slate-700/20',
        color: '#38bdf8',
    },
    Jest: {
        name: 'Jest/Supertest',
        icon: SiJest,
        class: 'bg-red-800/25',
        color: '#8d3c56',
    },
    PostgresSQL: {
        name: 'PostgresSQL',
        icon: SiPostgresql,
        class: 'bg-cyan-600/30',
        color: '#212121',
    },
    Sequelize: {
        name: 'Sequelize',
        icon: SiSequelize,
        class: 'bg-blue-300/40',
        color: '#3c75c2',
    },
    Swagger: {
        name: 'Swagger',
        icon: SiSwagger,
        class: 'bg-lime-600/30',
        color: '#173648',
    },
}

export const projects: Project[] = [
    {
        id: 1,
        type: 'code',
        image: '/patients.webp',
        title: 'Veterinary Patient Monitoring',
        title_es: 'Seguimiento Sanitario de Pacientes',
        description: 'Health tracking for veterinary patients',
        description_es: 'Seguimiento sanitario de pacientes veterinarios',
        demoLink: "https://patients-jordimartinez.netlify.app",
        codeLink: "https://github.com/jordimartinezjimenez/patients-zustand",
        techs: [techStyles.React, techStyles.Tailwind, techStyles.Zustand, techStyles.ReactHookForm]
    },
    {
        id: 2,
        type: 'code',
        image: '/drinks-app.webp',
        title: 'Drinks App',
        title_es: 'Drinks App',
        description: 'Discover and mix your favorite drinks',
        description_es: 'Descubre y mezcla tus bebidas favoritas',
        demoLink: "https://drinks-app-jordimartinez.netlify.app",
        codeLink: "https://github.com/jordimartinezjimenez/drinks-app",
        techs: [techStyles.React, techStyles.ReactRouter, techStyles.Tailwind, techStyles.Zustand, techStyles.Zod]
    },
    {
        id: 3,
        type: 'code',
        image: '/control-gastos.webp',
        title: 'Expense Planner',
        title_es: 'Control de Gastos',
        description: 'Manage your budget and track your expenses',
        description_es: 'Gestione su presupuesto y controle sus gastos',
        demoLink: "https://control-gastos-jordimartinez.netlify.app",
        codeLink: "https://github.com/jordimartinezjimenez/control-gastos-contextapi",
        techs: [techStyles.React, techStyles.Tailwind, techStyles.ContextApi]
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
    {
        id: 6,
        type: 'code',
        image: '/product-manager.webp',
        title: 'Product Manager',
        title_es: 'Gestor de productos',
        description: 'PERN FullStack project',
        description_es: 'Proyecto PERN FullStack',
        demoLink: "https://product-manager-jordimartinez.vercel.app",
        codeLink: "https://github.com/jordimartinezjimenez/product-manager-fullstack",
        techs: [techStyles.React, techStyles.ReactRouter, techStyles.Tailwind, techStyles.ExpressJS, techStyles.Valibot, techStyles.Jest, techStyles.PostgresSQL, techStyles.Sequelize, techStyles.Swagger]
    },
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
        description_es: 'Página de destino para funcionalidad App Oraculus',
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
    },
    // {
    //     id: 10,
    //     type: 'code',
    //     image: '/crypto-quoter.webp',
    //     title: 'Crypto Quoter',
    //     title_es: 'Cotizador de Criptomonedas',
    //     description: 'Get real-time cryptocurrency prices',
    //     description_es: 'Obtenga precios de criptomonedas en tiempo real',
    //     demoLink: "https://jazzy-tanuki-abcac4.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/crypto-quoter",
    //     techs: [techStyles.React, techStyles.Tailwind]
    // },
    // {
    //     id: 11,
    //     type: 'code',
    //     image: '/calorie-tracker.webp',
    //     title: 'Calorie Tracker',
    //     title_es: 'Seguimiento de Calorías',
    //     description: 'Monitor your daily calorie intake',
    //     description_es: 'Monitore su ingesta de calorías diarias',
    //     demoLink: "https://dreamy-dragon-38c580.netlify.app/",
    //     codeLink: "https://github.com/jordimartinezjimenez/calorie-tracker",
    //     techs: [techStyles.React, techStyles.Tailwind]
    // },
    {
        id: 12,
        type: 'code',
        image: '/weather-app.webp',
        title: 'Weather App',
        title_es: 'Weather App',
        description: 'Real-time temperatures by location',
        description_es: 'Temperaturas en tiempo real por ubicación',
        demoLink: "https://weather-app-jordimartinez.netlify.app",
        codeLink: "https://github.com/jordimartinezjimenez/weather-react-ts",
        techs: [techStyles.React, techStyles.Zod]
    },
    {
        id: 13,
        type: 'code',
        image: '/crypto-quoter-v2.webp',
        title: 'Crypto Quoter',
        title_es: 'Cotizador de Criptomonedas',
        description: 'Get real-time cryptocurrency prices',
        description_es: 'Obtenga precios de criptomonedas en tiempo real',
        demoLink: "https://crypto-quoter-jordimartinez.netlify.app/",
        codeLink: "https://github.com/jordimartinezjimenez/crypto-react-ts",
        techs: [techStyles.React, techStyles.Zustand, techStyles.Zod]
    },
    // {
    //     id: 14,
    //     type: 'code',
    //     image: '/tip-calculator.webp',
    //     title: 'Tip Calculator',
    //     title_es: 'Calculadora de Propinas',
    //     description: 'Quickly calculate tips and consumption',
    //     description_es: 'Calcule rápidamente propinas y consumo',
    //     demoLink: "https://tip-calculator-jordimartinez.netlify.app",
    //     codeLink: "https://github.com/jordimartinezjimenez/tip-calculator-reducer",
    //     techs: [techStyles.React, techStyles.Tailwind]
    // },
]