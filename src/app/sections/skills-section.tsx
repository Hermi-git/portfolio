"use client";

import { cn } from "@/lib/utils";
import {
    IconBrandAngularFilled,
    IconBrandCSharp,
    IconBrandDocker,
    IconBrandFirebase,
    IconBrandFlutter,
    IconBrandGit,
    IconBrandJavascript,
    IconBrandKotlin,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconIndentIncrease
} from "@tabler/icons-react";
import { Element } from "react-scroll";

import {
    IconDart,
    IconBrandReddis,
    IconBrandNeo4j,
    IconBrandPostgres,
    IconBrandPytorch,
    IconBrandTensorflow,
    IconBrandRabbitMQ,
    IconBrandFastAPI,
} from "@/components/icons/index"


export const SkillsSection = ({ className }: { className?: string }) => {

    const data: {
        title: string;
        skills: {
            name: string;
            icon?: JSX.Element;
        }[];
    }[] = [
            {
                title: "Programming Languages",
                skills: [
                    { name: "Python", icon: <IconBrandPython size={22} stroke={1.5} /> },
                    { name: "", icon: <IconBrandCSharp size={22} stroke={1.5} /> },
                    { name: "Typescript", icon: <IconBrandTypescript size={22} stroke={1.5} /> },
                    { name: "Javascript", icon: <IconBrandJavascript size={22} stroke={1.5} /> },
                    { name: "Dart", icon: <IconDart /> },
                    {name:'Kotlin',icon:<IconBrandKotlin  size={22} stroke={1.5} />}
                ]
            },
            {
                title: "Frameworks & Libraries",
                skills: [
                    { name: "FastAPI", icon: <IconBrandFastAPI /> },
                    { name: "React", icon: <IconBrandReact stroke={1.5} /> },
                    { name: "Flutter", icon: <IconBrandFlutter stroke={1.5} /> },
                    { name: "NextJs", icon: <IconBrandNextjs stroke={1.5} /> },
                    { name: "DotNet" },
                    { name: "ExpressJS" },
                    {name:"NestJS"}
                ],
            },
            {
                title: "Databases",
                skills: [
                    { name: "PostgreSQL", icon: <IconBrandPostgres /> },
                    { name: "MySQL", icon: <IconBrandMysql stroke={1.5} /> },
                    { name: "MongoDB", icon: <IconBrandMongodb stroke={1.5} /> },
                ],
            },
            {
                title: "Tools and Technologies",
                skills: [
                    { name: "Docker", icon: <IconBrandDocker stroke={1.5} /> },
                    { name: "Git", icon: <IconBrandGit stroke={1.5} /> },
                    { name: "Redis", icon: <IconBrandReddis /> },
                    { name: "Firebase", icon: <IconBrandFirebase stroke={1.5} /> },
                    { name: "RabbitMQ", icon: <IconBrandRabbitMQ /> },
                    {name:'Kubernetes'}
                ]
            }
        ]

    return (
        <Element name="skills" className="w-full pt-10">
            <section className={cn("min-h-screen p-3", className)} id="skills">

                <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl md:text-6xl mb-4 max-w-4xl font-heading font-bold text-gradient">
                        Skills
                    </h2>
                    <p className="text-lg md:text-xl font-light text-foreground/70 max-w-2xl">Technologies and tools I work with</p>
                </div>

                <div className="md:my-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-20 w-full p-4 items-start">
                    {
                        data.map(({ title, skills }, index) => (
                            <div key={`skill_section_${index}`} className="row-span-1 flex flex-col gap-6 items-start justify-start p-6 rounded-xl bg-primary/5 border border-primary/20 shadow-lg shadow-primary/10">
                                <div className="w-full flex items-center gap-2">
                                    <IconIndentIncrease className="inline text-primary" size={24} />
                                    <span className="text-xl md:text-3xl font-heading font-semibold text-primary">
                                        {title}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3 md:gap-4 justify-start w-full">
                                    {
                                        skills.map(({ name, icon }, i) => (
                                            <span key={i} className="border-2 border-primary/30 bg-primary/8 hover:bg-primary/15 hover:border-primary/60 flex rounded-lg px-3 py-2 gap-2 opacity-90 cursor-default select-none transition-all duration-300 font-medium text-sm md:text-base">
                                                {icon && <span className="text-primary">{icon}</span>}
                                                <span>{name}</span>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Element>
    )
};