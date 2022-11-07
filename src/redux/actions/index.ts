import { ActionType } from '../actionType';
import { User } from '../../types/type';
interface SetUserAction {
  type: ActionType.SET_USER;
  payload: User;
}

interface DeleteUserAction {
  type: ActionType.DELETE_USER;
}

export type Action = SetUserAction | DeleteUserAction;
