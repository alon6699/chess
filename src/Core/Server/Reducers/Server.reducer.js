import { ServerActions } from "../Actions/Server.action";

const initState = null;

const actionHandler = {
    [ServerActions.INIT] : (state, action) => {
        const webSocket = new WebSocket("ws://localhost:8025/websockets/game");

        webSocket.onopen = () => {
          console.log('connection establish');
        }
    
        webSocket.onmessage = (message) => {
          console.log(message);
        }

        webSocket.onclose = () => {
            console.log("closed");
        }

        return webSocket;
    }
}

export const ServerReducer = (state = initState, action) => {
    return actionHandler[action.type] ? actionHandler[action.type](state,action) : state;
}