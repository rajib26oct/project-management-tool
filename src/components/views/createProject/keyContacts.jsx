const KeyContacts = (props) => {
    return ( 
        <div className="views view-4">
            <form autoComplete="off">
                <div className="form-group required">
                    <label className="form-label">Project Managing Director</label>
                    <input type="text" className="form-control" name="managingDirector"
                        placeholder="Please Enter Project Managing Director" 
                        value={props.keyContacts.managingDirector} 
                        onChange={props.inputChangeHandler}/>
                    {props.error.managingDirector && <div className="alert alert-danger">{props.error.managingDirector}</div>}
                </div>
                <div className="form-group required">
                    <label className="form-label">Project Delivery Lead</label>
                    <input type="text" className="form-control" name="deliveryLead"
                        placeholder="Please Enter Project Delivery Lead" 
                        value={props.keyContacts.deliveryLead} 
                        onChange={props.inputChangeHandler}/>
                    {props.error.deliveryLead && <div className="alert alert-danger">{props.error.deliveryLead}</div>}
                </div>
                <div className="form-group required">
                    <label className="form-label">Project Delivery Manager</label>
                    <input type="text" className="form-control" name="deliveryManager"
                        placeholder="Please Enter Project Delivery Manager" 
                        value={props.keyContacts.deliveryManager} 
                        onChange={props.inputChangeHandler}/>
                    {props.error.deliveryManager && <div className="alert alert-danger">{props.error.deliveryManager}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Alternate Contact</label>
                    <input type="text" className="form-control" name="alternateContact"
                        placeholder="Please Enter Alternate Contact" 
                        value={props.keyContacts.alternateContact} 
                        onChange={props.inputChangeHandler}/>
                </div>
            </form>
        </div>
     );
}
 
export default KeyContacts;