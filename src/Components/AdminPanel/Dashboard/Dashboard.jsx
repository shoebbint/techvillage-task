import React, { PureComponent } from 'react';
import { LineChart, ResponsiveContainer } from 'recharts';
import Example from './Charts/WeeklySales/WeeklySales';
import WeeklySales from './Charts/WeeklySales/WeeklySales';
import Charts from './Charts/Charts/Charts';
import { faArrowUpRightDots, faCalendarCheck, faCalendarWeek} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Dashboard = () => {
  return (
    <div className='px-5 text-center '>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5  text-2xl '>
        <div className="card  bg-secondary text-primary-content ">
          <div className="card-body">
          <FontAwesomeIcon icon={faCalendarWeek} beat size="xl" />
            <h2 className=" ">Today Orders</h2>
            <div className="stat-value">31K</div>
          </div>
        </div>
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
          <FontAwesomeIcon icon={faCalendarCheck} beat size="xl" />
            <h2 className=" ">This Month </h2>
            <div className="stat-value">31K</div>
          </div>
        </div>
        <div className="card  bg-orange-200 text-primary-content">
          <div className="card-body">
          <FontAwesomeIcon icon={faArrowUpRightDots} beat size="xl" />
            <h2 className=" ">All-Time Sales</h2>
            <div className="stat-value">31K</div>

          </div>
        </div>
      </div>
      <div className="stats shadow grid md:grid-cols-3 sm:grid-cols-1 my-5 gap-5">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="stat-title">Total Products</div>
          <div className="stat-value">5K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-title">Pending Orders</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

      </div>
<Charts></Charts>

    </div>
  );
};

export default Dashboard;