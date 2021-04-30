import React from 'react';

const ReviewsBlock = () => {
  return <ul className="car-card__reviews-list">
    <li className="car-card__reviews-item">
      <article className="car-card__reviews-article review">
        <h3 className="review__author">Борис Иванов</h3>
        <ul className="review__list">
          <li className="review__item">
            <p className="review__title">
              <svg className="review__icon">
                <use xlinkHref="#plus"></use>
              </svg>
              Достоинства
            </p>
            <p className="review__text">
            мощность, внешний вид
            </p>
          </li>
          <li className="review__item">
            <p className="review__title">
              <svg className="review__icon">
                <use xlinkHref="#minus"></use>
              </svg>
              Недостатки
            </p>
            <p className="review__text">
            Слабые тормозные колодки (пришлось заменить)
            </p>
          </li>
          <li className="review__item">
            <p className="review__title">
              Комментарий
            </p>
            <p className="review__text">
            Взяли по трейд-ин, на выгодных условиях у дилера.
            Стильная внешка и крут по базовым характеристикам.
            Не думал, что пересяду на китайский автопром, но сейчас
            гоняю и понимаю, что полностью доволен.
            </p>
          </li>
        </ul>
      </article>
    </li>
    <li className="reviews__item">
    </li>
  </ul>;
};

export default ReviewsBlock;
