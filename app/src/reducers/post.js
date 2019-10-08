const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          favor: false
        }
      ];
    default:
      return state;
  }
};

export default posts;
