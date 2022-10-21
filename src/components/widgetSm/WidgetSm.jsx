import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Members</span>
      <ul className='widgetSmList'>
      <li className='widgetSmListItem'>
        <img className='widgetSmImg' src='https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-in-a-server-room-picture-id1334003868?b=1&k=20&m=1334003868&s=170667a&w=0&h=EwTfm0J1ShheaesCe974kkYItnkp9LHdI9HlfHINKaM=' alt=''/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Ekemini</span>
        <span className='widgetSmUserTitle'>Engineer</span>

        </div>
        <button className='widgetSmButton'>
            <VisibilityIcon  className="widgetSmIcon" />
            Display
        </button>
      </li>

      <li className='widgetSmListItem'>
        <img className='widgetSmImg' src='https://media.istockphoto.com/photos/woman-entrepreneur-at-seminar-giving-presentation-picture-id1358219358?b=1&k=20&m=1358219358&s=170667a&w=0&h=gPitSBKZiBdRG1qS9h8NyxNggZz57akoUHBXqS_31sg=' alt=''/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Unwana</span>
        <span className='widgetSmUserTitle'>Data Analyst</span>

        </div>
        <button className='widgetSmButton'>
            <VisibilityIcon  className="widgetSmIcon" />
            Display
        </button>
      </li>

      <li className='widgetSmListItem'>
        <img className='widgetSmImg' src='/images/kemy.JPG' alt=''/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Kemy</span>
        <span className='widgetSmUserTitle'>Data Analyst</span>

        </div>
        <button className='widgetSmButton'>
            <VisibilityIcon  className="widgetSmIcon" />
            Display
        </button>
      </li>

      <li className='widgetSmListItem'>
        <img className='widgetSmImg' src='https://plus.unsplash.com/premium_photo-1661558870871-2350c2559583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt=''/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Iddy</span>
        <span className='widgetSmUserTitle'>Doctor</span>

        </div>
        <button className='widgetSmButton'>
            <VisibilityIcon  className="widgetSmIcon" />
            Display
        </button>
      </li>

      <li className='widgetSmListItem'>
        <img className='widgetSmImg' src='/images/profile.JPG' alt=''/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Uduak</span>
        <span className='widgetSmUserTitle'>Software Developer</span>

        </div>
        <button className='widgetSmButton'>
            <VisibilityIcon  className="widgetSmIcon" />
            Display
        </button>
      </li>

      </ul>
    </div>
  );
}

export default WidgetSm
