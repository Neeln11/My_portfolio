"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "#"
    },
    {
        id: 2,
        title: "Social Media App",
        description: "A real-time social platform with chat, posts, and notifications.",
        tags: ["React", "Node.js", "Socket.io"],
        link: "#"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js and Vanilla CSS.",
        tags: ["Next.js", "CSS Modules"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.heading}
                >
                    Featured Projects
                </motion.h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={styles.card}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.links}>
                                        <a href="#" className={styles.iconLink}><Github size={20} /></a>
                                        <a href={project.link} className={styles.iconLink}><ExternalLink size={20} /></a>
                                    </div>

                                </div>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
