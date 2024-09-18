import { useTranslation, Trans } from "react-i18next"
import List from './List'

export default function Projects() {

    const { t } = useTranslation()

    return (
        <section id='projects' className='container mx-auto min-h-[100vh] py-16'>
            <h2 className='text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-400'>{t('projects.title')}</h2>
            <div className='mx-auto'>
                <div>
                    <p className="text-pretty"><Trans>{t('projects.text')}</Trans></p>
                </div>
                <div>
                    <List />
                </div>
            </div>
        </section>
    )
}