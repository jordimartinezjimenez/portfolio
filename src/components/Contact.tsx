import contactLottie from '../assets/contact-lottie.json'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Contact() {
    return (
        <section id='contact' className='py-16 min-h-[100vh] flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row items-center'>
                    <div className='flex-1 max-w-[480px]'>
                        <h3 className='text-xl uppercase font-medium tracking-wider'>Get in touch</h3>
                        <h2 className='text-5xl lg:text-8xl leading-none mb-4'>Drop<br />a<br />line!</h2>
                        <Player
                            autoplay
                            loop
                            src={contactLottie}
                            style={{ height: '300px', width: '300px', margin: 0 }}
                        >
                        </Player>
                    </div>
                    <form action="https://formsubmit.co/7cf79b993875d75761535dd0c4833aa8" method='POST' className='glass flex flex-1 flex-col gap-y-6 rounded-3xl p-6 items-start'>
                        <input type="text" name="name" id="name" placeholder='Your name' required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 hover:border-b-4 focus:border-b-4' />
                        <input type="email" name="email" id="email" placeholder='Your email' required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 hover:border-b-4 focus:border-b-4' />
                        <textarea name="message" id="message" placeholder='Your message' required className='bg-transparent border-b border-b-slate/40 p-4 rounded-xl py-3 outline-none w-full placeholder:text-slate/70 transition-all border-gray-300 mb-12 resize-none hover:border-b-4 focus:border-b-4'></textarea>
                        <input type="submit" className='bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg py-1.5 px-8 cursor-pointer' value="Submit" />

                        <input type="hidden" name="_next" value="http://localhost:5173/#contact" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </div>
        </section>
    )
}
