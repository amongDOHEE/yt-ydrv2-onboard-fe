const initialState = {
  input: "",
  channelId: "",
};

export const searchTitle = (state = initialState, action: { type: any; userInputValue: string; channelID: string },) => {
  switch (action.type) {
    case 'ENTER':
      return action.userInputValue
    case 'SELECT_CHANNEL':
      return action.channelID
    default:
      return state;
  }
}