import { useState } from 'react'
import './index.css'
import './home.scss'; /* Pour importer les fichiers Sass!! */

function home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="header">
        <div className="container1">
            <div className="name">Justine Leulier</div>
            <div className="navbar">
                <ul>
                    <a href="#home" className="home"><li className="home">HOME</li></a>
                    <a href="#about"><li className="about">ABOUT</li></a>
                    <a href="#project"><li className="project">PROJECT</li></a>
                    <a href="#contact"><li className="contact">CONTACT</li></a>
                </ul>
            </div>
        </div>
    </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default home
