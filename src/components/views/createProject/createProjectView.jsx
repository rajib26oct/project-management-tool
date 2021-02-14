import React, { Component } from 'react';
import ProjectDemographics from "./projectDemographics";
import ContractDetails from './contractDetails';
import Scope from './scope';
import KeyContacts from './keyContacts';
import Risk from './risk';
import Confirmation from './confirmation';


class CreateProjectView extends Component {
    
    render() { 

        switch (this.props.view) {
            case 'view1':
                return ( <ProjectDemographics 
                        projectDemographic={this.props.cpFormData.projectDemographic}
                        cpFieldsDefaultData={this.props.cpFieldsDefaultData.projectDemographic}
                        inputChangeHandler={this.props.inputChangeHandler}
                        selectChangeHandler={this.props.selectChangeHandler}
                        error={this.props.errors}
                  /> );
            case 'view2':
                return( <ContractDetails
                    contractDetails={this.props.cpFormData.contractDetails}
                    inputChangeHandler={this.props.inputChangeHandler}
                    onSelectedDateHandler={this.props.onSelectedDateHandler}
                    error={this.props.errors}
                />);
            case 'view3':
                 return(<Scope
                    scope={this.props.cpFormData.scope}
                    cpFieldsDefaultData={this.props.cpFieldsDefaultData.scope}
                    inputChangeHandler={this.props.inputChangeHandler}
                    selectChangeHandler={this.props.selectChangeHandler}
                    chooseCheckboxHandler={this.props.chooseCheckboxHandler}
                    error={this.props.errors}
                />);
            case 'view4':
                return(<KeyContacts
                    keyContacts={this.props.cpFormData.keyContacts}
                    inputChangeHandler={this.props.inputChangeHandler}
                    error={this.props.errors}
                />);
            case 'view5':
                return(<Risk
                    risk={this.props.cpFormData.risk}
                    cpFieldsDefaultData={this.props.cpFieldsDefaultData.risk}
                    inputChangeHandler={this.props.inputChangeHandler}
                    onSelectedDateHandler={this.props.onSelectedDateHandler}
                    selectChangeHandler={this.props.selectChangeHandler}
                    addNewRow={this.props.addNewRow}
                />);

            case 'view6':
                return (<Confirmation cpFormData={this.props.cpFormData} cpFieldsDefaultData={this.props.cpFieldsDefaultData}/>)
            
        
            default: return(<div>{this.props.view} content</div>);
        }
    
    }
}
 
export default CreateProjectView;