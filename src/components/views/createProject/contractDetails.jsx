import DatePickerComp from "../../datePickerComp";
import _ from 'lodash';

const getTimeDifference = (contractDetails) =>{
    const {startDate, endDate} = contractDetails;
    const date1 = new Date(startDate).valueOf();
    const date2 = new Date(endDate).valueOf();
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
            <form autoComplete="off">
                <div className="form-group required">
                    <label className="form-label">When do you think the project will start?</label>
                    <div className="input-group date" data-date-format="dd.mm.yyyy">
                        <DatePickerComp name="startDate"
                            selectedDate={props.contractDetails.startDate}
                            onSelectDate={props.onSelectedDateHandler}/>
                    </div>
                    {props.error.startDate && <div className="alert alert-danger">{props.error.startDate}</div>}
                </div>
                <div className="form-group required">
                    <label className="form-label">How long will the project last?</label>
                    <div className="input-group date" data-date-format="dd.mm.yyyy">
                        <DatePickerComp name="endDate"
                            selectedDate={props.contractDetails.endDate}
                            onSelectDate={props.onSelectedDateHandler}/>
                        <label className="total-days">{getTimeDifference(props.contractDetails)}</label>
                    </div>
                    {props.error.endDate && <div className="alert alert-danger">{props.error.endDate}</div>}
                </div>

                <div className="form-group required">
                    <label className="form-label">Deal Size (in USD)</label>
                    <input type="text" className="form-control" name="dealSize"
                        placeholder="Please Enter deal size" 
                        value={props.contractDetails.dealSize} 
                        onChange={props.inputChangeHandler}/>
                    {props.error.dealSize && <div className="alert alert-danger">{props.error.dealSize}</div>}
                </div>
                
            </form>    
        </div>
    );
}
 
export default ContractDetails;