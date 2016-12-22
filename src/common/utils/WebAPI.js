/**
 * Created by yyj on 19/12/2016.
 */
import axios from 'axios';
import { browserHistory } from 'react-router';
import uuid from 'uuid';

import {
  authComplete,
  authError,
  hideSpinner,
  startLogout,
  setUi,
  setRecipe,
} from '../actions';

function getCookie(keyName) {
  const name = `${keyName}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

const api = {
  signin: (dispatch, email, password) => {
    axios.post('/api/login', {
      email,
      password,
    })
      .then((res) => {
        if (res.data.success === false) {
          dispatch(authError());
          dispatch(hideSpinner());
          console.log('出错了');
          window.location.reload();
        } else if (!document.cookie.token) {
          const d = new Date();
          d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
          const expires = `expires=${d.toUTCString()}`;
          document.cookie = `token=${res.data.token};${expires}`;
          dispatch(authComplete());
          dispatch(hideSpinner());
          browserHistory.push('/');
        }
      })
      .catch(() => {
        dispatch(authError());
      });
  },
  logout: (dispatch) => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(hideSpinner());
    browserHistory.push('/');
  },
  checkAuth: (dispatch, token) => {
    axios.post('/api/authenticate', {
      token,
    })
      .then((res) => {
        if (res.data.success === false) {
          dispatch(authError());
        } else {
          dispatch(authComplete());
        }
      })
      .catch((err) => {
        dispatch(authError());
      });
  },
  getRecipes: () => {

  },
  addRecipe: () => {
  },
  updateRecipe: (dispatch, recipeId, name, description, imagePath) => {
    axios.put(`/api/recipes/${recipeId}?token=${getCookie('token')}`, {
      id: recipeId,
      name,
      description,
      imagePath,
    })
      .then((response) => {
        if (response.data.success === false) {
          dispatch(hideSpinner());
          dispatch(setRecipe({ key: 'recipeId', value: '' }));
          dispatch(setUi({ key: 'isEdit', value: false }));
          alert('發生錯誤，請再試一次！');
          dispatch(setUi({
            key: 'isEdit',
            value: false,
          }));
          browserHistory.push('/');
        } else {
          dispatch(hideSpinner());
          browserHistory.push('/');
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  deleteRecipe: (dispatch, recipeId) => {
    axios.delete(`/api/recipes/${recipeId}?token=${getCookie('token')}`)
      .then((response) => {
        if (response.data.success === false) {
          dispatch(hideSpinner());
          alert('發生錯誤，請再試一次！');
          browserHistory.push('/');
        } else {
          dispatch(hideSpinner());
          browserHistory.push('/');
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
export default api;
