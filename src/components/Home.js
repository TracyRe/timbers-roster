import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';



function Home() {

  const RosterLink =  {
    width: '100%',
    padding: '2rem 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:'3rem',

  }

  return (
    <div>
        <Link to='/roster' style={RosterLink}>
        &gt;&gt; Team Roster &lt;&lt;
        </Link>
    </div>
  );
}

export default Home;
