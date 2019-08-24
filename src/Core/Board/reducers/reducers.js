import { VisibilityFilters } from "../Actions/actions";

const piece = {
    name: 'king',
    isWhite: false
}

const GameStatus = {
  WIN: "win",
  LOSE: "lose", 
  DRAW: "draw",
  IN_PROGRESS: "inProgress",
  INIT: "init"
}

const Player = {
  BLACK: "black",
  WHITE : "white"
}
  
const initState = {
  board: [],
  gameStatus: GameStatus.INIT,
  player: Player.WHITE
};
// for (let i = 0; i < 8; i++) {
//     const children = [];
//     for (let j = 0; j < 8; j++) {
//         children.push(piece);
//     }
//     initState.push(children);
// }

export const Game = (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }