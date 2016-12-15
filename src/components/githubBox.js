/**
 * Created by yyj on 14/12/2016.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const GithubBox = (props) => {

  console.log(props);

  return (
    <div>
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text">{props.data.get('name')}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <img src={props.data.get('avatar_url')} />
          <ul>
            <li>UserId: {props.userId}</li>
            <li>Followers:{props.data.get('followers')}</li>
            <li>Following: {props.data.get('following')}</li>
          </ul>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <Link
            to="/"
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

GithubBox.propTypes = {
  data: PropTypes.object,
  userId: PropTypes.string,
};

export default GithubBox;
