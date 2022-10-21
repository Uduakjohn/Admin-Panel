import React from 'react'
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
          <Link to="/" className='link'>
          <li className='sidebarListItem active'>
          <LineStyleIcon className='sidebarIcon'/>
            Home
          </li>
          </Link>

          <li className='sidebarListItem'>
          <TimelineIcon className='sidebarIcon'/>
            Analytics
          </li>

          <li className='sidebarListItem'>
          <TrendingUpIcon className='sidebarIcon'/>
            Sales
          </li>

          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
          <Link to="/users" className='link'>
          <li className='sidebarListItem active'>
          <PermIdentityIcon className='sidebarIcon'/>
            Users
          </li>
          </Link>

          <Link to="/products" className='link'>
          <li className='sidebarListItem'>
          <StorefrontIcon className='sidebarIcon'/>
            products
          </li>
          </Link>

          <li className='sidebarListItem'>
          <PaidIcon className='sidebarIcon'/>
            Transactions
          </li>

          <li className='sidebarListItem'>
          <AssessmentIcon className='sidebarIcon'/>
            Reports
          </li>

          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
          <li className='sidebarListItem active'>
          <EmailIcon className='sidebarIcon'/>
            mail
          </li>

          <li className='sidebarListItem'>
          <ForumIcon className='sidebarIcon'/>
            Feedback
          </li>

          <li className='sidebarListItem'>
          <MessageIcon className='sidebarIcon'/>
            Messages
          </li>

          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
          <li className='sidebarListItem active'>
          <AssignmentIndIcon className='sidebarIcon'/>
            Manage
          </li>

          <li className='sidebarListItem'>
          <TimelineIcon className='sidebarIcon'/>
            Analytics
          </li>

          <li className='sidebarListItem'>
          <ReportIcon className='sidebarIcon'/>
            Reports
          </li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
