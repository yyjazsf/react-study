/**
 * Created by yyj on 16/12/2016.
 */
import { fromJS } from 'immutable';

export const UiState = fromJS({
  spinnerVisible: false,
  isEdit: false,
});

export const RecipeState = fromJS({
  recipes: [],
  recipe: {
    id: '',
    name: '',
    description: '',
    imagePath: '',
  },
});

export const UserState = fromJS({
  userName: '',
  email: '',
  password: '',
  isAuth: false,
});
