import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../assets/timbersLogo.png'

function Header() {

  const header =  {
    width: '100%',
    padding: '.5rem 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const h1Style = {
    fontSize: '4rem'
  }

  return (
    <div style={header}>
      <Link to='/'><img title={"Portland Timbers"} src={logo}/></Link>
      <Link to='/'><h1 style={h1Style}>Portland Timbers</h1></Link>
    </div>
  );
}

export default Header;
