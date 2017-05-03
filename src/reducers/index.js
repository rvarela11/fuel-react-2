const initialState = {
  goalData: 0,
  dailyData: 0,
  list: [],
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'STEP1_CALORIES':
      return {
        ...state,
        goalData: action.goalNumber
      }
    case 'GET_ITEM':
      return {
        ...state,
        list: state.list.concat([ action.data ] )
      }
    default:
        return state;
  }
}
