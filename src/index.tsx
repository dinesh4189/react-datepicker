import ReactDOM from "react-dom";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

function App() {
  const [startDate, setDate] = useState(new Date());
  const [rangeStart, setRangeStart] = useState(new Date());
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  const [rangeEnd, setRangeEnd] = useState(defaultEndDate)
  const today = new Date()

  const selectDateHandler = (d) => {
    setDate(d)
  }

  const selectStartDate = d => {
    setRangeStart(d)
  }

  const selectEndDate = d => {
    setRangeEnd(d)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>simple datepicker</h3>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler} 
        minDate={today}
        todayButton={"Today"}/>

      <h3>date range picker</h3>
      <DatePicker
        selectsStart
        selected={rangeStart} 
        minDate={today}
        startDate={rangeStart} 
        endDate={rangeEnd}
        onChange={selectStartDate} />
      <DatePicker
        selectsEnd
        selected={rangeEnd} 
        startDate={rangeStart} 
        endDate={rangeEnd}
        onChange={selectEndDate} />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
