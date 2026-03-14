import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import { motion, AnimatePresence } from 'motion/react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import TypeWriter from 'typewriter-effect'
import Contact from './components/Contact';

const songPaths = [
  "/assets/sounds/songs/song1.mp3",
  "/assets/sounds/songs/song2.mp3",
  "/assets/sounds/songs/song3.mp3",
  "/assets/sounds/songs/song4.mp3",
  "/assets/sounds/songs/song5.mp3",
  "/assets/sounds/songs/song6.mp3",
  "/assets/sounds/songs/song7.mp3",
  "/assets/sounds/songs/song8.mp3",
  "/assets/sounds/songs/song9.mp3",
  "/assets/sounds/songs/song10.mp3",
  "/assets/sounds/songs/song11.mp3",
  "/assets/sounds/songs/song12.mp3",
  "/assets/sounds/songs/song13.mp3",
];

let clickAudio = new Audio("/assets/sounds/click.mp3");
let songAudio = new Audio();
let currentSong = -1;

function App() {
  const [isMusic, setIsMusic] = useState(false);

  // Edit this to change what you are currently doing
  const CURRENT_STATUS = "Building n8n workflows 🚀";

  const toggleMusic = () => {
    clickAudio.play();
    if (isMusic) {
      setIsMusic(false);
      songAudio.pause();
    } else {
      if (currentSong === -1) {
        changeMusic();
      }
      setIsMusic(true);
      songAudio.play();
    }
  }

  const changeMusic = () => {
    clickAudio.play();
    songAudio.pause();
    songAudio.currentTime = 0;
    let r = Math.floor(Math.random() * songPaths.length);
    if (r === currentSong) {
      r = r === songPaths.length - 1 ? r - 1 : r + 1;
    }

    currentSong = r;
    songAudio.src = songPaths[currentSong];
    songAudio.volume = 0.1;
    songAudio.loop = true;
    songAudio.play();
  }

  const scrollToSection = (id) => {
    clickAudio.play();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <nav className='navbar'>
        <MainButton label={"Home"} onClick={() => scrollToSection('home')} />
        <MainButton label={"Projects"} onClick={() => scrollToSection('projects')} />
        <MainButton label={"Contact"} onClick={() => scrollToSection('contact')} />
      </nav>

      <section id="home" className='heroSection'>
        <motion.img
          src='/assets/photo.jpeg'
          className="profileImage"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        />

        <motion.h1
          className="heroTitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypeWriter
            options={{
              strings: "Hi, I'm Abdlhamid Bilal",
              autoStart: true,
              loop: false,
              cursor: "|",
              delay: 80,
            }}
          />
        </motion.h1>

        {/* Current status section visible on open */}
        <motion.div
          className='statusBubble'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="statusDot" />
          <div className="statusContent">
            Currently: <span className="highlight">{CURRENT_STATUS}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <AboutMe />
        </motion.div>
      </section>

      <section id="projects" className='section'>
        <Projects />
      </section>

      <section id="contact" className='section'>
        <Contact />
      </section>

      <div className='musicControls'>
        <motion.button
          onClick={toggleMusic}
          className='musicBtn'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isMusic ? "Pause Music" : "Play Music"}
        >
          <img src={isMusic ? '/assets/pause.png' : '/assets/play.png'} alt="play/pause" />
        </motion.button>

        <AnimatePresence>
          {isMusic && (
            <motion.button
              onClick={changeMusic}
              className='musicBtn'
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
              title="Change Song"
            >
              <img src={'/assets/change.png'} alt="change song" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.img
          animate={isMusic ? { rotate: 360 } : { rotate: 0 }}
          transition={isMusic ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
          className='musicNote'
          src='/assets/music_note.png'
          alt="music note playing animation"
        />
      </div>
    </>
  )
}

export default App


