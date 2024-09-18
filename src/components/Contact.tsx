import contactLottie from '../assets/contact-lottie.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation, Trans } from "react-i18next"

export default function Contact() {

    const { t } = useTranslation()

    return (
        <section id='contact' className='py-16 min-h-[100vh] flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row items-center'>
                    <div className='flex-1 max-w-[480px]'>
                        <h3 className='text-xl uppercase font-medium tracking-wider'>{t('contact.subtitle')}</h3>
                        <h2 className='text-5xl lg:text-8xl leading-none mb-4'><Trans>{t('contact.title')}</Trans></h2>
                        <Player
                            autoplay
                            loop
                            src={contactLottie}
                            style={{ height: '300px', width: '300px', margin: 0 }}
                        >
                        </Player>
                    </div>
                    <form action='/' name='contact' method='POST' data-netlify="true" data-netlify-honeypot="bot-field" className='glass flex flex-1 flex-col gap-y-6 rounded-3xl p-6 items-start'>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" id="name" placeholder={t('contact.name')} required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 hover:border-b-4 focus:border-b-4' />
                        <input type="email" name="email" id="email" placeholder={t('contact.email')} required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 hover:border-b-4 focus:border-b-4' />
                        <textarea name="message" id="message" placeholder={t('contact.message')} required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 mb-12 resize-none hover:border-b-4 focus:border-b-4'></textarea>
                        {/* <div data-netlify-recaptcha="true"></div> */}
                        <button type="submit" className='bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg py-1.5 px-8 cursor-pointer hover:scale-110 transition-all duration-[400ms] ease'>{t('contact.sendBtn')}</button >
                    </form>
                </div>
            </div>
        </section>
    )
}
