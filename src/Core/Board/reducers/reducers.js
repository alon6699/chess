import { VisibilityFilters } from "../Actions/actions";

const piece = {
    name: 'king',
    isWhite: false
}
  
const initState = [];
for (let i = 0; i < 8; i++) {
    const children = [];
    for (let j = 0; j < 8; j++) {
        children.push(piece);
    }
    initState.push(children);
}

export const todos = (state = initState, action) => {
    switch (action.type) {
      case VisibilityFilters.SHOW_ALL:
        return action.board;
      default:
        return state;
    }
  }