"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import styles from './Education.module.css';

const education = [
    {
        id: 1,
        type: "degree",
        title: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        year: "2019 - 2023",
        description: "Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence."
    }
];

const Education = () => {
    return (
        <section id="education" className={`section ${styles.education}`}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.heading}
                >
                    Education
                </motion.h2>

                <div className={styles.grid}>
                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                {item.type === 'degree' ? <BookOpen size={24} /> : <Award size={24} />}
                            </div>
                            <div className={styles.content}>
                                <span className={styles.year}>{item.year}</span>
                                <h3 className={styles.title}>{item.title}</h3>
                                <h4 className={styles.institution}>{item.institution}</h4>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
