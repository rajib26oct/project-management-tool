import React, { Component } from 'react';
import Views from './views';


class Stepper extends Component {
    state = {
        currentStep: 1,
        data: this.props.stepperData
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

    render() { 
        let disabled = false;
        disabled = this.state.currentStep === 1 ? true : false;

        let currentView = "view"+this.state.currentStep;
        
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
                
                <Views view={currentView}/>
                <div class="button-container">
                    <button type="button" onClick={() => this.updateView('prev')} className="btn btn-dark btn-lg ml-2" disabled={disabled}>Not Sure</button>
                    <button type="button" onClick={() => this.updateView('next')}  className="btn btn-dark btn-lg ml-2" >Yes, I'm Sure</button>
                </div>
            </div>
        );
    }

    getClasses(stepData){
       let classes = "step ";
       classes += stepData.action !=="" ? stepData.action : "";
       return classes;
    }
}
 
export default Stepper;