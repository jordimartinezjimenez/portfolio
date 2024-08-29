import List from './List'

export default function Projects() {
    return (
        <section id='projects' className='container mx-auto min-h-[100vh] py-16'>
            <h2 className='text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-400'>My Projects</h2>
            <div className='mx-auto'>
                <div>
                    <p>Here are some of my latest works<br />To see more works you can visit my Github profile.</p>
                </div>
                <div>
                    <List />
                </div>
            </div>
        </section>
    )
}