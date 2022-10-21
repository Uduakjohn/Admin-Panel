import React from 'react';
import "./Topbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';


function Topbar() {
  return (
    <div className='topbar'>
    <div className='topbarWrapper'>
    <div className='topLeft'>
    <span className='logo'>
      <img className='logo' src='/images/logo.png' alt=''/>
    </span>
    </div>
    <div className='topRight'>
      <div className="topbarIconContainer">
          <NotificationsIcon/>
          <span className='topIconBadge'>2</span>
      </div>

      <div className="topbarIconContainer">
          <LanguageIcon/>
          <span className='topIconBadge'>2</span>
      </div>

      <div className="topbarIconContainer">
          <SettingsIcon/>
      </div>
      <img src='/images/profile.JPG' className='topAvater' alt=''/>
    </div>
    </div>
    </div>
  )
}

export default Topbar
