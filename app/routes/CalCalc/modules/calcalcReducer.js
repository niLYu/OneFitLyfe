const GET_USER = 'GET_USER';

export const getUserInfo = userInfo => ({
  type: GET_USER, userInfo
})

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
    case GET_USER:
      newState.user = action.userInfo
      break;
    default:
      return state;
  }
  return newState;
}

