import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav_links';
import Profile from './profile';
import SearchBar from './search_bar';

class Nav extends React.Component {
  constructor(props) {
    super(props)

    window.addEventListener('scroll', () => {    
      if ($(window).scrollTop() < 350) {
        $('#nav-bar').removeClass('show');
      } else {
        $('#nav-bar').addClass('show');
      }
    });
  }

  render() {
    return(
      <div className="nav-bar-hidden" id="nav-bar">
        <div className="nav-left">
          <Link to="/home">
            <img src={window.logo} className="nav-logo" />
          </Link>
          
          <NavLinks />
        </div>

        <div className="nav-right">
          <SearchBar history={this.props.history}/>
          <Profile />
        </div>
      </div>
    )
  }
}

export default Nav;


// class Nav extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div className={`nav-bar ${show && "nav-show"}`} id="navbar">
//         <Link to="/home">
//           <img src={window.logo} className="nav-logo" />
//         </Link>
//         <NavLinks />
//       </div>
//     );
//   }
// }

// export default Nav;