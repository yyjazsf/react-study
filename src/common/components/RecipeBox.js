/**
 * Created by yyj on 20/12/2016.
 */
import React, { Component, PropTypes } from 'react';

const RecipeBox = ({
  isAuth,
  recipe,
  onDelRecipe,
  onUpadateRecipe,
}) => (
  <div className="container">
    <div className="col-md-4 col-xs-6">
      <img src={recipe.get('imagePath')} alt="" className="img-thumbnail"/>
      <h3>{recipe.get('name')}</h3>
      <p>{recipe.get('description')}</p>
      {
        isAuth === true ? (
          <p>
            <button className="mdl-button mdl-js-button mdl-button--raised" onClick={onDelRecipe(recipe.get('_id'))}>刪除</button>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={onUpadateRecipe(recipe.get('_id'))}>修改</button>
          </p>)
          : null
      }
    </div>
  </div>
);

// RecipeBox.propTypes = {
//   isAuth: PropTypes.bool,
//   recipe: PropTypes.object,
//   onDelRecipe: PropTypes.func.isRequired,
//   onUpadateRecipe: PropTypes.func.isRequired,
// };
//
// RecipeBox.defaultProps = {
//   recipe: {},
//   onDelRecipe: () => {},
//   onUpadateRecipe: () => {},
// };

export default RecipeBox;
