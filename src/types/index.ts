import { IconType } from "react-icons";

export type Project = {
    id: number;
    type: string;
    image: string;
    title: string;
    title_es?: string;
    description: string;
    description_es?: string;
    demoLink: string;
    codeLink?: string;
    techs?: techStyles[];
}

export type techStyles = {
    name: string,
    icon?: IconType,
    class: string
    color?: string
}

export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    type: string;
}