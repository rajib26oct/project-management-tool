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
        let disabled = false;
        const index = this.state.data.findIndex(step => step.action ==="active");
        disabled = this.state.currentStep === 1 ? true : false;

        
       // this.setState({currentStep:index});

        let currentView = "view"+this.state.currentStep;

        var viewName = this.state.data[this.state.currentStep-1].name;
        
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

                
                <div className="button-container">
                    <button type="button" onClick={() => this.updateView('prev')} className={this.getDisplayClasses('')} disabled={disabled}><i className="fa fa-caret-left" aria-hidden="true"></i>Not Sure</button>
                    <button type="button" onClick={() => this.updateView('next')}  className={this.getDisplayClasses('')} >Yes, I'm Sure <i className="fa fa-caret-right" aria-hidden="true"></i></button>
                    <button type="button" onClick={() => this.onSubmitProjectInformation()} className={this.getDisplayClasses('submit')}>Submit Data</button>
                </div>
            </div>
        );
    }

    getClasses(stepData){
       let classes = "step ";
       classes += stepData.action !=="" ? stepData.action : "";
       return classes;
    }

    getDisplayClasses(btnType){
        let classes = "btn btn-dark btn-lg ml-2 ";
        if(this.state.currentStep === this.props.totalSteps){
           classes += (btnType === "submit") ? "" : "display-hide";
        } else{
            classes += (btnType === "submit") ? "display-hide" : "";
        }
        return classes;
    }
}
 
export default Stepper;