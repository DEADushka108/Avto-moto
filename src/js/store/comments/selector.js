import NameSpace from '../name-space';

const getComments = (state) => {
  return state[NameSpace.COMMENTS].comments;
};

export {getComments};
