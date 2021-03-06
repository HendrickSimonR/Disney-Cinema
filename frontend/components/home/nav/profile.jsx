import React from 'react';
import ProfileMenuContainer from './profile_menu_container';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.revealMenu = this.revealMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  revealMenu() {
    $('#profile-menu').removeClass('hide');
  }

  hideMenu() {
    $('#profile-menu').addClass('hide');
  }
  
  render() {
    return (
      <div className="profile-container">
        <img 
          className="profile-pic" 
          src={window.profilePic} 
          onMouseLeave={this.hideMenu} 
          onMouseEnter={this.revealMenu} 
        />

        <ProfileMenuContainer />
      </div>
    );
  }
}

export default Profile;