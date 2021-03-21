import React,{ Component } from "react";

import '../../assets/css/dashboard.css';
import LineChart from "../common/lineChart";
import Piechart from "../common/pieChart";

const Dashboard = () => {
  document.title = 'Home';
  return (
    <div className='dashboard'>
      
      <div className="top-panel row">
        <div className="chart-panel shadow rounded bg-white mr-4">
          <h4 className="page-title">Projects</h4>
          <hr/>
          <Piechart/>
          <div className="container progress-container">
            
            <div className="chart-info-title row">
              <span className='col-3'><h4 className="page-title">Op-Ex</h4></span>
              <div className='col-7 text-right'>
                Number of Active projects <span className="number-of-projects">45</span>
              </div>
              
            </div>
            <div className="progress mb-4">
              <div className="progress-bar" style={{"width" : "40%"}}>
                40%
              </div>
            </div>

            <div className="progress mb-4">
              <div className="progress-bar bg-info" style={{"width" : "60%"}}>
                60%
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{"width" : "70%"}}>
                70%
              </div>
            </div>
            
          </div>
        </div>
        <div className="right-panel">
           <div className="panel-1 shadow rounded bg-white mb-4 p-2">
              <h4 className="font-size-20">Total Budget</h4>
              <hr/>
              <div className='circle bg-warning text-center pt-2 ml-2'>
                $
              </div>
              <span className="font-weight-bold ml-3 font-size-20">40,430980</span>
           </div>
           <div className="panel-2 shadow rounded bg-white p-2">
              <h4 className="font-size-20">Go Live in Next</h4>
              <hr/>
              <span className="table-view">
                  <span className="border p-2">Months</span>
                  <span className="border-right border-top border-bottom p-2">3 Months</span>
                  <span className="border-right border-top border-bottom p-2">6 Months</span>
                  <span className="border-right border-top border-bottom p-2">All</span>
                  <span className="font-weight-bold ml-3 font-size-20">2</span>
              </span>
           </div>
        </div>
      </div>

      <div className="row bottom-panel mt-4">
        <div className="chart-panel shadow rounded bg-white mr-4 p-2">
          <h4 className="page-title">Planned vs Actual Spent</h4>
          <hr/>
          <LineChart label='# Actual Spent'/>
        </div>
        <div className="chart-panel shadow rounded bg-white p-2">
          <h4 className="page-title">Planned vs Actual Delivery Progress</h4>
          <hr/>
          <LineChart label='# Delivery Progress'/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
