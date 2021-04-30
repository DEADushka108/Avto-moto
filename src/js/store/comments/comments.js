import {extend} from '../../utils/utils';

const initialState = {
  comments: [],
};

const ActionType = {
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  DELETE_COMMENTS: `DELETE_COMMENTS`,
};

const ActionCreator = {
  updateComments: (comment) => ({
    type: ActionType.UPDATE_COMMENTS,
    payload: comment,
  }),
  deleteStories: () => ({
    type: ActionType.DELETE_STORIES,
    payload: [],
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS:
      return extend(state, {
        comments: [action.payload, ...state.comments],
      });
    case ActionType.DELETE_COMMENTS:
      return extend(state, {
        stories: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
