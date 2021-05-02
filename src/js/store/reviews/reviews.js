import {extend} from '../../utils/utils';
import {reviews} from '../../mocks/reviews';

const initialState = {
  reviews,
};

const ActionType = {
  UPDATE_REVIEWS: `UPDATE_REVIEWS`,
  DELETE_REVIEWS: `DELETE_REVIEWS`,
};

const ActionCreator = {
  updateReviews: (review) => ({
    type: ActionType.UPDATE_REVIEWS,
    payload: review,
  }),
  deleteReview: () => ({
    type: ActionType.DELETE_REVIEWS,
    payload: [],
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_REVIEWS:
      return extend(state, {
        reviews: [action.payload, ...state.reviews],
      });
    case ActionType.DELETE_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
