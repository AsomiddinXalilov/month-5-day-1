import './header.css'

function Header() {
    return(
        <section className='header'>
            <div className="header__container">
                <img src="" alt="" className="header__img" />
                <ul className="header__list">
                    <li className="header__item"><a class="header__item--link" href="#">Inicio</a></li>
                    <li className="header__item"><a class="header__item--link" href="#">Acerca de mi</a></li>
                    <li className="header__item"><a class="header__item--link" href="#">Proyectos</a></li>
                </ul>

                <button class="header__last--btn">Contáctame</button>
            </div>
        </section>
    )
}

export {Header}