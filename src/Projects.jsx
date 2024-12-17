
import './index.css'
import './projects.scss'; /* Pour importer les fichiers Sass!! */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Projects() {
    const swiper = new Swiper('.swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        
    });

    
return (
    <>
    <section className="hero" id='hero'>
        <div className="container">
            <div className="aboutme">
                <h1>MY <span>PROJECTS</span>!</h1>
                    <h2>FRONTEND</h2>
                        <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="image1.jpg" alt="Image 1"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="image1.jpg" alt="Image 2"/>
                            </div>
                        </div>
                        <button className="swiper-button-prev"></button>
                        <button className="swiper-button-next"></button>
                        </div>
                    <h2>BACKEND</h2>
                        <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="image1.jpg" alt="Image 1"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="image2.jpg" alt="Image 2"/>
                            </div>
                        </div>
                        <button className="swiper-button-prev"></button>
                        <button className="swiper-button-next"></button>
                        </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Projects
