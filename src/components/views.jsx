import React, { Component } from 'react';
import DatePickerComp from "./datePickerComp";

class Views extends Component {
    state = { 
        viewData:this.props.viewData
     };
    
    handleChange = evt =>{
        //this.props.onChangeFormFields(evt);
        const viewData = {...this.state.viewData};
        viewData[this.props.viewName][evt.currentTarget.name] = evt.currentTarget.value;
        this.setState({viewData});
    }

    onSelectedDate = (date,name) =>{
        //console.log(evt)
        const viewData = {...this.state.viewData};
        viewData[this.props.viewName][name] = date;
        this.setState({viewData});
    }

    render() { 
        
        if(this.props.view === 'view1') {
          return ( <div className="views view-1">
                    <form>
                        <div className="form-group">
                            <label>Hay! What do you want to name your project?</label>
                            <input type="text" className="form-control" name="projectName" 
                               value={this.state.viewData.projectDemographic.projectName} 
                               onChange={this.handleChange}/>
                            </div>
                        <div className="form-group">
                            <label>Project Description:</label>
                            <textarea className="form-control" rows="5" name="projectDescription"
                               value={this.state.viewData.projectDemographic.projectDescription} 
                               onChange={this.handleChange}></textarea>
                        </div>

                        <div className="form-group">
                            <label>What methodology do you want to use?</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" type="radio"  name="projectMethodology" value="agile"
                                     checked={this.state.viewData.projectDemographic.projectMethodology === "agile"}
                                     onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="agile">Agile</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" type="radio"  name="projectMethodology" value="waterfall"
                                     checked={this.state.viewData.projectDemographic.projectMethodology === "waterfall"}
                                     onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="waterfall">Waterfall</label>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div> );
        }else if(this.props.view === 'view2'){
            return( <div className="views view-2">   
                        <form>
                            <div className="form-group">
                                <label>When do you think the project will start</label>
                                <div className="input-group date" data-date-format="dd.mm.yyyy">
                                    <DatePickerComp name="projectStartDate"
                                       selectedDate={this.state.viewData.timeline.projectStartDate}
                                       onSelectDate={this.onSelectedDate}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>How long will the project last</label>
                                <div className="input-group date" data-date-format="dd.mm.yyyy">
                                    <DatePickerComp name="projectDuration"
                                       selectedDate={this.state.viewData.timeline.projectDuration}
                                       onSelectDate={this.onSelectedDate}/>
                                </div>
                            </div>
                            
                        </form>    
                </div>);
        }else{
            return(<div>{this.props.view} content</div>);
        }
    }
}
 
export default Views;