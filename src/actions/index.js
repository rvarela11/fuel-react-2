import axios from 'axios';

export const STEP1_CALORIES = 'STEP1_CALORIES';
export function step1Calories (goalNumber) {
  return {
    type: STEP1_CALORIES,
    payload: goalNumber
  }
}

export const GET_ITEM = 'GET_ITEM';
const APP_ID = 'ac2eca48';
const API_KEY = '070587b79fa048410207e13028e65c7b';
const ROOT_URL = 'https://api.nutritionix.com/v1_1/search/';
const FIELDS = 'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_serving_size_qty%2Cnf_serving_size_unit';

export function getItems (item) {
  const url = `${ROOT_URL}${item}?${FIELDS}&appId=${APP_ID}&appKey=${API_KEY}`;
  return function (dispatch) {
    axios.get(url)
      .then((response) => dispatch({
        type: GET_ITEM,
        payload: response.data.hits
      })).catch(function (error) {
        console.log(error);
      })
  }
}

export const STEP2_BUTTON_TITLE = 'STEP2_BUTTON_TITLE';
export function changeButtonTitle (title) {
  return {
    type: STEP2_BUTTON_TITLE,
    payload: title
  }
}

export const STEP2_ADD_ITEM = 'STEP2_ADD_ITEM';
export function addItemToArray (item) {
  return {
    type: STEP2_ADD_ITEM,
    payload: item
  }
}

export const STEP2_CALORIES = 'STEP2_CALORIES';
export function step2Calories (dailyNumber) {
  return {
    type: STEP2_CALORIES,
    payload: dailyNumber
  }
}

export const STEP2_REMOVE_ITEM = 'STEP2_REMOVE_ITEM';
export function removeItemFromArray (index) {
  return {
    type: STEP2_REMOVE_ITEM,
    payload: index
  }
}

export const STEP2_REMOVE_CALORIES = 'STEP2_REMOVE_CALORIES';
export function step2RemoveCalories (dailyNumber) {
  return {
    type: STEP2_REMOVE_CALORIES,
    payload: dailyNumber
  }
}
