import { Section } from "@/components/sections";
import { IconDatabase } from "@tabler/icons-react";


export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags?: string[];
    time?: string;
    links: {
        icon: JSX.Element;
        text: string;
        url: string;
    }[];
    details: {
        sections?: Section[];
    };
}

export const projects: Project[] = [


    // Hospital Management System Web App

    {
        id: "1",
        title: "Hospital Management System Web App",
        description: "A full-stack, role-based hospital management system handling operations for doctors, patients, pharmacists, nurses, and admins.",
        thumbnail: "/hospital_management.jpg",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        links: [],
        details: {
            sections: [
                {
                    type: "text",
                    title: "",
                    content: `Developed a comprehensive full-stack hospital management system with role-based access control. The system handles complex operations for doctors, patients, pharmacists, nurses, and admins with a secure and intuitive interface.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Role-based user access control",
                        "Doctor and patient management",
                        "Pharmacy and medication tracking",
                        "Nurse scheduling and monitoring",
                        "Secure API integrations",
                        "Robust data management system"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stack",
                    items: [
                        "**Frontend**: React.js with modern UI/UX",
                        "**Backend**: Node.js and Express.js",
                        "**Database**: MongoDB for flexible data storage"
                    ]
                },
            ]
        }

    },

    // Community Repair Hub Mobile App
    {
        id: "2",
        title: "Community Repair Hub Mobile App",
        description: "A community-focused mobile platform that connects users with local repair volunteers to promote sustainability.",
        thumbnail: "/community_repair_hub.jpg",
        tags: ["Flutter", "Dart", "Jetpack Compose", "Android"],
        links: [],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Community Repair Hub is a community-focused mobile platform designed to connect users with local repair volunteers. The app promotes sustainability by enabling residents to find skilled volunteers who can help repair items instead of discarding them. Available in both Android-native and cross-platform versions.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "User-friendly repair request system",
                        "Volunteer matching and scheduling",
                        "Sustainability focus",
                        "Community engagement tools",
                        "Real-time notifications"
                    ]
                },
                {
                    type: "bullet",
                    title: "Available Versions",
                    items: [
                        "**Android Native**: Built with Jetpack Compose for optimal Android performance",
                        "**Cross-platform**: Flutter version for both iOS and Android"
                    ]
                }
            ]
        },
    },

    // Brana ERP
    {
        id: "3",
        title: "Brana ERP",
        description: "A scalable ERP system frontend with modular HR modules (Landing and HR) built using Next.js and Turborepo, featuring role-based access control and seamless backend integration.",
        thumbnail: "/Brana_Erp.png",
        links: [],
        time: "Jun 2025 - September 2025",
        tags: ["Next.js", "React.js", "Turborepo", "TypeScript", "Tailwind CSS"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Brana ERP is an Enterprise Resource Planning system frontend built with a scalable monorepo architecture using Turborepo. Developed modular ERP modules focusing on the Landing page and HR module with role-based access control, multi-organization support, and seamless API integration.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Scalable monorepo architecture using Turborepo",
                        "Modular HR submodules (Department, Recruitment, Employee, Skill Types, Job Position)",
                        "Role-based access control for multi-organization support",
                        "Reusable and maintainable UI components",
                        "Frontend authentication and authorization",
                        "Optimized performance with code splitting and lazy loading"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stack",
                    items: [
                        "**Frontend**: Next.js, React.js, TypeScript, Tailwind CSS",
                        "**Architecture**: Turborepo for monorepo management",
                        "**State Management**: RESTful API integration with role-based workflows"
                    ],
                },
            ]
        }
    },

    
    {
        id: "4",
        title: "Swift Supermarket Delivery PWA",
        description: "Delivery system that connects supermarkets with clients. Participated as Backend developer using Nest.js, payment integration and scalable API design.",
        thumbnail: "/Swift_delivery.png",
        links: [
            {
                icon: <IconDatabase />,
                text: "Dataset",
                url: "https://swiftdelivery.et"
            }
        ],
        tags: ["Next.js", "Nest.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Swift Delivery PWA is a progressive web application that connects supermarkets with clients, facilitating efficient delivery services. As a Backend developer, I implemented robust API design and payment integration solutions. The system streamlines the shopping experience by allowing users to browse products from multiple supermarkets, place orders, and have their groceries delivered directly to their doorstep.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Multi-supermarket integration",
                        "Scalable REST API with Nest.js",
                        "Secure payment processing",
                        "Real-time order tracking",
                        "User authentication and authorization"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stack",
                    items: [
                        "**Frontend**: Next.js with TypeScript and Tailwind CSS",
                        "**Backend**: Nest.js with scalable microservices architecture",
                        "**Database**: PostgreSQL",
                        "**Payment Integration**: Secure payment gateway"
                    ]
                }
            ]
        }
    }, 
    
]