import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {reviewsDetails} from '../../types/types';
import moment from 'moment';
import Modal from '../modal/modal';
import withName from '../../hocs/with-name/with-name';
import withRating from '../../hocs/with-rating/with-rating';
import withText from '../../hocs/with-text/with-text';

const reviewStars = [1, 2, 3, 4, 5];

const ModalWrapped = withName(withRating(withText(Modal)));

const ReviewsBlock = (props) => {
  const {reviews, isActive, onActiveModalChange} = props;
  return <Fragment>
    <ul className="car-card__reviews-list">
      {reviews.map((review, index) => {
        const {author, dignity, limitations, comment, rating, date} = review;
        return <li key={index} className="car-card__reviews-item">
          <blockquote className="car-card__reviews-article review">
            <h3 className="review__author">{author}</h3>
            <ul className="review__list">
              <li className="review__item">
                <p className="review__title">
                  <svg className="review__icon" width="8" height="8" viewBox="0 0 8 8">
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
                  <svg className="review__icon review__icon--minus" width="7" height="2" viewBox="0 0 7 2" >
                    <use xlinkHref="#minus"></use>
                  </svg>
                  Недостатки
                </p>
                <p className="review__text">
                  {limitations}
                </p>
              </li>
              <li className="review__item">
                <p className="review__comment-title">
                  Комментарий
                </p>
                <p className="review__text-comment">
                  {comment}
                </p>
              </li>
            </ul>
            <div className="review__rating">
              <ul className="review__stars-list">
                {reviewStars.map((star, i) => {
                  return <li key={i} className={`review__stars-item ${(star <= rating) ? `review__stars-item--fill` : ``}`}>
                    <svg className="review__star-icon" width="17" height="16" viewBox="0 0 17 16">
                      <use xlinkHref="#star"></use>
                    </svg>
                  </li>;
                })}
              </ul>
              <p className="review__rating-advice">Советует</p>
            </div>
            <div className="review__reply">
              <p className="review__date">{moment(date).locale(`ru`).fromNow()}</p>
              <a className="review__button-reply">Ответить</a>
            </div>
          </blockquote>
        </li>;
      })}
    </ul>
    <button className="car-card__review-button" type="button" onClick={(evt) => {
      evt.preventDefault();
      onActiveModalChange();
    }}>
      Оставить отзыв
    </button>
    {isActive && <ModalWrapped onActiveModalChange={onActiveModalChange}/>}
  </Fragment>;
};

ReviewsBlock.propTypes = {
  reviews: PropTypes.arrayOf(reviewsDetails),
  isActive: PropTypes.bool.isRequired,
  onActiveModalChange: PropTypes.func.isRequired,
};

export default ReviewsBlock;
