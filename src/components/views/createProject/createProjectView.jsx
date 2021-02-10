import React, { Component } from 'react';
import ProjectDemographics from "./projectDemographics";
import ContractDetails from './contractDetails';
import Scope from './scope';
import KeyContacts from './keyContacts';
import Risk from './risk';



class CreateProjectView extends Component {
    state = { 
        cpFormData:this.props.cpFormData
     };
    
    handleChange = (evt,index) =>{
        //this.props.onChangeFormFields(evt);
        const cpFormData = {...this.state.cpFormData};
        if(this.props.viewName === 'risk'){
            cpFormData[this.props.viewName][index][evt.currentTarget.name] = evt.currentTarget.value;
        }else{
            cpFormData[this.props.viewName][evt.currentTarget.name] = evt.currentTarget.value;
        }
        this.setState({cpFormData});
    }

    handleDropdown = evt =>{
        const cpFormData = {...this.state.cpFormData};
        cpFormData[this.props.viewName][evt.currentTarget.name] = evt.currentTarget.value;
        this.setState({cpFormData});
    }

    onSelectedDate = (date,name,index) =>{
        //console.log(evt)
        const cpFormData = {...this.state.cpFormData};
        if(this.props.viewName === 'risk'){
            cpFormData[this.props.viewName][index][name] = date;
        }else{
            cpFormData[this.props.viewName][name] = date;
        }
        this.setState({cpFormData});

    }


    render() { 

        switch (this.props.view) {
            case 'view1':
                return ( <ProjectDemographics 
                        projectDemographic={this.props.cpFormData.projectDemographic}
                        cpFieldsDefaultData={this.props.cpFieldsDefaultData.projectDemographic}
                        inputChangeHandler={this.handleChange}
                        selectChangeHandler={this.handleDropdown}
                  /> );
            case 'view2':
                return( <ContractDetails
                    contractDetails={this.props.cpFormData.contractDetails}
                    inputChangeHandler={this.handleChange}
                    onSelectedDateHandler={this.onSelectedDate}
                />);
            case 'view3':
                 return(<Scope
                    scope={this.props.cpFormData.scope}
                    cpFieldsDefaultData={this.props.cpFieldsDefaultData.scope}
                    inputChangeHandler={this.handleChange}
                    selectChangeHandler={this.handleDropdown}
                />);
            case 'view4':
                return(<KeyContacts
                    keyContacts={this.props.cpFormData.keyContacts}
                    inputChangeHandler={this.handleChange}
                />);
            case 'view5':
                return(<Risk
                    risk={this.props.cpFormData.risk}
                    cpFieldsDefaultData={this.props.cpFieldsDefaultData.risk}
                    inputChangeHandler={this.handleChange}
                    onSelectedDateHandler={this.onSelectedDate}
                />);
            
        
            default: return(<div>{this.props.view} content</div>);
        }
    
    }
}
 
export default CreateProjectView;