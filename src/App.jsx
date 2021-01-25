import Header from './components/header';
import Stepper from './components/stepper';
import './App.css';
import SideNavBar from './components/sideNavBar';


function App() {
  const stepperData = [
    {
      id: 1,
      label: "Project Demograpics",
      action: "active"
    },
    {
      id: 2,
      label: "Timeline",
      action: ""
    },
    {
      id: 3,
      label: "Project Team",
      action: ""
    },
    {
      id: 4,
      label: "Risk",
      action: ""
    },
    {
      id: 5,
      label: "Dependency",
      action: ""
    },
    {
      id: 6,
      label: "Confirm/Create",
      action: ""
    }

  ];
  

  return (
    
    <div className="App">
      
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
                <Stepper key="1" totalSteps="6" stepperData={stepperData}/>
            </div>
         
       </div>
      { /*<Stepper key="1" totalSteps="6" stepperData={stepperData}/>*/}
    </div>
  );
}

export default App;
