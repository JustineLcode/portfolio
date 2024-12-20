import { useState } from 'react'
import './styles.scss'; /* Pour importer les fichiers Sass!! */
import './_home.scss'
function Home() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
    <section className="header" id='header'>
        <div className="container">
            <div className="name">Justine Leulier</div>
            <div className="navbar">
                <ul>
                    <a href="#hero" className="home"><li className="home">HOME</li></a>
                    <a href="#about"><li className="about">ABOUT</li></a>
                    <a href="#projects"><li className="project">PROJECT</li></a>
                    <a href="#contact"><li className="contact">CONTACT</li></a>
                </ul>
            </div>
        </div>
    </section>
    <section className="hero" id='hero'>
        <div className="container">
            <div className="blocwelcome">
                <h1><span>Welcome</span>!</h1>
                <h2>Here is Justine's portfolio</h2>
                <p> I am currently seeking a 2-month internship or job opportunity as a Web Developer for the months of April and May 2025. I am passionate about web technologies and eager to apply my skills in a professional setting while contributing to your team's success.</p>
                <a href="#about"className="know"> Know more </a>
            </div>
            <div className="photo"><img src="portfolio/imageju.jpg" alt="photo"/></div>
        </div>
    </section>
    </>
  )
}

export default Home
