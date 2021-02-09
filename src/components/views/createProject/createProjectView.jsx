import React, { Component } from 'react';
import ProjectDemographics from "./projectDemographics";
import DatePickerComp from "../../datePickerComp";
import _ from 'lodash';



class CreateProjectView extends Component {
    state = { 
        cpFormData:this.props.cpFormData
     };
    
    handleChange = evt =>{
        //this.props.onChangeFormFields(evt);
        const cpFormData = {...this.state.cpFormData};
        cpFormData[this.props.viewName][evt.currentTarget.name] = evt.currentTarget.value;
        this.setState({cpFormData});
    }

    handleDropdown = evt =>{
        debugger;
    }

    onSelectedDate = (date,name) =>{
        //console.log(evt)
        const cpFormData = {...this.state.cpFormData};
        cpFormData[this.props.viewName][name] = date;
        this.setState({cpFormData});

    }

    getTimeDifference = () =>{
        const {projectStartDate, projectDuration} = this.state.cpFormData.timeline;
        const date1 = new Date(projectStartDate).valueOf();
        const date2 = new Date(projectDuration).valueOf();
        if(date1 > date2){
            return "";
        }
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        if(_.isNaN(diffDays)){
            return "";
        }else{
            return `Total number of days is ${diffDays}`;
        }
    }

    render() { 
        
        if(this.props.view === 'view1') {
          return ( <ProjectDemographics 
                        projectDemographic={this.props.cpFormData.projectDemographic}
                        cpFieldsDefaultData={this.props.cpFieldsDefaultData.projectDemographic}
                        inputChangeHandler={this.handleChange}
                        selectChangeHandler={this.handleDropdown}
                  /> );
        }else if(this.props.view === 'view2'){
            return( <div className="views view-2">   
                        <form>
                            <div className="form-group">
                                <label>When do you think the project will start</label>
                                <div className="input-group date" data-date-format="dd.mm.yyyy">
                                    <DatePickerComp name="projectStartDate"
                                       selectedDate={this.state.cpFormData.timeline.projectStartDate}
                                       onSelectDate={this.onSelectedDate}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>How long will the project last</label>
                                <div className="input-group date" data-date-format="dd.mm.yyyy">
                                    <DatePickerComp name="projectDuration"
                                       selectedDate={this.state.cpFormData.timeline.projectDuration}
                                       onSelectDate={this.onSelectedDate}/>
                                    <span className="">{this.getTimeDifference()}</span>
                                </div>
                            </div>
                            
                        </form>    
                </div>);
        }else{
            return(<div>{this.props.view} content</div>);
        }
    }
}
 
export default CreateProjectView;