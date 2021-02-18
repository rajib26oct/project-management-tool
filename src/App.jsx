import React, { Component } from 'react';
import { Route, Switch, Redirect  } from "react-router-dom";
import Header from './components/header';
import SideNavBar from './components/sideNavBar';
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/views/dashboard";
import CreateProject from './components/views/createProject/createProject';
import NotFound from "./components/views/notFound";
import CalendarView from './components/views/calendar';
import Tasks from './components/views/tasks';
import UsersManager from './components/views/usersManager';
import PaymentView from './components/views/payment';
import Managers from './components/views/managers';
import _ from 'lodash';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/common.css';

import createProjectData from './assets/createProject.json';


class App extends Component {
  state = {  };
  
  async componentDidMount(){
    const defaultRisk = {...createProjectData.fieldsDefaultData['risk']['defaultRisk']};
    const phaseOfProjects = [...createProjectData.fieldsDefaultData['scope']['phaseOfProjects']];
    //console.log(phaseOfProjects)
    
    createProjectData.createProjectFormData['risk'].push(defaultRisk);
    createProjectData.createProjectFormData['scope']['phaseOfProjects'] = phaseOfProjects;
    createProjectData.initialFormData = _.cloneDeep(createProjectData.createProjectFormData);
    //const {data: createProject} = await http.get(apiEndPoint);
  }

  render() { 
    
    return ( 
      <div className="App">
        <ToastContainer/>
        <Header></Header>
        <div className="panel">
        
            <div className="panel-left shadow p-3 mb-5 bg-white rounded mr-4">
                <div className="profile-container">
                  <div className="profile-section">
                    <div className="profile-photo">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <span className="user-name">Test User</span>
                  </div>
                </div>
                <SideNavBar/>
                <div className="logout-container">
                  <div className="logout-section">
                     <div className="logout-icon">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                        <span className="nav-link-text">Log out</span>
                     </div>
                  </div>
                </div>
            </div>
            <div className="gap"></div>
            <div className="content panel-right shadow p-3 mb-5 bg-white rounded">
                <Switch>
                  <Route path="/calendar" component={CalendarView} />
                  
                  <Route path="/create-project" render={()=><CreateProject createProjectData={createProjectData}/>} />
                  <Route path="/tasks" component={Tasks} />
                  <Route path="/user-manager" component={UsersManager} />
                  <Route path="/managers" component={Managers} />
                  <Route path="/payments" component={PaymentView} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/" exact component={Dashboard} />
                  <Redirect to="/not-found" />
                </Switch>
            </div>
         
       </div>
      { /*<Stepper key="1" totalSteps="6" stepperData={stepperData}/>*/}
    </div>
     );
  }
}
 
export default App;
