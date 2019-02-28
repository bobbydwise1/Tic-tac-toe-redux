import Board from '../components/Board';

export default (state = {}, action) => {

  const {  squares, xIsNext} = action;
  switch (action.type) {
  case 'ADD_SQUARE':
    let newState = Object.assign({}, state, {
        squares: squares,
        xIsNext: xIsNext,

    });
    return newState;

  default:
    return state;
  }
};
