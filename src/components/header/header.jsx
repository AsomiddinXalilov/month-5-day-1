import './header.css'
import bgImg from '../../assets/img/banner.png'
import download from '../../assets/img/download.png'
import imagePersolnal from '../../assets/img/Imagenpersonal.png'
import before from '../../assets/img/user-add.png'


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
                            Mas acerca de mi <img src={download} alt="logo" className="wrapper__img" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="blog">
                    <h2 className="blog__heading">Mis habilidades</h2>
                    <ul className="blog__list">
                        <li className="blog__list--item">
                            <img src={before} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                                Responsive design
                            </h3>
                            <p className="blog__text">
                                Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca   de como implementarlos de manera efectiva en cualquier proyecto.
                            </p>
                        </li>

                        <li className="blog__list--item">
                            <img src={before} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                                Responsive design
                            </h3>
                            <p className="blog__text">
                                Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca   de como implementarlos de manera efectiva en cualquier proyecto.
                            </p>
                        </li>

                        <li className="blog__list--item">
                            <img src={before} alt="add" className="blog__img-list" />
                            <h3 className="blog__head">
                                Responsive design
                            </h3>
                            <p className="blog__text">
                                Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca   de como implementarlos de manera efectiva en cualquier proyecto.
                            </p>
                        </li>
                    </ul>
                    <button class="blog__btn">Ver más de mis skills
                    <img src={download} alt="next-img" class="blog__down--img" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export {Header}
