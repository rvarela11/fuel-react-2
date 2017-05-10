const initialState = {
  goalData: 0,
  dailyData: 0,
  list: [],
  optionButtonResultsTitle: "Breakfast",
  optionButtonResultsArray: {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: []
  }
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
        list: [
          ...state.list.concat(action.data)
        ]
      }
    case 'STEP2_BUTTON_TITLE':
      return {
        ...state,
        optionButtonResultsTitle: action.title
      }
    case 'STEP2_ADD_ITEM':
      return {
        ...state,
        optionButtonResultsArray: {
          ...state.optionButtonResultsArray,
          [state.optionButtonResultsTitle]: [
              ...state.optionButtonResultsArray[state.optionButtonResultsTitle].concat(action.item)
            ]
        }
      }
    case 'STEP2_CALORIES':
      return {
        ...state,
        dailyData: state.dailyData + action.dailyNumber
      }
    case 'STEP2_REMOVE_ITEM':
      return {
        ...state,
        optionButtonResultsArray: {
          ...state.optionButtonResultsArray,
          [state.optionButtonResultsTitle]: [
            ...state.optionButtonResultsArray[state.optionButtonResultsTitle].slice(0, action.step2Index),
            ...state.optionButtonResultsArray[state.optionButtonResultsTitle].slice(action.step2Index + 1),
          ]
        }
      }
    case 'STEP2_REMOVE_CALORIES':
      return {
        ...state,
        dailyData: state.dailyData - action.dailyNumber
      }
    default:
        return state;
  }
}
