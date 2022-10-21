import React from 'react';
import "./featuredInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <div className='featured'>
    <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
        <span className='featuredMoney'>$2,500</span>
        <span className='featuredMoneyRate'>
        -11.5 <ArrowDownwardIcon className='featuredIcon negative' /> 
        </span>
    </div>

    <span className='featuredSub'>Compared To Last Month</span>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
        <span className='featuredMoney'>$4,500</span>
        <span className='featuredMoneyRate'>
        -1.5<ArrowDownwardIcon className='featuredIcon negative'/> 
        </span>
    </div>

    <span className='featuredSub'>Compared To Last Month</span>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
        <span className='featuredMoney'>$2,430</span>
        <span className='featuredMoneyRate'>
        +8.3<ArrowUpwardIcon className='featuredIcon'/> 
        </span>
    </div>

    <span className='featuredSub'>Compared To Last Month</span>
    </div>
    </div>
  )
}

export default FeaturedInfo
