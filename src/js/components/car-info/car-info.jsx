import React, {Fragment} from 'react';

const CarInfo = () => {
  return <Fragment>
    <div className="car-card__car-info car-info">
      <h2 className="car-info__title">Марпех 11</h2>
      <ul className="car-info__list">
        <li className="car-info__item">
          <svg width="22" height="22">
            <use xlinkHref="#gas"></use>
          </svg>
          <p className="car-info__text">
            бензин
          </p>
        </li>
        <li className="car-info__item">
          <svg width="23" height="22">
            <use xlinkHref="#transmission"></use>
          </svg>
          <p className="car-info__text">
            механика
          </p>
        </li>
        <li className="car-info__item">
          <svg width="30" height="21">
            <use xlinkHref="#horse-power"></use>
          </svg>
          <p className="car-info__text">
            102 л.с.
          </p>
        </li>
        <li className="car-info__item">
          <svg width="30" height="22">
            <use xlinkHref="#capacity"></use>
          </svg>
          <p className="car-info__text">
            1.4 л.
          </p>
        </li>
      </ul>
      <p className="car-info__price">
        2 300 000 &#8381;
        <span className="car-info__old-price"> 2 400 000 &#8381;</span>
      </p>
      <a className="car-info__button car-info__button--buy">
        Оставить заявку
      </a>
      <a className="car-info__button car-info__button--credit">
        В кредит от 11 000 &#8381;
      </a>
    </div>
  </Fragment>;
};

export default CarInfo;
