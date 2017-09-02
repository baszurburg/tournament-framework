import * as user from '../actions/users';
import { User } from '../user';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  roles: string[];
}

const initialState: State = {
  isAuthenticated: false,
  user: null,
  roles: []
};


export function reducer(state = initialState, action: user.Actions): State {
  switch (action.type) {

    case user.ADD_USER:

      return {
        isAuthenticated: true,
        user: action.payload,
        roles: action.payload.roles
      };

    case user.LOGIN_USER:

      return {
        isAuthenticated: true,
        user: action.payload,
        roles: action.payload.roles
      };

    case user.LOGOUT_USER:
      return {
        isAuthenticated: false,
        user: null,
        roles: []
      };

    default:
      return state;
  }
}
export const getUser = (state: State) => state.user;
export const isUser = (state: State) => state.isAuthenticated;
export const userRoles = (state: State) => state.roles;

