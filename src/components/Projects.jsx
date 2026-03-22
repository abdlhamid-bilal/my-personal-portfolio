import { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import { motion, AnimatePresence } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function Projects() {

    let onHoverAudio = new Audio("/assets/sounds/click4.mp3");
    let onClickAudio = new Audio("/assets/sounds/click3.mp3");

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

    const buttonComponent = (link, imgPath, text, pName) => {
        const projectName = pName || text;
        return (
            <motion.button className={styles.projectContainer}
                onClick={() => { setProjName(projectName); onClickAudio.play() }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => { onHoverAudio.play() }}
            >
                {imgPath != null && (
                    <img src={imgPath} alt={projectName} />
                )}
                {text != null && (
                    <p>{text}</p>
                )}
            </motion.button>
        )
    }

    const projectLinks = {
        "Hype": "https://github.com/Orivex/Hype",
        "GraphFun": "https://graphfun.abdlhamid-bilal.de/",
        "Quotator": "https://github.com/Orivex/Quotator",
        "Throw": "https://blacklight7.itch.io/throw",
        "Roby": "https://blacklight7.itch.io/roby",
        "You see me rollin'": "https://blacklight7.itch.io/you-see-me-rollin",
        "Glowy": "https://blacklight7.itch.io/glowy",
        "Bigger and bigger": "https://blacklight7.itch.io/bigger-and-bigger",
        "IceFire": "https://blacklight7.itch.io/icefire",
        "Machine Learning": "https://github.com/Orivex/Machine-Learning",
        "Algorithms and Datastructures": "https://github.com/Orivex/Algorithms-And-Datastructures",
        "Competetive Programming": "https://github.com/Orivex/CompetetiveProgramming",
        "TextCompleter": "https://github.com/Orivex/TextCompleter",
        "my-personal-portfolio": "https://portfolio.abdlhamid-bilal.de/"
    };

    const previewBox = () => {

        const structure = (description, purpose, icons) => {
            const link = projectLinks[projName];
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
                                strings: description,
                                autoStart: true,
                                loop: false,
                                delay: 20,
                                cursor: ""
                            }}
                        />
                        <h3>Purpose</h3>
                        <TypeWriter
                            options={{
                                strings: purpose,
                                autoStart: true,
                                loop: false,
                                delay: 20,
                                cursor: ""
                            }}
                        />
                        <h3>Tech stack</h3>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {icons.map((icon, idx) => (
                                <motion.img key={icon + projName} src={icon}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    style={{ width: 40, height: 40, objectFit: 'contain' }}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <button
                            className={styles.viewProjectBtn}
                            onClick={() => { window.open(link); onClickAudio.play() }}
                        >
                            View Project
                        </button>
                    </div>
                </div>
            )
        }

        switch (projName) {
            case "Hype":
                return structure(
                    "Post polls and the hype.",
                    "I wanted to make a real-world full-stack application. Backend, frontend and database.",
                    ["/assets/tech_icons/React.png", "/assets/tech_icons/Android.png", "/assets/tech_icons/Firebase.png", "/assets/tech_icons/Expo.png"]
                );
            case "GraphFun":
                return structure(
                    "Build graphs and try the Dijkstra algorithm.",
                    "Learning to use Javascript and the Phaser Engine.",
                    ["/assets/tech_icons/HTML5.png", "/assets/tech_icons/CSS3.png", "/assets/tech_icons/JavaScript.png", "/assets/tech_icons/Phaser.png"]
                );
            case "Quotator":
                return structure(
                    "Save and manage your favourite quotes, so you never forget them. You also get reminded of them!",
                    "Learn React Native to develop android app. A great starter for my 'Hype' app.",
                    ["/assets/tech_icons/React.png", "/assets/tech_icons/Android.png", "/assets/tech_icons/Expo.png"]
                );
            case "Throw":
                return structure(
                    "Throw your character through the map and escape.",
                    "I don't know. I just had this cool idea back then. It was fun to develop.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Krita.png"]
                );
            case "Roby":
                return structure(
                    "You play as a robot to solve cool interactive puzzles. Command line included!",
                    "I submitted this project for the German games competition 'GamesTalente' in 2022. I actually got in the Top 50 with this.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Krita.png"]
                );
            case "You see me rollin'":
                return structure(
                    "You see me rollin', they hatin'.... Cool tycoon game.",
                    "I don't know. I just had this cool idea back then. It was fun to develop.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Krita.png"]
                );
            case "Glowy":
                return structure(
                    "Top-Down 2D shooter. You have to protect your heart. Cool perks and powers.",
                    "I don't know. I just had this cool idea back then. It was fun to develop.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Krita.png"]
                );
            case "Bigger and bigger":
                return structure(
                    "You play as as snowball, who has to dodge the trees.",
                    "Made in one week for the Weekly Game Jam.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Blender.png"]
                );
            case "IceFire":
                return structure(
                    "2D Jumper with obstacles. I love the flower designs.",
                    "I don't know. I just had this cool idea back then. It was fun to develop.",
                    ["/assets/tech_icons/Unity.png", "/assets/tech_icons/CSharp.png", "/assets/tech_icons/Krita.png"]
                );
            case "Machine Learning":
                return structure(
                    "I started learning core concepts of Machine Learning at the begining of 2025. It's actually very interesting.",
                    "Prepare myself for the next world.",
                    ["/assets/tech_icons/Python.png", "./assets/tech_icons/Pandas.png", "/assets/tech_icons/NumPy.png", "/assets/tech_icons/TensorFlow.png", "/assets/tech_icons/PyTorch.png", "/assets/tech_icons/Matplotlib.png", "/assets/tech_icons/scikit-learn.png"]
                );
            case "Algorithms and Datastructures":
                return structure(
                    "I learned about maaany concepts. Graph theory, Dynamic programming, Greedy algorithms, .... This will definetly give me a good start in university.",
                    "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
                    ["/assets/tech_icons/Java.png", "/assets/tech_icons/CPlusPlus.png"]
                );
            case "Competetive Programming":
                return structure(
                    "Grinding CP problems on CSES and USACO Guide. Didn't get far, unfortunately. Too many sweats lol. And very hard, indeed.",
                    "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
                    ["/assets/tech_icons/Java.png", "/assets/tech_icons/CPlusPlus.png"]
                );
            case "TextCompleter":
                return structure(
                    "Autocomplete repetitive texts like emails, names and addresses",
                    "Project for Summer of Making. Also solving my own annoying problem.",
                    ["/assets/tech_icons/Python.png"]
                );
            case "my-personal-portfolio":
                return structure(
                    "My personal portfolio. Nothing more and nothing else.",
                    "Get some more shells for Summer of Making. I didn't have a portfolio. So, why not?",
                    ["/assets/tech_icons/HTML5.png", "/assets/tech_icons/CSS3.png", "/assets/tech_icons/JavaScript.png", "/assets/tech_icons/React.png", "/assets/tech_icons/ViteJs.png"]
                );
            default:
                return null
        }
    }


    return (
        <>

            <div className={styles.container}>
                <h3>My biggest projects</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("", "/assets/lock.png", "Coming soon...")}
                    {buttonComponent("https://github.com/Orivex/Hype", "/assets/hype.png", null, "Hype")}
                    {buttonComponent("https://graphfun.abdlhamid-bilal.de/", "/assets/graphfun.png", null, "GraphFun")}
                    {buttonComponent("https://github.com/Orivex/Quotator", "/assets/quotator.png", null, "Quotator")}
                </div>

                <h3>Projects that I made for "Summer of Making 2025"</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Hype", "/assets/hype.png", null, "Hype")}
                    {buttonComponent("https://github.com/Orivex/TextCompleter", null, "TextCompleter")}
                    {buttonComponent("https://portfolio.abdlhamid-bilal.de/", null, "my-personal-portfolio")}
                </div>

                <h3>Learning stuff</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Machine-Learning", null, "Machine Learning")}
                    {buttonComponent("https://github.com/Orivex/Algorithms-And-Datastructures", null, "Algorithms and Datastructures")}
                    {buttonComponent("https://github.com/Orivex/CompetetiveProgramming", null, "Competetive Programming")}
                </div>

                <h3>Some fun games I made back in the day</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://blacklight7.itch.io/throw", "/assets/throw.png", null, "Throw")}
                    {buttonComponent("https://blacklight7.itch.io/roby", "/assets/roby.png", null, "Roby")}
                    {buttonComponent("https://blacklight7.itch.io/you-see-me-rollin", "/assets/rollin.png", null, "You see me rollin'")}
                    {buttonComponent("https://blacklight7.itch.io/glowy", "/assets/glowy.png", null, "Glowy")}
                    {buttonComponent("https://blacklight7.itch.io/bigger-and-bigger", "/assets/bigger.png", null, "Bigger and bigger")}
                    {buttonComponent("https://blacklight7.itch.io/icefire", "/assets/icefire.png", null, "IceFire")}
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
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