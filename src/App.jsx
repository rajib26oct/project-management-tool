import React, { Component } from 'react';
import Header from './components/header';
import Stepper from './components/stepper';
import './App.css';
import SideNavBar from './components/sideNavBar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import createProjectData from './assets/createProject.json';


class App extends Component {
  state = {  };
  
  async componentDidMount(){
    //const {data: createProject} = await http.get(apiEndPoint);
  }

  render() { 
    const stepperData = createProjectData.stepper;
    const viewsDefaultValue = createProjectData.viewsDefaultValue;
    return ( 
      <div className="App">
        <ToastContainer/>
        <Header></Header>
        <div className="panel">
        
            <div className="panel-left shadow p-3 mb-5 bg-white rounded mr-4">
                <div className="profile-container">
                  <div className="profile-section">
                    Profile Icon and Name
                  </div>
                </div>
                <SideNavBar/>
                <div className="logout-container">
                  <div className="logout-section">Log out button</div>
                </div>
            </div>
            <div className="gap"></div>
            <div className="panel-right shadow p-3 mb-5 bg-white rounded">
                <h4>Project Creation Workflow(max 20 steps)</h4> 
                <Stepper key="1" totalSteps={stepperData.length} stepperData={stepperData} viewsValue={viewsDefaultValue}/>
            </div>
         
       </div>
      { /*<Stepper key="1" totalSteps="6" stepperData={stepperData}/>*/}
    </div>
     );
  }
}
 
export default App;
