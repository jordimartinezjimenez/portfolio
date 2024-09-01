import { IconType } from "react-icons";

export type Project = {
    id: number;
    type: string;
    image: string;
    title: string;
    description: string;
    demoLink: string;
    codeLink?: string;
}

export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    type: string;
}