import { useTranslation } from "react-i18next"

export default function Badge() {

    const { t } = useTranslation()

    return (
        <div className="flex items-center animate-bounce">
            <a
                href="https://linkedin.com/in/jordi-martinez-jimenez"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex overflow-hidden rounded-full p-[2px] hover:scale-105 transition select-none" draggable="false"
            >
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"
                ></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white  rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
                    💻 {t('badge.text')}
                </div>
            </a>
        </div>
    )
}
