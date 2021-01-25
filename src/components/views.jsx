import React, { Component } from 'react';
import DatePickerComp from "./datePickerComp";

class Views extends Component {
    state = {  }

    
    render() { 
        
        if(this.props.view === 'view1') {
          return ( <div className="views view-1">
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" id="usr"/>
                            </div>
                        <div className="form-group">
                            <label>Comment:</label>
                            <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                        </div>
                    </form>
                </div> );
        }else if(this.props.view === 'view2'){
            return( <div className="views view-2">       
                    <div className="input-group date" data-date-format="dd.mm.yyyy">
                        <DatePickerComp/>
                    </div>
                </div>);
        }else{
            return(<div>{this.props.view} content</div>);
        }
    }
}
 
export default Views;