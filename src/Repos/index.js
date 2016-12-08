import React from 'react';

const Repos = props => (
  <div>
    <h1>Repos</h1>
    <p>{props.params.name}</p>
  </div>
);

Repos.propTypes = {
  params: React.PropTypes.object,
};

export default Repos;
