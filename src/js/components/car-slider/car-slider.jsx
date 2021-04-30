import React, {Fragment} from 'react';

const CarSlider = () => {
  return <Fragment>
    <div className="car-card__slider slider">
      <ul className="slider__list">
        <li className="slider__item">
          <img className="slider__image" src="./img/content/desktop_slide_1.jpg" width="600" height="375" alt="Фото автомобиля"></img>
        </li>
        <li className="slider__item">
          <img className="slider__image" src="./img/content/desktop_slide_2.jpg" width="600" height="375" alt="Фото автомобиля"></img>
        </li>
        <li className="slider__item">
          <img className="slider__image" src="./img/content/desktop_slide_3.jpg" width="600" height="375" alt="Фото автомобиля"></img>
        </li>
      </ul>
      <div className="slider__controls">
        <button type="button" className="slider__arrow-icon">
          <svg className="slider__arrow-icon-left">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
        <ul className="slider__img-list">
          <li className="slider__img-item">
            <img className="slider__img" src="./img/content/desktop_slide_1_min.jpg" width="128" height="80" alt="Мини фото автомобиля"></img>
          </li>
          <li className="slider__img-item">
            <img className="slider__img" src="./img/content/desktop_slide_2_min.jpg" width="128" height="80" alt="Мини фото автомобиля"></img>
          </li>
          <li className="slider__img-item">
            <img className="slider__img" src="./img/content/desktop_slide_3_min.jpg" width="128" height="80" alt="Мини фото автомобиля"></img>
          </li>
        </ul>
        <button type="button" className="slider__arrow-icon">
          <svg className="slider__arrow-icon-right">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
      </div>
    </div>
  </Fragment>;
};

export default CarSlider;
