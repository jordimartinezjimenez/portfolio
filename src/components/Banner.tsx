import { useTranslation, Trans } from "react-i18next"
// import me from "../assets/me.webp"
// import me3 from "../assets/me3.webp"
import cv from "../assets/CV-Jordi_Martinez_Jimenez.pdf"
import { FaCloudDownloadAlt, FaEnvelope, FaGithub, FaLinkedin, FaRegClipboard } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"
import Me from "./Me/Me"
import Badge from "./Badge"

export default function Banner() {

    const { t } = useTranslation()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(location.href)
    }

    return (
        <section className="min-h-[100vh] container mx-auto flex flex-col justify-center items-center lg:justify-between lg:flex-row">
            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-baseline">
                <h1 className="uppercase flex flex-col lg:flex-row lg:gap-5 lg:justify-normal justify-center items-center text-5xl font-bold lg:text-6xl"><span>Jordi</span><span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-500">Martinez</span></h1>

                <p className="text-2xl lg:text-4xl">{t('banner.subtitle')}</p>
                <p className="mx-auto max-w-lg mb-8 text-center lg:text-left lg:mx-0">
                    <Trans>{t('banner.text')}</Trans>
                </p>
                <div className="flex gap-6 items-center mb-8 text-slate-100">
                    <a href="#contact" className="flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg gap-2 py-1.5 px-8 cursor-pointer shadow-lg shadow-rose-500/50 hover:scale-110 transition-all duration-[400ms] ease"><FaEnvelope color="white" />{t('banner.contactBtn')}</a>
                    <a href={cv} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gradient-to-r from-rose-700 to-pink-700 rounded-lg gap-2 py-1.5 px-8 cursor-pointer shadow-lg shadow-rose-500/50 hover:scale-110 transition-all duration-[400ms] ease"><FaCloudDownloadAlt color="white" />{t('banner.resumeBtn')}</a>
                </div>
                <div className="flex gap-x-6 max-w-max mx-auto lg:mx-0">
                    <a href="https://www.linkedin.com/in/jordi-martinez-jimenez/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FaLinkedin color="#334155" size={35} /></a>
                    <a href="https://github.com/jordimartinezjimenez" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FaGithub color="#334155" size={35} /> </a>
                    <a href="mailto:jordimj63@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-[400ms] ease"><FaEnvelope color="#334155" size={35} /></a>
                    <button type="button" onClick={copyToClipboard} className="copy">
                        <span data-text-end={t('banner.clipboardTooltip')} data-text-initial={t('banner.clipboard')} className="tooltip"></span>
                        <span className="flex justify-center items-center">
                            <FaRegClipboard className="clipboard" />
                            <FaCheck className="checkmark" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="my-8 flex flex-col items-center justify-center gap-y-2">
                {/* <div className="box my-8 mx-auto size-64 lg:size-80 overflow-hidden rounded-full relative hover:[transform:rotate3d(20_,-10,_1,_20deg)]">
                    <img src={me3} alt="img" className="rounded-full absolute  scale-x-[-1]" draggable="false" />
                </div> */}
                <Badge />
                <Me />
            </div>
        </section>
    )
}
