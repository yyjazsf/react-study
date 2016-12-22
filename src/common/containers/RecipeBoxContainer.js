/**
 * Created by yyj on 20/12/2016.
 */
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import RecipeBox from '../components/RecipeBox';

import {
  deleteRecipe,
  setRecipe,
  setUi,
} from '../actions';

export default connect(
  state => ({
    isAuth: state.getIn(['user', 'isAuth']),
    recipes: state.getIn(['recipe', 'recipes']),
  }),
  disapth => ({
    onDelRecipe: recipeId => () => (
      disapth(deleteRecipe(disapth, recipeId))
    ),
    onUpadateRecipe: recipes => recipeId => () => {
      const recipeIndex = recipes
        .findIndex(_recipe => (
          _recipe.get('_id') === recipeId
        ));
      const recipe = recipeIndex !== -1 ? recipes.get(recipeIndex) : undefined;
      disapth(setRecipe({ keyPath: ['recipe'], value: recipe }));
      disapth(setRecipe({ keyPath: ['recipe', 'id'], value: recipeId }));
      disapth(setUi({
        key: 'isEdit',
        value: true,
      }));
      browserHistory.push(`/edit?recipeId=${recipeId}`);
    },
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { recipes } = stateProps;
    const { onUpadateRecipe } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onUpadateRecipe: onUpadateRecipe(recipes),
    });
  },
)(RecipeBox);
