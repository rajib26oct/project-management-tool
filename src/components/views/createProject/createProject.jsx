import React from "react";
import Stepper from './stepper';

import '../../../assets/css/stepper.css';
import '../../../assets/css/createProject.css';

//import createProjectData from '../../../assets/createProject.json';


const CreateProject = (props) => {
  /*const stepperData = props.createProjectData.stepper;
  const createProjectFormData = props.createProjectData.createProjectFormData;
  const fieldsDefaultData = props.createProjectData.fieldsDefaultData;*/

  const {stepper: stepperData,createProjectFormData,fieldsDefaultData, initialFormData} = props.createProjectData;

  
  return (
    <React.Fragment>
      <h4 className="page-title">Create Project</h4> 
      <Stepper key="1" totalSteps={stepperData.length} 
        stepperData={stepperData} 
        createProjectFormData={createProjectFormData}
        fieldsDefaultData={fieldsDefaultData}
        initialFormData={initialFormData}/>
    </React.Fragment>
  );
};

export default CreateProject;
