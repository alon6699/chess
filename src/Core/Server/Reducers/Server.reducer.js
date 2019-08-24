import { ServerActions } from "../Actions/Server.action";

const initState = null;

const actionHandler = {
    [ServerActions.SUCCESS_INIT] : (state, action) => {
      return action.payload;
    }
}

export const ServerReducer = (state = initState, action) => {
    return actionHandler[action.type] ? actionHandler[action.type](state,action) : state;
}