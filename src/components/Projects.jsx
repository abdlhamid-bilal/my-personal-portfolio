import { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import { motion, AnimatePresence } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function Projects() {


    const [projName, setProjName] = useState(null);

    const closePreview = () => setProjName(null);

    useEffect(() => {
        if (projName) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [projName]);

    const projectsData = {
        "Hype": {
            link: "https://github.com/Orivex/Hype",
            imgPath: "/assets/hype.png",
            description: "Post polls and the hype.",
            purpose: "I wanted to make a real-world full-stack application. Backend, frontend and database.",
            tech: ["React", "Android", "Firebase", "Expo"]
        },
        "AmbitiousStudent": {
            link: "https://ambitious-student.com",
            imgPath: "/assets/ambitiousstudent.png",
            description: "View top internships and upcoming hackathons before everyone else",
            purpose: "It is very efficient to have everything at one place and to get notified when new oppurtunites occur",
            tech: ["n8n", "Antigravity", "PostgreSQL"]
        },
        "ExamAI": {
            link: "https://exam-ai-2026.base44.app/",
            //imgPath: "/assets/examai.png",
            description: "Upload study material and exams to generate new exams that fit your needs. You can also correct exams and generate flashcards. Everything based on you personal knowledge base!",
            purpose: "Practicing with past exams is the best exam preparation. But sometimes, you can't get enough of them...",
            tech: ["Base44"]
        },
        "GraphFun": {
            link: "https://graphfun.abdlhamid-bilal.de/",
            imgPath: "/assets/graphfun.png",
            description: "Build graphs and try the Dijkstra algorithm.",
            purpose: "Learning to use Javascript and the Phaser Engine.",
            tech: ["HTML5", "CSS3", "JavaScript", "Phaser"]
        },
        "Quotator": {
            link: "https://github.com/Orivex/Quotator",
            imgPath: "/assets/quotator.png",
            description: "Save and manage your favourite quotes, so you never forget them.",
            purpose: "Learn React Native to develop android app. A great starter for my 'Hype' app.",
            tech: ["React", "Android", "Expo"]
        },
        "Throw": {
            link: "https://blacklight7.itch.io/throw",
            imgPath: "/assets/throw.png",
            description: "Throw your character through the map and escape.",
            purpose: "I don't know. I just had this cool idea back then. It was fun to develop.",
            tech: ["Unity", "C#", "Krita"]
        },
        "Roby": {
            link: "https://blacklight7.itch.io/roby",
            imgPath: "/assets/roby.png",
            description: "You play as a robot to solve cool interactive puzzles. Command line included!",
            purpose: "I submitted this project for the German games competition 'GamesTalente' in 2022. I actually got in the Top 50 with this.",
            tech: ["Unity", "C#", "Krita"]
        },
        "You see me rollin'": {
            link: "https://blacklight7.itch.io/you-see-me-rollin",
            imgPath: "/assets/rollin.png",
            description: "You see me rollin', they hatin'.... Cool tycoon game.",
            purpose: "I don't know. I just had this cool idea back then. It was fun to develop.",
            tech: ["Unity", "C#", "Krita"]
        },
        "Glowy": {
            link: "https://blacklight7.itch.io/glowy",
            imgPath: "/assets/glowy.png",
            description: "Top-Down 2D shooter. You have to protect your heart. Cool perks and powers.",
            purpose: "I don't know. I just had this cool idea back then. It was fun to develop.",
            tech: ["Unity", "C#", "Krita"]
        },
        "Bigger and bigger": {
            link: "https://blacklight7.itch.io/bigger-and-bigger",
            imgPath: "/assets/bigger.png",
            description: "You play as as snowball, who has to dodge the trees.",
            purpose: "Made in one week for the Weekly Game Jam.",
            tech: ["Unity", "C#", "Blender"]
        },
        "IceFire": {
            link: "https://blacklight7.itch.io/icefire",
            imgPath: "/assets/icefire.png",
            description: "2D Jumper with obstacles. I love the flower designs.",
            purpose: "I don't know. I just had this cool idea back then. It was fun to develop.",
            tech: ["Unity", "C#", "Krita"]
        },
        "Machine Learning": {
            link: "https://github.com/Orivex/Machine-Learning",
            description: "I started learning core concepts of Machine Learning at the begining of 2025. It's actually very interesting.",
            purpose: "Learn something new",
            tech: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Matplotlib", "scikit-learn"]
        },
        "Algorithms and Datastructures": {
            link: "https://github.com/Orivex/Algorithms-And-Datastructures",
            description: "I learned about maaany concepts. Graph theory, Dynamic programming, Greedy algorithms, ....",
            purpose: "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
            tech: ["Java", "C++"]
        },
        "Competetive Programming": {
            link: "https://github.com/Orivex/CompetetiveProgramming",
            description: "Grinding CP problems on CSES and USACO Guide",
            purpose: "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
            tech: ["Java", "C++"]
        },
        "TextCompleter": {
            link: "https://github.com/Orivex/TextCompleter",
            description: "Autocomplete repetitive texts like emails, names and addresses",
            purpose: "Project for Summer of Making. Also solving my own annoying problem.",
            tech: ["Python"]
        },
        "my-personal-portfolio": {
            link: "https://portfolio.abdlhamid-bilal.de/",
            description: "My personal portfolio. Nothing more and nothing else.",
            purpose: "Get some more shells for Summer of Making. I didn't have a portfolio. So, why not?",
            tech: ["HTML5", "CSS3", "JavaScript", "React", "ViteJs"]
        }
    };

    const previewBox = () => {
        const project = projectsData[projName];
        if (!project) return null;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0 }}>{projName}</h2>
                    <button className={styles.closePreviewBtn} onClick={closePreview}>✕</button>
                </div>

                <div style={{ textAlign: 'left', flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
                    <h3>Description</h3>
                    <TypeWriter
                        options={{
                            strings: project.description,
                            autoStart: true,
                            loop: false,
                            delay: 20,
                            cursor: ""
                        }}
                    />
                    <h3>Why?</h3>
                    <TypeWriter
                        options={{
                            strings: project.purpose,
                            autoStart: true,
                            loop: false,
                            delay: 20,
                            cursor: ""
                        }}
                    />
                    <h3>Tech stack</h3>
                    <ul style={{ marginTop: '10px', marginBottom: '1.5rem', paddingLeft: '20px' }}>
                        {project.tech.map((techItem, idx) => (
                            <motion.li key={techItem + projName}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                                {techItem}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <button
                        className={styles.viewProjectBtn}
                        onClick={() => { window.open(project.link); }}
                    >
                        View Project
                    </button>
                </div>
            </div>
        )
    }

    const buttonComponent = (name) => {
        const project = projectsData[name];
        if (!project) return null;

        return (
            <motion.button className={styles.projectContainer}
                onClick={() => { setProjName(name); }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                {project.imgPath ? (
                    <img src={project.imgPath} alt={name} />
                ) : (
                    <p>{name}</p>
                )}
            </motion.button>
        )
    }


    return (
        <>

            <div className={styles.container}>

                <h3>Websites</h3>
                <div className={styles.projectsContainer}>
                    {buttonComponent("GraphFun")}
                    {buttonComponent("AmbitiousStudent")}
                    {buttonComponent("ExamAI")}
                </div>

                <h3>Mobile apps</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("Hype")}
                    {buttonComponent("Quotator")}
                </div>

                <h3>Summer of Making 2025</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("Hype")}
                    {buttonComponent("TextCompleter")}
                    {buttonComponent("my-personal-portfolio")}
                </div>

                <h3>Learning stuff</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("Machine Learning")}
                    {buttonComponent("Algorithms and Datastructures")}
                    {buttonComponent("Competetive Programming")}
                </div>

                <h3>Games</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("Throw")}
                    {buttonComponent("Roby")}
                    {buttonComponent("You see me rollin'")}
                    {buttonComponent("Glowy")}
                    {buttonComponent("Bigger and bigger")}
                    {buttonComponent("IceFire")}
                </div>

            </div>

            <AnimatePresence>
                {projName != null && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePreview}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, width: '100vw', height: '100vh',
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 1999
                            }}
                        />
                        <motion.div className={styles.projectPreview}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.3 }}
                        >
                            {previewBox()}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    )
}

export default Projects