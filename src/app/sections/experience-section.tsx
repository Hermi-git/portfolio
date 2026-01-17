"use client"

import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { IconHash } from "@tabler/icons-react";
import { Element } from 'react-scroll';

export const ExperienceSection = () => {
    const data: TimelineEntry[] = [
        {
            title: {
                company: "Brana Software Solutions",
                role: "Frontend Developer Intern",
                website: "https://branatech.co",
                location: "Addis Ababa, Ethiopia - Inperson",
                duration: "Jun 2025 - September 2025",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-light mb-6 leading-relaxed">
                        <IconHash className="inline mr-2" />
                       Worked as a Frontend Developer, building ERP modules (Landing and HR) using Next.js with a Turborepo architecture, and contributing to the Brana Pay payment facilitation platform by improving UI responsiveness and integration reliability.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light space-y-2 leading-relaxed">
                        <li>Design scalable frontend architecture using a monorepo approach for the ERP HR module.</li>
                        <li>Implement modular HR submodules including Department, Recruitment, Employee, Skill Types, and Job Position.</li>
                        <li>Develop reusable and maintainable UI components using Next.js to handle HR business workflows.</li>
                        <li>Integrate frontend applications with backend RESTful APIs for seamless data communication.</li>
                        <li>Implement frontend authentication and role-based authorization for multi-organization access.</li>
                        <li>Optimize frontend performance using code splitting, lazy loading, and efficient state management.</li>

                    </ul>
                </div>
            ),
        },
        
        {
            title:{
                company: "Swift Technologies",
                role:"Backend Developer",
                website:"https://swiftdelivery.et",
                location:"Addis Ababa, Ethiopia - Remote",
                duration:"June 2025 - September 2025",
            },
            content:(
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-light mb-6 leading-relaxed">
                        Developed Backend using Nest.js and PostgreSQL for Swift Delivery Application, a supermarket delivery platform connecting multiple vendors with customers.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light space-y-2 leading-relaxed">
                        <li>Developed backend functionality to register supermarkets via an admin panel and implemented role-based access control using <span className="font-semibold">Nest.js</span>.</li>
                        <li>Designed and implemented scalable REST APIs for supermarket and product management.</li>
                        <li>Integrated secure payment processing for e-commerce transactions.</li>
                        <li>Optimized database queries and implemented caching strategies for improved performance.</li>
                    </ul>
                </div>
            )
        },
        {
    title: {
        company: "Africa to Silicon Valley",
        role: "Mobile Developer Intern",
        website: "https://a2sv.org/",
        location: "Remote",
        duration: "—"
    },
    content: (
        <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-light mb-6 leading-relaxed">
                Developed JobMate, an AI-powered career assistant mobile application using Flutter with a strong focus on performance, scalability, and user privacy.
            </p>
            <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light space-y-2 leading-relaxed">
                <li>
                    Built cross-platform mobile application using <span className="font-semibold">Flutter</span> and implemented state management with <span className="font-semibold">Bloc</span>.
                </li>
                <li>
                    Applied <span className="font-semibold">Test-Driven Development (TDD)</span> practices to ensure code quality and reliability.
                </li>
                <li>
                    Implemented bilingual support (<span className="font-semibold">Amharic</span>/<span className="font-semibold">English</span>) to enhance accessibility and user reach.
                </li>
                <li>
                    Ensured a privacy-focused user experience by following secure data handling and user consent best practices.
                </li>
            </ul>
        </div>
    )
}
];


    return (
        <Element name="experience" className="w-full pt-10">
            <div className="max-w-7xl mx-auto md:py-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-6xl max-w-4xl font-heading font-bold text-gradient">
                    Experience
                </h2>
                <p className="text-lg md:text-xl font-light text-foreground/70 max-w-2xl mt-2">My professional journey and key achievements</p>
            </div>

            <Timeline data={data} />
        </Element>
    );
}
