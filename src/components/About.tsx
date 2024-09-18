import { skills } from '../data/skills'
import docuwareLogo from "../assets/docuware-logo.svg"
import { useTranslation, Trans } from "react-i18next"

export default function About() {

    const { t } = useTranslation()

    return (
        <section id="about" className='min-h-[100vh] py-16 flex items-center'>
            <div className='container mx-auto flex items-center'>
                <div className='flex flex-col lg:flex-row mx-auto gap-x-5'>
                    <div className='flex flex-col w-full justify-center mb-6'>
                        <h2 className='uppercase text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-400'>{t('about.title')}</h2>
                        <div>
                            <p className='font-bold text-xl mr-6 mb-4 text-slate-700/80 text-pretty'>
                                <Trans>{t('about.text1')}</Trans>
                            </p>
                            <p className='mr-6 text-pretty'>
                                <Trans>{t('about.text2')}</Trans>
                            </p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='uppercase text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-400'>{t('about.subtitle')}</h3>
                        <div>
                            <div className="mb-1 min-w[450px]">
                                <div className="text-slate-700/85 glass py-2 min-w-[350px] px-2 backdrop-blur-2xl flex flex-col rounded-lg">
                                    <div className="flex justify-between text-left p-2 font-semibold">{t('about.skills.webDev')}</div>
                                </div>
                                <div className="text-slate-700/90 mt-5 mb-5 px-2 h2 min-w-[350px] text-4xl flex gap-4 flex-wrap">
                                    {skills.filter((skill) => skill.type === 'wdev').map((skill) => (
                                        <div key={skill.id} className='flex flex-col items-center'>
                                            <skill.icon className='hover:rotate-12 transition-all ease-in-out' /><span className='text-sm'>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-1 min-w[450px]">
                                <div className="text-slate-700/85 glass py-2 min-w-[350px] px-2 backdrop-blur-2xl flex flex-col rounded-lg">
                                    <div className="flex justify-between text-left p-2 font-semibold">{t('about.skills.tools')}</div>
                                </div>
                                <div className="text-slate-700/90 mt-5 mb-5 px-2 h2 min-w-[350px] text-4xl flex gap-4 flex-wrap">
                                    {skills.filter((skill) => skill.type === 'tools').map((skill) => (
                                        <div key={skill.id} className='flex flex-col items-center'>
                                            <skill.icon className='hover:rotate-12 transition-all ease-in-out' /><span className='text-sm'>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-1 min-w[450px]">
                                <div className="text-slate-700/85 glass py-2 min-w-[350px] px-2 backdrop-blur-2xl flex flex-col rounded-lg">
                                    <div className="flex justify-between text-left p-2 font-semibold">{t('about.skills.more')}</div>
                                </div>
                                <div className="text-slate-700/90 mt-5 mb-5 px-2 h2 min-w-[350px] text-4xl flex gap-4 flex-wrap">
                                    {skills.filter((skill) => skill.type === 'more').map((skill) => (
                                        <div key={skill.id} className='flex flex-col items-center'>
                                            <skill.icon className='hover:rotate-12 transition-all ease-in-out' /><span className='text-sm'>{skill.name}</span>
                                        </div>
                                    ))}
                                    <div className='flex flex-col items-center'>
                                        <img src={docuwareLogo} alt="DocuWare" title='DocuWare' className='size-9 hover:-rotate-12 transition-all ease-in-out' /><span className='text-sm'>DocuWare</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
