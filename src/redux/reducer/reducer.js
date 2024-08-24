let initialState = {
  count: 0,
  id: '',
  password: '',
};

function reducer(state = initialState, action) {
  console.log('action', action);
  // 1번- if문 사용
  // if (action.type === 'INCREMENT') {
  //   return { ...state, count: state.count + 1 };
  // }

  // return { ...state };

  //2번- switch문 사용(1번과 2번은 같다)
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload.num };
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }
}

export default reducer;
