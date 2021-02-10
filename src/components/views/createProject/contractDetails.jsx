import DatePickerComp from "../../datePickerComp";
import _ from 'lodash';

const getTimeDifference = (contractDetails) =>{
    const {projectStartDate, projectDuration} = contractDetails;
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
        return `Total number of days: ${diffDays}`;
    }
}

const ContractDetails = (props) => {
    return (
        <div className="views view-2">   
            <form>
                <div className="form-group required">
                    <label className="form-label">When do you think the project will start?</label>
                    <div className="input-group date" data-date-format="dd.mm.yyyy">
                        <DatePickerComp name="projectStartDate"
                            selectedDate={props.contractDetails.projectStartDate}
                            onSelectDate={props.onSelectedDateHandler}/>
                    </div>
                </div>
                <div className="form-group required">
                    <label className="form-label">How long will the project last?</label>
                    <div className="input-group date" data-date-format="dd.mm.yyyy">
                        <DatePickerComp name="projectDuration"
                            selectedDate={props.contractDetails.projectDuration}
                            onSelectDate={props.onSelectedDateHandler}/>
                        <label className="total-days">{getTimeDifference(props.contractDetails)}</label>
                    </div>
                </div>

                <div className="form-group required">
                    <label className="form-label">Deal Size (in USD)</label>
                    <input type="text" className="form-control" name="dealSize"
                        placeholder="Please Enter client name" 
                        value={props.contractDetails.dealSize} 
                        onChange={props.inputChangeHandler}/>
                </div>
                
            </form>    
        </div>
    );
}
 
export default ContractDetails;