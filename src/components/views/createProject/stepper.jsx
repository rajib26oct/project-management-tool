import React, { Component } from 'react';
import CreateProjectView from './createProjectView';
import http from '../../../services/httpService';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie'
import { toast } from "react-toastify";
import Joi from "joi-browser";
import _ from 'lodash';

Cookies.set('token',  uuidv4())

const apiEndPoint = "http://20.37.49.29:80/api/cp";

class Stepper extends Component {
    state = {
        currentStep: 1,
        data: this.props.stepperData,
        cpFormData: this.props.createProjectFormData,
        cpFieldsDefaultData: this.props.fieldsDefaultData,
        isFreezeStepperProgress: false,
        errors: {}
      }

    componentDidMount(){
       const index = this.state.data.findIndex(step => step.action ==="active");
       this.setState({currentStep:index+1});
       document.title = 'Create Project';
    }

    updateView = view => {
        const viewName = this.state.data[this.state.currentStep-1].name;
        
        if(viewName !== 'risk' && viewName !== 'confirmation' && view === 'next'){
            const errors = this.validate();
            this.setState({ errors: errors || {} });
            if (errors) return;
        }

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
            }else if(this.state.currentStep === stepData.id && view === 'prev' && !this.state.isFreezeStepperProgress){
                stepData.action = "";
            }else if(this.state.currentStep === stepData.id && view === 'prev' && this.state.isFreezeStepperProgress){
                stepData.action = "done";
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

    onSubmitProjectInformation = async (e) => {
        const csrfToken = Cookies.get('token');
        const options = {
            headers: {
                'X-CSRFToken': csrfToken
            }
        };
        const requestPayLoad = _.cloneDeep(this.state.cpFormData);//{...this.state.cpFormData};
        const phaseOfProjects =[];
        requestPayLoad['scope']['phaseOfProjects'].map(obj=>{
            if(obj.isChecked){phaseOfProjects.push(obj.value)}
        });
        requestPayLoad['scope']['phaseOfProjects'] = phaseOfProjects;
        requestPayLoad.uuid = uuidv4();
        requestPayLoad.timestamp = new Date().valueOf();
        const response = await http.post(apiEndPoint,requestPayLoad,options);
        //toast.success(response.message);
        toast.success("Successfully created the project",{
            position: toast.POSITION.TOP_CENTER
        });
    };

    handleChange = (evt,index) =>{
        const { currentTarget: input } = evt;
        const viewName = this.state.data[this.state.currentStep-1].name;
        let errors = {};
        
        const cpFormData = {...this.state.cpFormData};
        if(viewName === 'risk'){
            cpFormData[viewName][index][input.name] = input.value;
        }else{
            errors = this.getError(input);
            cpFormData[viewName][input.name] = input.value;
        }
        this.setState({cpFormData, errors});
    }

    handleDropdown = (evt,index) =>{
        const { currentTarget: input } = evt;
        const viewName = this.state.data[this.state.currentStep-1].name;
        let errors = {};

        const cpFormData = {...this.state.cpFormData};
        if(viewName === 'risk'){
            cpFormData[viewName][index][input.name] = input.value;
        }else{
            errors = this.getError(input);
            cpFormData[viewName][input.name] = input.value;
        }
        this.setState({cpFormData,errors});
    }

    onSelectedDate = (date,name,index) =>{
        if(name === undefined){
            return;
        }
        const viewName = this.state.data[this.state.currentStep-1].name;
        let errors = {};
        //console.log(evt)
        const cpFormData = {...this.state.cpFormData};
        if(viewName === 'risk'){
            cpFormData[viewName][index][name] = date;
        }else{
            errors = this.getError({name: name, value: date});
            cpFormData[viewName][name] = date;
        }
        this.setState({cpFormData, errors});

    }

    handleCheckbox = evt =>{
        const { currentTarget: input } = evt;
        const viewName = this.state.data[this.state.currentStep-1].name;
        let errors = {};
        errors = this.getError(input);

        const cpFormData = {...this.state.cpFormData};
        const checked = evt.target.checked;
        const selectedValue = input.value;

        cpFormData[viewName][input.name].filter(obj => {
            if(obj.value === selectedValue){obj.isChecked = checked;}
        });
        
        const isValidateCheckBoxes = this.validateCheckboxes(cpFormData[viewName][input.name]);
        if(isValidateCheckBoxes && errors["phaseOfProjects"] !=undefined){delete errors["phaseOfProjects"]}

        this.setState({cpFormData,errors});
    }

    validateCheckboxes = arrayObj =>{
        const selectedCheckboxObj = arrayObj.find(obj=>{
            if(obj.isChecked){
                return obj;
            }
        });

        if(selectedCheckboxObj !== undefined){return true}
        return false;
    }

    handleAddRiskRows = () =>{
        const cpFormData = {...this.state.cpFormData};
        const defaultRisk = _.cloneDeep(this.state.cpFieldsDefaultData.risk.defaultRisk);
        cpFormData.risk.push(defaultRisk);
        this.setState({cpFormData});
    }

    getError = (input)=>{
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage!=null){
            errors[input.name] = errorMessage;
        } 
        else{
            delete errors[input.name];

        }
        return errors;
    }
    
    validate = () => {
        const options = { abortEarly: false };
        const viewName = this.state.data[this.state.currentStep-1].name;
        const { error } = Joi.validate(this.state.cpFormData[viewName], this.schema[viewName], options);
        //const { error } = this.schema.validate(this.state.cpFormData[viewName]);
        if (!error) return null;

        let errors = {};
        if(error.details !==undefined){
            error.details = _.uniqBy(error.details, function (item) {
                return item.path[0];
            });
        }

        for (let item of error.details){
            errors[item.path[0]] = item.message;
        }

        if(viewName === "scope"){
            const isValidateCheckBoxes = this.validateCheckboxes(this.state.cpFormData[viewName]["phaseOfProjects"]);
            if(isValidateCheckBoxes && errors["phaseOfProjects"] != undefined){
                delete errors["phaseOfProjects"];
                if(_.isEmpty(errors)) errors = null;
            }
        }
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const viewName = this.state.data[this.state.currentStep-1].name;
        const obj = { [name]: value };
        const schema = { [name]: this.schema[viewName][name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    goToStep = step =>{
        //const isFreezeStepperProgress = true;
        const data  = this.state.data.map(stepData => {
            if(step === stepData.id){
                stepData.action = "active";
            }
            return stepData;
        });

        let updatedState = {
            currentStep: step,
            data: data,
            isFreezeStepperProgress: true
        }
        this.setState(updatedState);
        //this.setState({isFreezeStepperProgress});
    }

    schema = {
        projectDemographic:{
            /*clientName: Joi.string().empty(''),
            projectName: Joi.string().empty(''),
            additionalComments: Joi.string().empty(''),
            portfolio: Joi.string().empty(''),
            lifeCyclePhase: Joi.string().empty(''),
            country: Joi.string().empty('')*/
            
            clientName: Joi.string().required().label("Client Name").min(3).max(30),
            projectName: Joi.string().required().label("Project Name").min(3).max(30),

            additionalComments: Joi.string().empty(''),

            portfolio: Joi.string().required().min(2).error(() => { return { message: 'Please choose Portfolio'};}),

            lifeCyclePhase: Joi.string().required().min(2).error(() => {return {message: 'Please Choose Project Phase'};}),
            country: Joi.string().required().min(2).error(() => {return {message: 'Please select country'};})
        },

        contractDetails:{
            startDate: Joi.date().raw().required().label("Project start date"),
            endDate: Joi.date().raw().required().label("Project end date"),
            dealSize: Joi.number().positive().greater(0).required().label("Deal Size")
        },

        scope:{
            technologies: Joi.string().required().label("Technologies").min(3).max(30),
            solutionDescription: Joi.string().empty(''),
            deliveryType: Joi.string().required().min(2).error(() => { return { message: 'Please choose Delivery Type'};}),
            phaseOfProjects: Joi.array().items(
                Joi.object({
                    isChecked: Joi.boolean().invalid(false),
                    value:Joi.string(),
                    label:Joi.string()
                })
            ).error(() => { return { message: 'Please choose atleast one phase Of Projects'};})
        },

        keyContacts:{
            managingDirector: Joi.string().required().label("Managing Director").min(3).max(30),
            deliveryLead: Joi.string().required().label("Delivery Lead").min(3).max(30),
            deliveryManager: Joi.string().required().label("Delivery Manager").min(3).max(30),
            alternateContact: Joi.string().empty('')
        }
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
                    cpFieldsDefaultData={this.state.cpFieldsDefaultData}
                    inputChangeHandler={this.handleChange}
                    selectChangeHandler={this.handleDropdown}
                    onSelectedDateHandler={this.onSelectedDate}
                    chooseCheckboxHandler={this.handleCheckbox}
                    addNewRow={this.handleAddRiskRows}
                    goToStep={this.goToStep}
                    errors={this.state.errors}
                    schema={this.schema}/>

                
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