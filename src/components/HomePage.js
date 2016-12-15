/**
 * Created by yyj on 14/12/2016.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => {
  console.log(userId);

  return (
    <form>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          defaultValue="apple"
          type="text"
          id="userId"
          onChange={onChangeUserId}
        />
        <label className="mdl-textfield__label" htmlFor="userId">userId</label>
        <span className="mdl-textfield__error">userId error!</span>
      </div>
      <div>
        <Link
          to={{
            pathname: 'result',
            query: { userId },
          }}
        ><button
          onClick={onSubmitUserId}
          type="submit"
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
        >
          view { userId || 'userId' }
        </button></Link>
      </div>
    </form>
  );
};
HomePage.propTypes = {
  onSubmitUserId: PropTypes.func,
  onChangeUserId: PropTypes.func,
  userId: PropTypes.string,
};
export default HomePage;
