import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css"


function Calendar1() {
    const [value, onChange] = useState(new Date());
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
  }
export default Calendar1
