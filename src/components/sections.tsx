"use client"

import { motion } from "motion/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { FullscreenImageViewer } from "./fullscreen-image-viewer";
import { Project } from "@/lib/projects";
import Image from "next/image";
import Markdown from 'react-markdown'


export type Section =
    | CarouselSection
    | BulletSection
    | TextSection
    | CustomSection;

export interface CarouselSection {
    type: "carousel";
    title?: string;
    items: {
        image: string;
        caption?: string;
    }[];
}

export interface BulletSection {
    type: "bullet";
    title?: string;
    items: string[];
}

export interface TextSection {
    type: "text";
    title?: string;
    content: string;
}

export interface CustomSection {
    type: "custom";
    title?: string;
    content: JSX.Element;
}

type sectionComponentProps<T extends Section> = {
    section: T;
    project: Project;
    index?: number;
};

export const SectionComponents: React.FC<{
    section: Section;
    project: Project;
    index: number,
    setOpen?: (open: boolean) => void
}> =
    ({ section, project, index, }) => {
        const Component = SectionComponentsMapping[section.type];
        return <Component section={section} project={project} index={index} />;
    }

export const SectionComponentsMapping: Record<Section["type"], React.FC<
    sectionComponentProps<Section>
>> = {
    text: ({ section, project }) => <TextComponent section={section as TextSection} project={project} />,
    carousel: ({ section, project }) => <CarouselComponent section={section as CarouselSection} project={project} />,
    bullet: ({ section }) => <BulletList section={section as BulletSection} />,
    custom: ({ section, project }) => <CustomSection section={section as CustomSection} project={project} />,
};



const TextComponent = ({ project, section, index }: sectionComponentProps<TextSection>) => {
    return (
        <motion.div
            layoutId={`project_${project.id}_section_${index}`}
        >
            <Markdown>{section.content}</Markdown>
        </motion.div>
    );
}


const CarouselComponent = ({ section }: sectionComponentProps<CarouselSection>) => {
    // -1 means no image is selected
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

    return (
        <motion.div className="overflow-x-hidden">
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">{section.title}</h3>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-50% max-w-md md:ml-16"
            >
                <CarouselContent className="px-10 w-full">
                    {
                        section.items.map(({ image, caption = "" }, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-11/12 lg:basis-2/3 cursor-pointer group"
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <div className="p-1 aspect-video w-auto rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                                    <Image
                                        src={image}
                                        width={500}
                                        height={500}
                                        alt={caption}
                                        className="w-fit aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="text-center text-sm text-muted-foreground mt-2">{caption}</div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <div className="max-lg:hidden">
                    <CarouselPrevious className="hover:bg-primary/20" />
                    <CarouselNext className="hover:bg-primary/20" />
                </div>
            </Carousel>

            {
                selectedImageIndex != -1 &&
                <FullscreenImageViewer
                    src={section.items[selectedImageIndex].image}
                    onClose={() => setSelectedImageIndex(-1)}
                    onPrev={() => setSelectedImageIndex((prev) => (prev - 1 + section.items.length) % section.items.length)}
                    onNext={() => setSelectedImageIndex((prev) => (prev + 1) % section.items.length)}
                />
            }
        </motion.div >
    );
}

const BulletList = ({ section }: { section: BulletSection }) => {
    return (
        <motion.div
            className="rounded-xl p-4 bg-primary/5 border border-primary/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">{section.title}</h3>
            <ul className="list-none space-y-3">
                {section.items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-3 text-wrap"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                        <div className="text-foreground/80 font-light">
                            <Markdown>
                                {item}
                            </Markdown>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </motion.div>
    );
};

const CustomSection = ({ project, section, index }: sectionComponentProps<CustomSection>) => {

    return (
        <motion.div
            layoutId={`project_${project.id}_section_${index}`}
        >

            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">{section.title}</h3>
            {section.content}
        </motion.div>
    );
}
