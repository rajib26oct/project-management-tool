import React from "react";
import Stepper from './stepper';

import '../../../assets/css/stepper.css';
import '../../../assets/css/createProject.css';

//import createProjectData from '../../../assets/createProject.json';


const CreateProject = (props) => {
  const stepperData = props.createProjectData.stepper;
  const createProjectFormData = props.createProjectData.createProjectFormData;
  const fieldsDefaultData = props.createProjectData.fieldsDefaultData;

  
  return (
    <React.Fragment>
      <h4 className="page-title">Create Project</h4> 
      <Stepper key="1" totalSteps={stepperData.length} 
        stepperData={stepperData} 
        createProjectFormData={createProjectFormData}
        fieldsDefaultData={fieldsDefaultData}/>
    </React.Fragment>
  );
};

export default CreateProject;
