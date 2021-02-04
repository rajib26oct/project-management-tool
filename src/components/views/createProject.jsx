import React from "react";
import Stepper from '../stepper';

import createProjectData from '../../assets/createProject.json';

const CreateProject = () => {
  const stepperData = createProjectData.stepper;
  const viewsDefaultValue = createProjectData.viewsDefaultValue;
  
  
  return (
    <React.Fragment>
      <h4>Project Creation Workflow(max 20 steps)</h4> 
      <Stepper key="1" totalSteps={stepperData.length} 
        stepperData={stepperData} 
        viewsValue={viewsDefaultValue}/>
    </React.Fragment>
  );
};

export default CreateProject;
