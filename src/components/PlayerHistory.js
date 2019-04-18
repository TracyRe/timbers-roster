import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerHistory(props) {

  return (
    <div>
      <p>{props.details}</p>
    </div>
  );
}

PlayerHistory.propTypes = {
  details: PropTypes.string
};

export default PlayerHistory;
