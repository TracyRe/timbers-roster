import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Player(props) {

  const Player =  {
    background: '#fff',
    padding: '.25rem .5rem .5rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00420b',
  }


  return (
    <div style={Player}>
      <h3>{props.player}</h3>
      <img src={props.img}/>
      <h4>{props.position}</h4>
    </div>
  );
}

Player.propTypes = {
  img: PropTypes.string,
  player: PropTypes.string,
  position: PropTypes.string
};

export default Player;
