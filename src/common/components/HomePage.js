/**
 * Created by yyj on 16/12/2016.
 */
import React, { PropTypes } from 'react';
import RecipeBoxContainer from '../containers/RecipeBoxContainer';

const HomePage = ({
  recipes,
}) => (
  <div>
    {
      recipes.map((recipe, index) => (
        <RecipeBoxContainer key={index} recipe={recipe} />
      ))
    }
  </div>
);

HomePage.propTypes = {
  recipes: PropTypes.object.isRequired,
};

HomePage.defauleProps = {
  recipes: [],
};

export default HomePage;
