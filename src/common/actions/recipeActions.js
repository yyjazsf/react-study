/**
 * Created by yyj on 16/12/2016.
 */

import { createAction } from 'redux-actions';

import WebAPI from '../utils/WebAPI';
import { RECIPES } from '../constants/actionTypes';

export const addRecipe = createAction(RECIPES.ADD_RECIPE, WebAPI.addRecipe);
export const getRecipes = createAction(RECIPES.GET_RECIPES, WebAPI.getRecipes);
export const updateRecipes = createAction(RECIPES.UPDATE_RECIPE, WebAPI.updateRecipe);
export const deleteRecipe = createAction(RECIPES.DELETE_RECIPE, WebAPI.deleteRecipe);
export const setRecipe = createAction(RECIPES.SET_RECIPE);
