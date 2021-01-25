import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomDateInput = ({ value, onClick }) => (
    <div className="date-picker-custom-input" onClick={onClick}>
        <input type="text" className="form-control" value={value}/>
        <i className="fa fa-calendar" aria-hidden="true"></i>
    </div>
  );

  return (
    <DatePicker 
       selected={startDate} 
       onChange={date => setStartDate(date)}
       customInput={<CustomDateInput />} />
  );
}
 
export default DatePickerComp;