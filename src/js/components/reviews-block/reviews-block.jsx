import React from 'react';
import PropTypes from 'prop-types';
import {reviewsDetails} from '../../types/types';

const ReviewsBlock = (props) => {
  const {reviews} = props;
  return <ul className="car-card__reviews-list">
    {reviews.map((review, index) => {
      const {author, dignity, limitations, comment} = review;
      return <li key={index} className="car-card__reviews-item">
        <article className="car-card__reviews-article review">
          <h3 className="review__author">{author}</h3>
          <ul className="review__list">
            <li className="review__item">
              <p className="review__title">
                <svg className="review__icon">
                  <use xlinkHref="#plus"></use>
                </svg>
                Достоинства
              </p>
              <p className="review__text">
                {dignity}
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
                {limitations}
              </p>
            </li>
            <li className="review__item">
              <p className="review__title">
                Комментарий
              </p>
              <p className="review__text">
                {comment}
              </p>
            </li>
          </ul>
        </article>
      </li>;
    })}
  </ul>;
};

ReviewsBlock.propTypes = {
  reviews: PropTypes.arrayOf(reviewsDetails),
};

export default ReviewsBlock;
