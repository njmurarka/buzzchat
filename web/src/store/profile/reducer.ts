/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

import {Profile} from '../../core/profile';
import {ProfileActions} from './';

export interface ProfileState extends Profile {}

const initialState: ProfileState = {
  id: '',
  name: 'Loading',
  avatar: '',
  chatsList: [],
  contactsList: [],
  account: '-',
  amount: '-',

};


export default function createReducer(
  state: ProfileState = initialState,
  action: ProfileActions,
): ProfileState {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return state;
    case 'PROFILE_SUCCESS':
      return action ? action.payload ? action.payload : state : state;
    case 'PROFILE_FAILURE':
      return {
        ...state,
      };
    case 'PROFILE_LOGOUT':
      return initialState;
  }

  return state;
}
