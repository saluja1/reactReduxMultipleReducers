const INITIAL_STATE = {
  articles: [
    { id: '0', title: 'Title 1' },
    { id: '1', title: 'Title 2' },
    { id: '2', title: 'Title 3' },
    { id: '3', title: 'Title 4' },
    { id: '4', title: 'Title 5' },
    { id: '5', title: 'Title 6' },
    { id: '6', title: 'Title 7' },
    { id: '7', title: 'Title 8' },
  ],
};

function articleReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_SET") {
    state.articles[state.articles.length] = { id: (state.articles.length).toString(), title: "Title "+(state.articles.length+1).toString() };
    return {...state, addTerm: "Title "+(state.articles.length).toString()};
  } else {
    return {...state};
  }
}


export default articleReducer;
