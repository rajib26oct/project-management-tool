import React, { Component } from 'react';
import ProjectDemographics from "./projectDemographics";
import ContractDetails from './contractDetails';
import Scope from './scope';



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
        const cpFormData = {...this.state.cpFormData};
        cpFormData[this.props.viewName][evt.currentTarget.name] = evt.currentTarget.value;
        this.setState({cpFormData});
    }

    onSelectedDate = (date,name) =>{
        //console.log(evt)
        const cpFormData = {...this.state.cpFormData};
        cpFormData[this.props.viewName][name] = date;
        this.setState({cpFormData});

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
            return(
                <ContractDetails
                    contractDetails={this.props.cpFormData.contractDetails}
                    inputChangeHandler={this.handleChange}
                    onSelectedDateHandler={this.onSelectedDate}
                />
             );
        }else if(this.props.view === 'view3'){
            return(
                <Scope
                    scope={this.props.cpFormData.scope}
                    cpFieldsDefaultData={this.props.cpFieldsDefaultData.scope}
                    inputChangeHandler={this.handleChange}
                    selectChangeHandler={this.handleDropdown}
                />
             );
        }
        else{
            return(<div>{this.props.view} content</div>);
        }
    }
}
 
export default CreateProjectView;