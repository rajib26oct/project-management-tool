import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const DatePickerComp = (props) => {
  //console.log("DatePickerComp==="+props)
  let date = (props.selectedDate != "") ? props.selectedDate : null;
  
  const [startDate] = useState(null);
  const ref = React.createRef()

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    
    <div className="date-picker-custom-input" onClick={onClick}>
        <input type="text" className="form-control" 
          value={value} 
          name={props.name}
          onChange={props.onSelectDate} ref={ref}/>
        <i className="fa fa-calendar" aria-hidden="true"></i>
    </div>
  ));

  return (
    <DatePicker 
       selected={date ? date:startDate } 
       onChange={date => props.onSelectDate(date, props.name)}
       customInput={<CustomDateInput ref={ref}/>} 
       placeholderText="Select a Date"/>
  );
}
 
export default DatePickerComp;