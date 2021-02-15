const Scope = (props) => {
    return ( 
        <div className="views view-3">
            <form autoComplete="off">
                <div className="form-group required">
                    <label className="form-label">Technologies</label>
                    <input type="text" className="form-control" name="technologies"
                        placeholder="Please Enter Technologies" 
                        value={props.scope.technologies} 
                        onChange={props.inputChangeHandler}/>
                     {props.error.technologies && <div className="alert alert-danger">{props.error.technologies}</div>}
                </div>
                <div className="form-group">
                    <label>Solution Description</label>
                    <textarea className="form-control" rows="5" name="solutionDescription"
                        placeholder="Please add solution description"
                        value={props.scope.solutionDescription} 
                        onChange={props.inputChangeHandler}></textarea>
                </div>
                <div className="form-group required">
                    <label className="form-label">Delivery Type</label>
                    <select className="form-control" name="deliveryType" onChange={props.selectChangeHandler} value={props.scope.deliveryType}>
                        <option>Choose Delivery Type</option>
                        {
                            props.cpFieldsDefaultData['deliveryType'].map( opt =>
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            )
                        }
                    </select>
                    {props.error.deliveryType && <div className="alert alert-danger">{props.error.deliveryType}</div>}
                </div>
                <div className="form-group required">
                    <label className="form-label">Phase of Projects</label>
                    <div className="form-control">
                        {
                            props.scope['phaseOfProjects'].map( opt =>
                                <div key={opt.value} className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="phaseOfProjects" value={opt.value} 
                                        checked={opt.isChecked}
                                        onChange={props.chooseCheckboxHandler}/>
                                    <label className="form-check-label">{opt.label}</label>
                                </div>
                            )
                        }
                    </div>
                     {props.error.phaseOfProjects && <div className="alert alert-danger">{props.error.phaseOfProjects}</div>}
                </div>
            </form>
        </div>
     );
}
 
export default Scope;