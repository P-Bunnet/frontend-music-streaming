import { ActionType } from '../actionType';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { User } from '../../types/type';

export const getUser = (userdata: User) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER,
      payload: userdata
    });
  };
};

export const deleteUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_USER
    });
  };
};
