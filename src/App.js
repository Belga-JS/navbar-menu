import React, { Component } from 'react';
import './App.css';




class MenuItem extends Component {
  render() {
    return (
      <li className={this.props.NavHeader}><a href={this.props.link}>{this.props.text}</a>{this.props.children} </li>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="Nav-bar">
        <ul className="app-Nav" >
          <MenuItem NavHeader="item-nav1" text="Home" link="#"></MenuItem>
          <MenuItem NavHeader="item-nav2" text="Services" link="#">

            <SubNavbar />

          </MenuItem>

          <MenuItem NavHeader="item-nav3" text="Contact" link="#"></MenuItem>
        </ul>
      </header>
    );

  }

}

class SubNavbar extends Component {
  render() {
    return (
      <div className="main-Nav">
        <ul className="drop-menu">
         <MenuItem NavHeader="Navdown drop-main1" text="For Entrepreneurs" link="#"/>
         <MenuItem NavHeader="Navdown drop-main2" text="For students" link="#"/>
         <MenuItem NavHeader="Navdown drop-main3" text="For hobbyists" link="#"/>
        </ul>
      </div>
    )
  }
}


export default Header;


