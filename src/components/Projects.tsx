import { useTranslation, Trans } from "react-i18next"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import List from './List'
import { FaCode, FaWordpress } from "react-icons/fa6"

export default function Projects() {

    const { t } = useTranslation()

    return (
        <section id='projects' className='container mx-auto min-h-[100vh] py-16'>
            <h2 className='text-4xl font-extrabold text-transparent lg:text-6xl bg-clip-text bg-gradient-to-r from-rose-700 to-pink-400'>{t('projects.title')}</h2>
            <div className='mx-auto'>
                <div>
                    <p className="text-pretty"><Trans>{t('projects.text')}</Trans></p>
                </div>
                <div>
                    <div className="flex w-full justify-center mt-5">
                        <div className="w-full">
                            <TabGroup>
                                <TabList className="flex gap-x-4 bg-zinc-600/10 w-[14.5rem] rounded-lg">
                                    <Tab className="rounded-lg py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">
                                        <p className="flex items-center justify-center gap-1 text-lg"><FaCode color="#c73697" /><span>Code</span></p>
                                    </Tab>
                                    <Tab className="rounded-lg py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">
                                        <p className="flex items-center justify-center gap-1 text-lg"><FaWordpress color="#0775aa" /><span>Wordpress</span></p>
                                    </Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <List type='code' />
                                    </TabPanel>
                                    <TabPanel>
                                        <List type='wp' />
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                    {/* <List /> */}
                </div>
            </div>
        </section>
    )
}