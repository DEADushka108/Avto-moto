import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator as ReviewCreator} from '../../store/reviews/reviews';
import {connect} from 'react-redux';
import {randomNumber, setItem} from '../../utils/utils';
import {disablePageScroll, enablePageScroll} from 'scroll-lock';
import {ValidStatus} from '../../utils/const';

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
    const {
      author,
      validAuthor,
      rating,
      comment,
      validComment,
      dignity,
      limitations,
      onSubmit,
      onActiveModalChange,
      onNameValidCkeck,
      onValidCommentCheck,
    } = this.props;

    evt.preventDefault();

    if (!validAuthor || !author) {
      onNameValidCkeck(ValidStatus.INVALID);
      return;
    }

    if (!validComment || !comment) {
      onValidCommentCheck(ValidStatus.INVALID);
      return;
    }

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

  componentDidMount() {
    disablePageScroll();
  }

  componentWillUnmount() {
    enablePageScroll();
  }

  render() {
    const {
      author,
      validAuthor,
      comment,
      validComment,
      onActiveModalChange,
      onRatingChange,
      onNameInput,
      onCommentInput,
      onDignityInput,
      onLimitationsInput,
    } = this.props;

    return <Fragment>
      <section className="modal" onKeyDown={this.handleEscButtonClose}>
        <h2 className="modal__title">???????????????? ??????????</h2>
        <form action="#" className="modal-form review-form" onSubmit={this.handleSubmit}>
          <div className="review-form__wrapper">
            <div className="review-form__col">
              <ul className="review-form__left-list">
                <li className="review-form__left-item">
                  {!validAuthor && <p className="review-form__text">????????????????????, ?????????????????? ????????</p>}
                  {!author && <label className="review-form__label" htmlFor="name">*</label>}
                  <input className="review-form__input" id="name" type="text" name="name" placeholder="??????" autoFocus
                    onChange={(evt) => {
                      onNameInput(evt);
                    }}
                  />
                </li>
                <li className="review-form__left-item">
                  <input className="review-form__input" id="dignity" type="text" name="dignity" placeholder="??????????????????????"
                    onChange={(evt) => {
                      onDignityInput(evt);
                    }}
                  />
                </li>
                <li className="review-form__left-item">
                  <input className="review-form__input" id="limitations" type="text" name="limitations" placeholder="????????????????????"
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
                <p className="rating__text">?????????????? ??????????:</p>
              </div>
              <div className="review-form__comment">
                {!validComment && <p className="review-form__text review-form__text--textarea">????????????????????, ?????????????????? ????????</p>}
                {!comment && <label className="review-form__label review-form__label--textarea" htmlFor="review-text">*</label>}
                <textarea className="review-form__textarea" name="review-text" id="review-text" placeholder="??????????????????????"
                  onChange={(evt) => {
                    onCommentInput(evt);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="review-form__submit">
            <button className="review-form__button" type="submit">???????????????? ??????????</button>
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
  validAuthor: PropTypes.bool.isRequired,
  dignity: PropTypes.string.isRequired,
  limitations: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  validComment: PropTypes.bool.isRequired,
  rating: PropTypes.string.isRequired,
  onNameValidCkeck: PropTypes.func.isRequired,
  onValidCommentCheck: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(ReviewCreator.addReview(review));
  },
});

export default connect(null, mapDispatchToProps)(Modal);
