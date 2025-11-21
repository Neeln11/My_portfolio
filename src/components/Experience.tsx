"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import styles from './Experience.module.css';

const experience = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading the frontend team in building scalable web applications using Next.js and React. Improved site performance by 40%."
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Creative Agency",
        period: "2021 - 2023",
        description: "Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect UIs."
    },
    {
        id: 3,
        role: "Web Development Intern",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description: "Assisted in the development of the company's main product. Gained hands-on experience with modern web technologies."
    }
];

const Experience = () => {
    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.heading}
                >
                    Work Experience
                </motion.h2>

                <div className={styles.timeline}>
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={styles.item}
                        >
                            <div className={styles.marker}>
                                <Briefcase size={20} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.period}>{item.period}</span>
                                <h3 className={styles.role}>{item.role}</h3>
                                <h4 className={styles.company}>{item.company}</h4>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
