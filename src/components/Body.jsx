import React, { useState } from "react";

function Body() {
  const [calAge, setCalAge] = useState("");
  const [dob, setDOB] = useState({
    date: 12, //9
    month: 12, //3
    year: 2000, //22
  });
//   Function to Update DOB of the user
  function updateDOB(event) {
    const currYear = new Date().getFullYear();
    const { name, value } = event.target;

    if(name ==="date"){
        if(value > 31 || value <0)
        {
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: 30,
                };
              });

              alert("Plese Enter Correct Date");
        }else{
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: value,
                };
              });
        }
    }
    else if(name === "month"){
        if(value > 12 || value <0 )
        {
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: 12,
                };    
              });

              alert("Plese Enter Correct Month");
        }
        else{
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: value,
                };
              });
        }
    }
    else if(name === "year"){
        if(value > currYear || value <0)
        {
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: currYear,
                };    
              });

              alert("Plese Enter Correct Month");
        }else{
            setDOB((prevValue) => {
                return {
                  ...prevValue,
                  [name]: value,
                };
              });
        }
    }

    
  }

//   Function to calculate the age of the user
  function ageCalculator() {
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth() + 1;
    
    const currDate = new Date().getDate();

    console.log(currYear);
    console.log(currMonth);
    console.log(currDate);

    const dobYear = dob.year;
    const dobMonth = dob.month;
    const dobDate = dob.date;

    if(dobYear === "0" || dobMonth === "0" || dobDate === "0"){
        alert("Invalid DOB !!! Re-enter Your DOB");
        return;
    }

    let ageYear;
    let ageMonth;
    let ageDate;

    ageYear = currYear - dobYear;

    console.log("12 ",currMonth);
    console.log("13 " ,dobMonth);

    if (currMonth >= dobMonth) {
      ageMonth = currMonth - dobMonth;
      console.log("1 ",ageMonth);
    } else {
      ageYear--;
      ageMonth = 12 + currMonth - dobMonth;
      console.log(ageMonth);
    }

    if (currDate >= dobDate) {
      ageDate = currDate - dobDate;
    } else {
      ageMonth--;
      ageDate = 31 + currDate - dobDate;

      if (ageMonth < 0) {
        ageMonth = 11;
        ageYear--;
      }
    }
    const age = {
        years: ageYear,
        months: ageMonth,
        days: ageDate
    };

    const yearString = (age.years > 1) ? " years" : " year";
    const monthString = (age.months > 1) ? " months" : " month";
    const dayString = (age.days > 1) ? " days" : " day";

    let ageStr=" ";

    // coditions for displaying the age string

    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
        ageStr ="You are "+ age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
        ageStr = "Only " + age.days + dayString + " old!";
    } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
        ageStr ="You are "+ age.years + yearString + " old. Happy Birthday Dear!!!";
    } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
        ageStr ="You are "+ age.years + yearString + " and " + age.months + monthString + " old.";
    } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
        ageStr ="You are "+ age.months + monthString + " and " + age.days + dayString + " old.";
    } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
        ageStr ="You are "+ age.years + yearString + " and " + age.days + dayString + " old.";
    } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
        ageStr ="You are "+ age.months + monthString + " old.";
    } else {
        ageStr = "Oops! Could not calculate age!";
    }

    setCalAge(ageStr);

  }
  return (
    <div className="body">
    <div className="bodyHeading">Enter Your Date Of Birth</div>
      <div className="inputContainer">
        <div className="bodyContainer day">
          Date
          <input
            className="box"
            name="date"
            type="number"
            value={dob.date}
            onChange={updateDOB}
          ></input>
          <div className="inputDot">..........</div>
        </div>
        <div className="bodyContainer month">
          Month
          <input
            className="box"
            name="month"
            type="number"
            value={dob.month}
            onChange={updateDOB}
          ></input>
          <div className="inputDot">..........</div>
        </div>
        <div className="bodyContainer year">
          Year
          <input
            className="box"
            name="year"
            type="number"
            value={dob.year}
            onChange={updateDOB}
          ></input>
          <div className="inputDot">..........</div>
        </div>
      </div>
      <div className="bodyDisplay">
        <button className="submitButton" onClick={ageCalculator}>
          Get Your Age
        </button>
        <div className="ageDisplay"> {calAge}</div>
      </div>
    </div>
  );
}

export default Body;
