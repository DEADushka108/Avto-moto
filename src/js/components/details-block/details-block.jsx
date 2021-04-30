import React from 'react';

const DetailsBlock = () => {
  return <ul className="car-card__details details">
    <li className="details__item">
      <p className="details__name">Трансмиссия</p>
      <p className="details__value">Роботизированная</p>
    </li>
    <li className="details__item">
      <p className="details__name">Мощность двигателя, л.с.</p>
      <p className="details__value">249</p>
    </li>
    <li className="details__item">
      <p className="details__name">Тип двигателя</p>
      <p className="details__value">Бензиновый</p>
    </li>
    <li className="details__item">
      <p className="details__name">Привод</p>
      <p className="details__value">Полный</p>
    </li>
    <li className="details__item">
      <p className="details__name">Объем двигателя, л.</p>
      <p className="details__value">2.4</p>
    </li>
    <li className="details__item">
      <p className="details__name">Макс. крутящий момент</p>
      <p className="details__value">370/4500</p>
    </li>
    <li className="details__item">
      <p className="details__name">Количество цилиндров</p>
      <p className="details__value">4</p>
    </li>
  </ul>;
};

export default DetailsBlock;
