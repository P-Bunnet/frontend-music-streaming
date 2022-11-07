import { User } from '../../types/type';
import { ActionType } from '../actionType';
import { Action } from '../actions';

const initialState: User = {
  id: '',
  email: '',
  avatar: ''
};

const userReducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return action.payload;
    case ActionType.DELETE_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
