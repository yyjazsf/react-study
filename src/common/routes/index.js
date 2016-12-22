/**
 * Created by yyj on 19/12/2016.
 */

import CheckAuth from '../components/CheckAuth';

import App from '../components/App';
import HomePage from '../containers/HomePageContainer';
import LoginPage from '../containers/LoginPageContainer';
// import RegisterPage from '../containers/PageContainer';
import EditPage from '../containers/EditPageContainer';


export default {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: 'sign-in',
      component: CheckAuth(LoginPage, 'guest'),
    },
    {
      path: 'edit',
      component: CheckAuth(EditPage, 'auth'),
    },
  ],
};
