const GET_SEX = 'SEX';
const GET_ACTIVITY = 'ACTIVITY';
const GET_AGE = 'AGE';
const GET_HEIGHT = 'HEIGHT';
const GET_WEIGHT = 'WEIGHT';
const GET_USER = 'GET_USER';

export const getSex = sex => ({
  type: GET_SEX, sex
})

export const getActivity = activity => ({
  type: GET_ACTIVITY, activity
})

export const getAge = age => ({
  type: GET_AGE, age
})

export const getHeight = height => ({
  type: GET_HEIGHT, height
})

export const getWeight = weight => ({
  type: GET_WEIGHT, weight
})

export const getUserInfo = userInfo => ({
  type: GET_USER, userInfo
})

export const assignSex = sex => dispatch => {
  dispatch(getSex(sex))
}

export const assignActivity = activity => dispatch => {
  dispatch(getActivity(activity))
}

export const assignAge = age => dispatch => {
  dispatch(getAge(age))
}

export const assignHeight = height => dispatch => {
  dispatch(getHeight(height))
}

export const assignWeight = weight => dispatch => {
  dispatch(getWeight(weight))
}

export const assignUserInfo = user => dispatch => {
  dispatch(getUserInfo(user))
}

const initialState = {
  sex: 'male',
  activity: 'sedentary',
  age: null,
  height: null,
  weight: null,
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_SEX:
      newState.sex = action.sex
      break;
    case GET_ACTIVITY:
      newState.activity = action.activity
      break;
    case GET_AGE:
      newState.age = action.age
      break;
    case GET_HEIGHT:
      newState.height = action.height
      break;
    case GET_WEIGHT:
      newState.weight = action.weight
      break;
    case GET_USER:
      newState.user = action.user
      break;
    default:
      return state;
  }
  return newState;
}

