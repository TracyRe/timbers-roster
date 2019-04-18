import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerBio(props) {

  return (
    <div>
      <h2>{props.player}</h2>
      <img src={props.img}/>
      <p>{props.position}</p>
    </div>
  );
}

PlayerBio.propTypes = {
  img: PropTypes.string,
  player: PropTypes.string,
  position: PropTypes.string
};

export default PlayerBio;
