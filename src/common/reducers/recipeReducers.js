/**
 * Created by yyj on 16/12/2016.
 */

import { handleActions } from 'redux-actions';

import {
  RECIPES,
} from '../constants/actionTypes';
import { RecipeState } from '../constants/models';

const recipeReducers = handleActions({
  [RECIPES.GET_RECIPES]: (state, { payload }) => (
    state.set(
      'recipes',
      payload.recipes,
    )
  ),
  [RECIPES.SET_RECIPE]: (state, { payload }) => (
    state.setIn(payload.keyPath, payload.value)
  ),
}, RecipeState);

export default recipeReducers;
