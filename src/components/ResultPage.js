/**
 * Created by yyj on 14/12/2016.
 */

import React, { PropTypes } from 'react';
import GithubBox from './githubBox';

const ResultPage = props => (
  <GithubBox data={props.data} userId={props.location.query.userId} />
);

ResultPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};
export default ResultPage;
