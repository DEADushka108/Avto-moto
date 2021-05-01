import React, {Fragment} from 'react';
import {carDetails} from '../../types/types';

const CarInfo = (props) => {
  const {carInfo} = props;
  const {model, price, oldPrice, transmission, horsePower, engineType, engineVolume} = carInfo;

  return <Fragment>
    <div className="car-card__car-info car-info">
      <h2 className="car-info__title">{model}</h2>
      <ul className="car-info__list">
        <li className="car-info__item">
          <svg width="22" height="22">
            <use xlinkHref="#gas"></use>
          </svg>
          <p className="car-info__text">
            {engineType}
          </p>
        </li>
        <li className="car-info__item">
          <svg width="23" height="22">
            <use xlinkHref="#transmission"></use>
          </svg>
          <p className="car-info__text">
            {transmission}
          </p>
        </li>
        <li className="car-info__item">
          <svg width="30" height="21">
            <use xlinkHref="#horse-power"></use>
          </svg>
          <p className="car-info__text">
            {horsePower} л.с.
          </p>
        </li>
        <li className="car-info__item">
          <svg width="30" height="22">
            <use xlinkHref="#capacity"></use>
          </svg>
          <p className="car-info__text">
            {engineVolume} л.
          </p>
        </li>
      </ul>
      <p className="car-info__price">
        {price} &#8381;
        <span className="car-info__old-price"> {oldPrice} &#8381;</span>
      </p>
      <p className="car-info__links">
        <a className="car-info__link car-info__link--buy">
          Оставить заявку
        </a>
      </p>
      <p className="car-info__links">
        <a className="car-info__link car-info__link--credit">
          В кредит от 11 000 &#8381;
        </a>
      </p>
    </div>
  </Fragment>;
};

CarInfo.propTypes = {
  carInfo: carDetails,
};

export default CarInfo;
