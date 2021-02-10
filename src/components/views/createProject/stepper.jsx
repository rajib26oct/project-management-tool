import React, { Component } from 'react';
import CreateProjectView from './createProjectView';
import http from '../../../services/httpService';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

Cookies.set('token',  uuidv4())

const apiEndPoint = "http://20.37.49.29:80/api/cp";

class Stepper extends Component {
    state = {
        currentStep: 1,
        data: this.props.stepperData,
        cpFormData: this.props.createProjectFormData,
        cpFieldsDefaultData: this.props.fieldsDefaultData
      }

    componentDidMount(){
       const index = this.state.data.findIndex(step => step.action ==="active");
       this.setState({currentStep:index+1});
    }

    updateView = view => {
        let currentStep = this.state.currentStep;

        if(view === 'next' && this.state.currentStep < this.props.totalSteps){
            currentStep++;
        }else if(view === 'prev' && this.state.currentStep > 1){
            currentStep--;
        }

        const data  = this.state.data.map(stepData => {
            if(this.state.currentStep === stepData.id && view === 'next'){
                stepData.action = "done";
            }else if(currentStep === stepData.id && view === 'next'){
                stepData.action = "active";
            }else if(this.state.currentStep === stepData.id && view === 'prev'){
                stepData.action = "";
            }else if(currentStep === stepData.id && view === 'prev'){
                stepData.action = "active";
            }
            return stepData;
        });

        let updatedState = {
            currentStep: currentStep,
            data: data
        }
        this.setState(updatedState);
       console.log(`${view}  ${currentStep}`);
    };

    onSubmitProjectInformation = async () => {
        const csrfToken = Cookies.get('token');
        const options = {
            headers: {
                'X-CSRFToken': csrfToken
            }
        };
        const requestPayLoad = {...this.state.cpFormData};
        requestPayLoad.uuid = uuidv4();
        requestPayLoad.timestamp = new Date().valueOf();
        const response = await http.post(apiEndPoint,requestPayLoad,options);
        //toast.success(response.message);
        toast.success("Project is created with the name of "+ response.project_id);
    };

    

    render() {
        
        const index = this.state.data.findIndex(step => step.action ==="active");
        
       // this.setState({currentStep:index});

        let currentView = "view"+this.state.currentStep;

        const currentStepObj = this.state.data[this.state.currentStep-1];

        let viewName = this.state.data[this.state.currentStep-1].name;
        
        return (
            <div>
                <div className="stepper-horizontal" id="stepper1">
                    {
                        this.state.data.map(stepData => 
                            <div key={stepData.id} className={this.getClasses(stepData)}>
                                <div className="step-circle"><span>{stepData.id}</span></div>
                                <div className="step-title">{stepData.label}</div>
                                <div className="step-bar-left"></div>
                            </div>
                        )
                    }
                </div>
                
                <CreateProjectView 
                    view={currentView} 
                    viewName={viewName} 
                    cpFormData={this.state.cpFormData}
                    cpFieldsDefaultData={this.state.cpFieldsDefaultData}/>

                
                {this.getButtons(currentStepObj)}
            </div>
        );
    }

    getClasses(stepData){
       let classes = "step ";
       classes += stepData.action !=="" ? stepData.action : "";
       return classes;
    }

    getButtons(currentStepObj){
        /*let classes = "btn btn-dark btn-lg ml-2 ";
        if(this.state.currentStep === this.props.totalSteps){
           classes += (btnType === "submit") ? "" : "display-hide";
        } else{
            classes += (btnType === "submit") ? "display-hide" : "";
        }
        return classes;*/
        let disabled = false;
        disabled = this.state.currentStep === 1 ? true : false;
        if(currentStepObj['name'] != "confirmation"){
            return(
                <div className="button-container">
                    <button type="button" onClick={() => this.updateView('prev')} className="btn btn-dark btn-lg ml-2" disabled={disabled}><i className="fa fa-caret-left" aria-hidden="true"></i>{currentStepObj['footer-buttons'][0].label}</button>
                    <button type="button" onClick={() => this.updateView('next')}  className="btn btn-dark btn-lg ml-2" >{currentStepObj['footer-buttons'][1].label}<i className="fa fa-caret-right" aria-hidden="true"></i></button>
                </div>
            )
        }else{
            return(
               <div className="button-container">
                   <button type="button" onClick={() => this.updateView('prev')} className="btn btn-dark btn-lg ml-2"><i className="fa fa-caret-left" aria-hidden="true"></i>Back</button>
                   <button type="button" onClick={() => this.onSubmitProjectInformation()} className="btn btn-dark btn-lg ml-2">Submit</button>
               </div> 
            )
        }

    }
}
 
export default Stepper;