/* @flow */

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import type { Action } from '../types/redux';
import { reducer as formReducer } from 'redux-form';

import posts, * as FromPosts from './posts';
import type { State as PostsState } from './posts';

// -----------------------------------------------------------------------------
// EXPORTED REDUCER STATE TYPE

export type State = {
  posts: PostsState,
};

// -----------------------------------------------------------------------------
// REDUCER

const rootReducer: Reducer<State, Action> = combineReducers({
  posts,
  form: formReducer,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getPostById(state: State, id: number) {
  return FromPosts.getById(state.posts, id);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default rootReducer;
