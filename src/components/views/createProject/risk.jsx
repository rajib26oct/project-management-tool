import DatePickerComp from "../../datePickerComp";

const Risk = (props) => {
    return (
        <div className="views view-5">
            {
                props.risk.map((data, index) =>
                    <form key={index} autoComplete="off">
                        <fieldset>
                            <legend>Risk-{index+1}</legend>
                            <div className="form-group">
                                <label className="form-label">Risk Title</label>
                                <input type="text" className="form-control" name="name"
                                    placeholder="Please Enter risk name" 
                                    value={data.name}
                                    onChange={evt=>props.inputChangeHandler(evt,index)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Impact</label>
                                <input type="text" className="form-control" name="impact"
                                    placeholder="Please Enter Impact" 
                                    value={data.impact}
                                    onChange={evt=>props.inputChangeHandler(evt,index)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mitigation</label>
                                <input type="text" className="form-control" name="mitigation"
                                    placeholder="Please Enter Mitigation" 
                                    value={data.mitigation}
                                    onChange={evt=>props.inputChangeHandler(evt,index)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Due date</label>
                                <div className="input-group date" data-date-format="dd.mm.yyyy">
                                    <DatePickerComp name="dueDate"
                                        selectedDate={data.dueDate}
                                        onSelectDate={(date,name) => props.onSelectedDateHandler(date,name,index)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Owner</label>
                                <input type="text" className="form-control" name="owner"
                                    placeholder="Please Enter Owner" 
                                    value={data.owner}
                                    onChange={evt=>props.inputChangeHandler(evt,index)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Probability</label>
                                <select className="form-control" name="probability" onChange={(evt) => props.selectChangeHandler(evt,index)} 
                                    value={data.probability}>
                                    <option>Choose probability</option>
                                    {
                                        props.cpFieldsDefaultData.probability.map( opt =>
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        )
                                    }
                                </select>
                            </div>
                            
                        </fieldset>
                    </form>
                )
            }
            <button type="button" className="btn btn-dark btn-lg add-rows-btn" disabled={getButtonState(props.risk)}
             onClick={props.addNewRow}>Add Rows</button>
        </div>
    );
}

const getButtonState = (risk) =>{
    const riskObj = risk.find(r => r.name === "");

    if(riskObj === undefined) return false;
    return true
}
 
export default Risk;