import { useTranslation } from "react-i18next"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import logo from "../assets/jordi-logo.svg"
import { FaRegFileAlt } from "react-icons/fa"
// import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";


export default function Header() {

    const [t, i18n] = useTranslation()

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("i18nLng", lang)
    }

    return (
        <header className="flex justify-between items-center py-8 relative text-slate-100">
            <a href="#home"><img src={logo} alt="logo" className="w-[124px] cursor-pointer hover:scale-110 transition-all duration-[400ms] ease" /></a>
            <div className="flex gap-x-2 absolute left-9 top-[5.5rem] "> {/* xs:static xs:mx-2 */}
                <button onClick={() => handleChangeLanguage("en")}><span className="fi fi-gb fis fi-circle hover:scale-125 transition duration-[400ms] ease"></span></button>
                <button onClick={() => handleChangeLanguage("es")}><span className="fi fi-es fis fi-circle hover:scale-125 transition duration-[400ms] ease"></span></button>
            </div>
            <a href="#contact" className="flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg gap-x-2 py-1.5 px-6 cursor-pointer shadow-lg shadow-rose-500/50  hover:scale-110 transition-all duration-[400ms] ease"><FaRegFileAlt />{t('header.hireBtn')}</a>
            {/* <div className="absolute right-10 top-[5.5rem]">
                <ThemeSwitch />
            </div> */}
        </header>
    )
}
