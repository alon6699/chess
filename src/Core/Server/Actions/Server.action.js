import { updateBoard } from "../../Board/Actions/actions";

export const SuccessInitServer = (webSocket) => ({
    type: ServerActions.SUCCESS_INIT,
    payload: webSocket
  });

export const ServerActions = {
  SUCCESS_INIT: '[server]: success init'
}

export const initServer = () => {
    return dispatch => {
      const webSocket = new WebSocket("ws://localhost:8025/websockets/game");

      webSocket.onopen = () => {
        dispatch(SuccessInitServer(webSocket));
      }
  
      webSocket.onmessage = (event) => {
        dispatch(updateBoard(JSON.parse(event.data)));
      }

      webSocket.onclose = () => {
          console.log("closed");
      }
    }
};

export const sendMessage = (webSocket, message) => {
  return dispatch => {
    if(webSocket) {
      webSocket.send(message);
    }
  }
};