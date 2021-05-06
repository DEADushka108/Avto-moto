import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator as ReviewCreator} from '../../store/reviews/reviews';
import {connect} from 'react-redux';
import {randomNumber, setItem} from '../../utils/utils';

const stars = [`5`, `4`, `3`, `2`, `1`];

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEscButtonClose = this.handleEscButtonClose.bind(this);
  }

  handleEscButtonClose(evt) {
    const {onActiveModalChange} = this.props;
    if (evt.keyCode === 27) {
      onActiveModalChange();
    }
  }

  handleSubmit(evt) {
    const {author, rating, comment, dignity, limitations, onSubmit, onActiveModalChange} = this.props;

    evt.preventDefault();

    onSubmit({
      id: randomNumber(),
      author,
      rating: Number(rating),
      comment,
      dignity,
      limitations,
      date: new Date().toUTCString(),
    });

    setItem(`author`, author);
    setItem(`rating`, Number(rating));
    setItem(`comment`, comment);
    setItem(`dignity`, dignity);
    setItem(`limitations`, limitations);
    setItem(`date`, new Date().toUTCString());

    onActiveModalChange();
  }

  render() {
    const {
      onActiveModalChange,
      onRatingChange,
      onNameInput,
      onCommentInput,
      onDignityInput,
      onLimitationsInput,
    } = this.props;

    return <Fragment>
      <section className="modal" onKeyDown={this.handleEscButtonClose}>
        <h2 className="modal__title">Оставить отзыв</h2>
        <form action="#" className="modal-form review-form" onSubmit={this.handleSubmit}>
          <div className="review-form__wrapper">
            <div className="review-form__col">
              <ul className="review-form__left-list">
                <li className="review-form__left-item">
                  <p className="review-form__text">Пожалуйста, заполните поле</p>
                  <input className="review-form__input" id="name" type="text" name="name" placeholder="* Имя" required autoFocus
                    onChange={(evt) => {
                      onNameInput(evt);
                    }}
                  />
                </li>
                <li className="review-form__left-item">
                  <input className="review-form__input" id="dignity" type="text" name="dignity" placeholder="Достоинства"
                    onChange={(evt) => {
                      onDignityInput(evt);
                    }}
                  />
                </li>
                <li className="review-form__left-item">
                  <input className="review-form__input" id="limitations" type="text" name="limitations" placeholder="Недостатки"
                    onChange={(evt) => {
                      onLimitationsInput(evt);
                    }}
                  />
                </li>
              </ul>
            </div>
            <div className="review-form__col">
              <div className="review-form__rating rating">
                {stars.map((star) => {
                  return <Fragment key={star}>
                    <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                      onChange={(evt) => {
                        onRatingChange(evt);
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                  </Fragment>;
                })}
                <p className="rating__text">Оцените товар:</p>
              </div>
              <div className="review-form__comment">
                <textarea className="review-form__textarea" name="review-text" id="review-text" placeholder="* Комментарий" required
                  onChange={(evt) => {
                    onCommentInput(evt);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="review-form__submit">
            <button className="review-form__button" type="submit">Оставить отзыв</button>
          </div>
          <div className="review-form__close">
            <button className="review-form__button-close" type="button" onClick={(evt) => {
              evt.preventDefault();
              onActiveModalChange();
            }}>
              <svg className="review-form__close-icon" width="15" height="16" viewBox="0 0 15 16">
                <use xlinkHref="#cross"></use>
              </svg>
            </button>
          </div>
        </form>
      </section>
      <div className="modal__bg-layer" onClick={() => {
        onActiveModalChange();
      }}></div>
    </Fragment>;
  }
}

Modal.propTypes = {
  onActiveModalChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onNameInput: PropTypes.func.isRequired,
  onCommentInput: PropTypes.func.isRequired,
  onDignityInput: PropTypes.func.isRequired,
  onLimitationsInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  dignity: PropTypes.string.isRequired,
  limitations: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(ReviewCreator.addReview(review));
  },
});

export default connect(null, mapDispatchToProps)(Modal);
