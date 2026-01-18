import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ScrollBar } from "./ui/scroll-area";
import { Project } from "@/lib/projects";



export const ProjectCard = ({
    project,
    className,
    onClick,
}: {
    project: Project,
    className?: string,
    onClick?: () => void,
}) => {

    return (
        <motion.div
            className={cn("cursor-pointer group outline outline-primary/20 rounded-2xl hover:outline-primary/60 duration-300 p-1 flex flex-col shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/25 transition-all card-hover h-full", className)}
            onClick={onClick}
            layoutId={`project_${project.id}_card`}
        >

            <motion.img
                layoutId={`project_${project.id}_thumbnail`}
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl filter md:grayscale-[45%] group-hover:filter-none duration-300"
            />

            <motion.section className="p-6 md:p-7 flex-1 flex flex-col justify-between gap-5">
                <motion.p
                    className="text-base md:text-lg font-semibold group-hover:font-bold group-hover:text-primary group-hover:underline duration-300 transition-colors line-clamp-2"
                    layoutId={`project_${project.id}_title`}
                >
                    {project.title}
                </motion.p>

                <motion.p className="text-sm md:text-base flex-1 font-light leading-relaxed text-foreground/85 line-clamp-3">{project.description}</motion.p>

                <ScrollArea className="w-full mt-auto">
                    <motion.div className="flex flex-wrap gap-2 pr-4"
                        layoutId={`project_${project.id}_badges`}
                    >
                        {
                            project.tags?.map((tag, index) => (
                                <motion.span key={`${project.title}_tag_${index}`}>
                                    <Badge className="text-nowrap rounded-full text-xs md:text-sm bg-primary/15 text-primary hover:bg-primary/30 transition-colors duration-300 px-3 py-1"> {tag} </Badge>
                                </motion.span>
                            ))
                        }
                    </motion.div>
                    <ScrollBar orientation="horizontal" className="h-1" />
                </ScrollArea>
            </motion.section>
        </motion.div >
    )
}