'use client'

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from 'react-scroll';
import { useIsMobile } from "@/hooks/use-mobile";
import { Book, CodeIcon, ConstructionIcon, GemIcon, HomeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";


export const NavBar = ({ className }: { className?: string }) => {
    const isMobile = useIsMobile();
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const SCROLL_SENSITIVITY = -5;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (isMobile || currentScrollY < 50) {
                setVisible(true);
            } else if (delta > 0) {
                // Scrolling down -> hide
                setVisible(false);
            } else if (delta < SCROLL_SENSITIVITY) {
                // Scrolling up -> show
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, SCROLL_SENSITIVITY]);


    const navItems: { name: string; link: string; icon: JSX.Element }[] = [
        {
            name: "Hero",
            link: "hero",
            icon: <HomeIcon size={28} />
        },
        {
            name: "Skills",
            link: "skills",
            icon: <CodeIcon size={28} />,
        },
        {
            name: "Projects",
            link: "projects",
            icon: <ConstructionIcon size={28} />,
        },
        {
            name: "Experience",
            link: "experience",
            icon: <GemIcon size={28} />,
        },
        {
            name: "Education",
            link: "education",
            icon: <Book size={28} />,
        },
    ];

    return (
        <div
            className={cn(
                "flex p-3 md:p-3 gap-6 backdrop-blur-xl w-fit fixed inset-x-0 mx-auto border border-primary/30 rounded-2xl md:rounded-full bg-gradient-to-b from-background/95 to-background/80 shadow-xl shadow-primary/20 z-[50] lg:p-5 items-center justify-center space-x-4 transition-all duration-300 font-medium",
                isMobile ? "bottom-5" : "top-5",
                className,
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
            )}
        >
            {navItems.map((navItem, idx) => (
                <Tooltip key={`link=${idx}`}>
                    <TooltipTrigger>
                        <Link
                            className={cn(
                                "relative text-foreground/70 hover:text-primary items-center flex space-x-2 transition-all duration-300 hover:-translate-y-0.5 px-3 py-1.5 rounded-lg hover:bg-primary/10"
                            )}
                            to={navItem.link}
                            smooth={true}
                            duration={500}
                        >
                            {isMobile && <span className="block text-primary/80 hover:text-primary">{navItem.icon}</span>}

                            {!isMobile &&
                                <span className="sm:text-sm font-medium">
                                    {navItem.name}
                                </span>
                            }
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        {/* shows tooltip only on mobile */}
                        {
                            isMobile &&
                            <span className="bg-background text-foreground px-2 py-1 rounded-lg text-sm">
                                {navItem.name}
                            </span>
                        }
                    </TooltipContent>
                </Tooltip>
            ))
            }
        </div >
    );
};


