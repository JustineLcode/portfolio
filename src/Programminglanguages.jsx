import { useEffect } from 'react';
import './styles.scss'
import './_programminglanguages.scss'; /* Pour importer les fichiers Sass!! */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Programminglanguages() {
    useEffect(() => {
    new Swiper('.swiper-frontend', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-frontend .swiper-button-next',
            prevEl: '.swiper-frontend .swiper-button-prev',
        },
        loop: true,
        slidesPerView: 4, 
        spaceBetween: 10, 
    });

    new Swiper('.swiper-backend', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-backend .swiper-button-next',
            prevEl: '.swiper-backend .swiper-button-prev',
        },
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
    });
}, []);
return (
    <>
        <div className="container" id='programminglanguages'>
            <div className="blocprogramminglanguages">
                <h1><span>Programming Languages</span>!</h1>
                <p>FRONTEND</p> 
            </div>
            <div className="swiper-frontend swiper">
                <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Git Hub"/>
                            </div>    
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" alt="JSON" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="SASS" />
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="REACT" />
                            </div>
                </div>
                            <button className="swiper-button-prev"></button>
                            <button className="swiper-button-next"></button>
            </div>
                    
            <div className="blocprogramminglanguages">
                <p>BACKEND</p>
            </div>
            <div className="swiper-backend swiper">
                <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" alt="Mongoose"/>
                            </div>
                </div>
                            <button className="swiper-button-prev"></button>
                            <button className="swiper-button-next"></button>
            </div> 
        </div>
    </>
)
}

export default Programminglanguages
