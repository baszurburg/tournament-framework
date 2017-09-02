import { Action } from '@ngrx/store';
import { User } from '../user';

export const ADD_USER = '[User] Add User';
export const LOGIN_USER = '[User] Login User';
export const LOGOUT_USER = '[User] Logout User';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: User) {}
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;

  constructor(public payload: User) {}

}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = AddUser | LoginUser | LogoutUser;
