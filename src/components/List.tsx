import Card from './Card';
import { projects } from '../data/projects'

export default function List() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
};
