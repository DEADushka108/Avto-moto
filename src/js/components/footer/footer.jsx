import React, {Fragment} from 'react';

const Footer = () => {
  return <Fragment>
    <footer className="page-footer">
      <nav className="page-header__main-nav main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Корпоративным клиентам</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Клиентам</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Аренда авто</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Каршеринг</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Как продать авто</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Trade-in</span>
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#" className="main-nav__link">
              <span className="main-nav__text">Test-drive</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </Fragment>;
};

export default Footer;
