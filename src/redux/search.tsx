const init_input = {
  input: '',
};

const init_channelId = {
  channelId: '',
};

export const searchTitle = (
  state = init_input,
  action: {type: any; userInputValue: string}
) => {
  switch (action.type) {
    case 'ENTER':
      return action.userInputValue;
    default:
      return state;
  }
};

export const searchId = (
  state = init_channelId,
  action: {type: any; channelId: string}
) => {
  switch (action.type) {
    case 'SELECT':
      return {
        channelId: action.channelId,
      };
    default:
      return state;
  }
};

export const searchVideo = (
  state = init_input,
  action: {type: any; keyword: string}
) => {
  switch (action.type) {
    case 'ENTER':
      return action.keyword;
    default:
      return state;
  }
};
