import Card from './Card';
import { projects } from '../data/projects'

type ListProps = {
    type: string
}

export default function List({ type }: ListProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter((project) => project.type === type).map((project) => (
                    <Card
                        key={project.id}
                        project={project}
                        type={type}
                    />
                ))}
            </div>
        </div>
    );
};
