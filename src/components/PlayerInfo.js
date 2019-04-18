import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlayerBio from './PlayerBio';
import PlayerHistory from './PlayerHistory.js';

function PlayerInfo(props) {

  var player={player}
  var img={img}
  var position={position}
  var details={details}

  const rosterArr = [
    { player: 'Dairon Asprilla',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_full_layout/s3/Asprilla,%20Hero.jpg',
    position: 'Midfielder/Forward',
    details: '2019: Played 20 minutes off the bench in a 2-1 loss at FC Dallas on April 13 … Played 45 minutes in a 3-0 loss against the San Jose Earthquakes on April 6 ... On loan from the Timbers for the match, recorded two goals and an assist in T2’s 3-1 victory over Las Vegas Lights FC, earning USL Championship Team of the Week honors ... Started and played 79 minutes in a 3-0 loss at FC Cincinnati on March 17 ... Made his MLS season debut, coming off the bench in a 4-1 loss at Los Angeles FC on March 10.'},
    { player: 'Jeff Attinella',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_full_layout/s3/Timbers_Vancouver_CM004.jpg',
    position: 'Goalkeeper',
    details: '2019:  Played 90 minutes in a 2-1 loss at FC Dallas on April 13 ... Notched 10 saves in a 3-0 loss at San Jose Earthquakes on April 6,  which is a career high. The 10 saves are tied for the most in MLS this season and the second-most ever by a Timbers goalkeeper ... Started and played 90 minutes in a 2-1 loss at LA Galaxy on March 31 ... Made his third league start in a 3-0 loss at FC Cincinnati on March 17 ... Started and made three saves in the team’s 4-1 loss against Los Angeles FC on March 10 ... Made his first appearance of the season, playing 90 minutes and tallying three saves in a 3-3 draw against the Colorado Rapids on March 2.'},
    { player: 'Sebastián Blanco',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_full_layout/s3/Blanco,%20Hero.jpg',
    position: 'Midfielder/Forward',
    details: '2019: Played 90 minutes and logged one assist in a 2-1 loss at FC Dallas on April 13 … Played 90 minutes in a 3-0 loss against the San Jose Earthquakes on April 6 ... Started and played 90 minutes in a 2-1 loss at LA Galaxy on March 31 ... Started and played 79 minutes in a 3-0 loss at FC Cincinnati on March 17 ... Played 90 minutes in a 4-1 loss against Los Angeles FC on March 10 ... Made his first appearance of the season, playing 90 minutes and scoring his first goal of the season in a 3-3 draw against the Colorado Rapids on March 2.'},
  ];



  return (
    <div>
      <PlayerBio
      player={rosterArr.player}
      img={rosterArr.img}
      position={rosterArr.position}/>

      <PlayerHistory
      details={rosterArr.details}/>
    </div>
  );
}

PlayerInfo.propTypes = {
  player: PropTypes.string,
  img: PropTypes.string,
  position: PropTypes.string,
  details: PropTypes.string
};

export default PlayerInfo;
