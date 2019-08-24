export const updateBoard = payload => ({
  type: GameActions.updateBoard,
  payload
})

export const GameActions = {
  updateBoard: '[game]: update board',
}