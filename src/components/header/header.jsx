import './header.css'
import bgImg from '../../assets/img/banner.png'
import download from '../../assets/img/download.png'
import right from '../../assets/img/arrow-right.png'
import imagePersolnal from '../../assets/img/Imagenpersonal.png'
import before from '../../assets/img/user-add.png'
import before2 from '../../assets/img/template.png'
import before3 from '../../assets/img/device-mobile.png'
import img1 from '../../assets/img/imagen_deportada_interactiva.png'
import img2 from '../../assets/img/imagen-deportada_interactiva.png'
import img3 from '../../assets/img/imagendeportada_interactiva.png'
import logo1 from '../../assets/img/Behance.png'
import logo2 from '../../assets/img/Linkend.png'
import logo3 from '../../assets/img/Figma.png'



function Header() {
    return(
        <div className="container">
            <section className='header'>
                <div className="header__container">
                    <a class="header__logo--img" href="#">Yunix</a>
                    <ul className="header__list">
                        <li className="header__item"><a class="header__item--link" href="#">Inicio</a></li>
                        <li className="header__item"><a class="header__item--link" href="#">Acerca de mi</a></li>
                        <li className="header__item"><a class="header__item--link" href="#">Proyectos</a></li>
                    </ul>

                    <button class="header__last--btn">Contáctame</button>
                </div>

                <div className="headere">
                    <img src={bgImg} style={{width: "100%", height: "100%"}} alt="bg img"/>
                </div>

                <div className="wrapp">
                    <div className="wrapp__box">
                        <h1 class="wrapp__head">
                        Soy <span className="wrapp__span--yellow">Yusting Mora </span>
                        Diseñador UI/UX
                        </h1>
                        <p className="wrapp__text">
                        Este es mi portafolio y CV hecho en Figma, acá puedes ver mi estilo de prototipado a la     hora de diseñar interfaces.
                        ¡Espero te guste!
                        </p>
                        <div className="wrapp__links">
                            <button className="wrapp__button">Ver proyectos</button>
                            <button className="wrapp__button--link"><img src={download} alt="logo download" className="wrapp__img" /> Descargar CV</button>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="wrapper__box">
                        <img src={imagePersolnal} alt="" />
                        <div className="wrapper__left">
                            <h2 className="wrapper__head">Acerca de mi</h2>
                            <p className="wrapper__text">
                            Hola! mi nombre es Yusting (Yuxin para los amigos) y tengo una gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
                            En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop eIllustrator que me ayudan en el flujo de trabajo para la producción deinterfaces de usuario.
                            </p>

                            <button className="wrapper__btn">
                            Mas acerca de mi <img src={right} alt="logo" className="wrapper__img" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="blog">
                    <h2 className="blog__heading">Mis habilidades</h2>
                    <ul className="blog__list">
                        <li className="blog__list--item">
                            <img src={before3} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                                Responsive design
                            </h3>
                            <p className="blog__text">
                                Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca   de como implementarlos de manera efectiva en cualquier proyecto.
                            </p>
                        </li>

                        <li className="blog__list--item">
                            <img src={before2} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                            Sistema de diseño
                            </h3>
                            <p className="blog__text">
                            Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.
                            </p>
                        </li>

                        <li className="blog__list--item">
                            <img src={before} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                            Cooworking
                            </h3>
                            <p className="blog__text">
                            Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.
                            </p>
                        </li>
                    </ul>
                    <button class="blog__btn">Ver más de mis skills
                    <img src={right} alt="next-img" class="blog__down--img" />
                    </button>
                </div>

                <div className="foot">
                    <h2 className="foot__heading">
                        Algunos de mis proyectos
                    </h2>
                    <img src={img1} alt="img" className="foot__img" />
                    <img src={img2} alt="img" className="foot__img" />
                    <img src={img3} alt="img" className="foot__img" />

                    <button class="foot__btn">Ver más de mis skills
                    <img src={right} alt="next-img" class="foot__down--img" />
                    </button>
                </div>

                <div className="footer">
                    <div className="footer__container">
                        <div><a href="#" className="footer__link">
                        Yuxin
                        </a></div>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__item-link--active">Inicio</a>
                                <a href="#" className="footer__item-link">Acerca de mi</a>
                                <a href="#" className="footer__item-link">Proyectos</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__item-link--active">Contáctame</a>
                                <a href="#" className="footer__item-link">Correo</a>
                                <a href="#" className="footer__item-link">LinkedIn</a>
                            </li>

                            <li className="footer__item">
                                <a href="#" className="footer__item-link--active">Social</a>
                                <div className="div">
                                <a href="#">
                                    <img src={logo1} alt="" />
                                </a>
                                <a href="#">
                                    <img src={logo2} alt="" />
                                </a>
                                <a href="#">
                                    <img src={logo3} alt="" />
                                </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p className="footerfoot__text">
                    © 2021 Yuxin
                    </p>
                </div>

            </section>
        </div>
    )
}

export {Header}
