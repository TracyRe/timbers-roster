import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Player from './Player.js';

function Roster() {

  const rosterArr = [
    { player: 'Dairon Asprilla',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_player_headshot_small/s3/Asprilla,%20Dairon.jpg',
    position: 'Midfielder/Forward'},
    { player: 'Jeff Attinella',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_player_headshot_small/s3/Attinella,%20Jeff.jpg',
    position: 'Goalkeeper'},
    { player: 'Sebastián Blanco',
    img: 'https://portland-mp7static.mlsdigital.net/styles/image_player_headshot_small/s3/Blanco,%20Sebastian.jpg',
    position: 'Midfielder/Forward'},
  ];

  const Roster =  {
    width: '80vw',
    margin: '2rem auto',
    display: 'grid',
    gridAutoColumns: '180px',
    gridGap: '10px 10px',
    gridAutoFlow: 'column'
  }

  const h1Style = {
    fontSize: '3rem',
    textAlign: 'center'
  }

  return (
    <div>
    <h1 style={h1Style}>Team Roster</h1>
      <div style={Roster}>
      {rosterArr.map((teamMember,index)=>
        <Player
        img={teamMember.img}
        player={teamMember.player} key={index}
        position={teamMember.position}/>
      )}
      </div>
    </div>
  );
}

export default Roster;
