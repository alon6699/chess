import { GameActions } from "../Actions/actions";

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

const actionHandler = {
  [GameActions.updateBoard] : (state, action) => {
    return {...state, board: action.payload.board};
  }
}

export const Game = (state = initState, action) => {
  return actionHandler[action.type] ? actionHandler[action.type](state,action) : state;
}