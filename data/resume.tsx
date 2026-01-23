
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const RESUME_DATA = {
    name: "ABDULWAHID ZURAYQ",
    initials: "AZ",
    location: "Kocaeli, Türkiye",
    locationLink: "https://www.google.com/maps/place/Kocaeli",
    about: "Motivated Computer Engineering student developing skills in programming and problem solving. Exploring different fields within software development and open to learning new technologies through hands-on experience.",
    summary: "Motivated Computer Engineering student developing skills in programming and problem solving. Exploring different fields within software development and open to learning new technologies through hands-on experience.",
    avatarUrl: "",
    personalWebsiteUrl: "https://zurayq.xyz",
    contact: {
        email: "abdulwahid@zurayq.xyz",
        tel: "+90 537 675 0491",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/zurayq",
                icon: Github,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/zurayq/",
                icon: Linkedin,
            },
        ],
    },
    education: [
        {
            school: "Kocaeli University",
            degree: "BSc in Computer Engineering",
            start: "2023",
            end: "2028 (Expected)",
        },
    ],
    work: [
        {
            company: "TAISAT Teknofest Team",
            link: "",
            badges: [],
            title: "Embedded Systems Team Contributor",
            logo: "",
            start: "Mar 2025",
            end: "Aug 2025",
            description:
                "Contributed to designing power regulation circuits for an autonomous vehicle project. Assisted with PCB layout tasks using Altium Designer.",
        },
        {
            company: "English Teacher",
            link: "",
            badges: ["Freelance"],
            title: "Private Institute Instructor",
            logo: "",
            start: "Dec 2023",
            end: "Present",
            description:
                "Delivered English language instruction to diverse student groups across different private institutes. Adapted teaching strategies to different curricula and student levels. Strengthened communication and public speaking skills.",
        },
        {
            company: "Lybotics Asteroids Robotics Team",
            link: "",
            badges: [],
            title: "Team Leader and Mentor",
            logo: "",
            start: "Jul 2022",
            end: "Aug 2023",
            description:
                "Led and mentored a robotics team during the FIRST Tech Challenge season. Supported mechanical design decisions and technical problem solving. Managed team planning, task distribution, and competition preparation.",
        },
        {
            company: "Libyan Information Technology Organization",
            link: "",
            badges: ["Volunteer"],
            title: "Volunteer, National Tech Day",
            logo: "",
            start: "2021",
            end: "2021",
            description:
                "Supported the organization of Libya’s first National Tech Day event. Helped coordinate participants and technical arrangements.",
        },
    ],
    skills: [
        "C",
        "C#",
        "Java",
        "JavaScript",
        "HTML",
        "WPF",
        ".NET",
        "SDL3",
        "Git",
        "GitHub",
        "Altium Designer",
        "Object Oriented Programming",
        "Graph Theory",
        "Data Structures",
        "Embedded Systems"
    ],
    languages: [
        { name: "Arabic", level: "Advanced" },
        { name: "English", level: "Advanced" },
        { name: "Turkish", level: "Advanced" },
        { name: "Italian", level: "Intermediate" }
    ]
} as const;
