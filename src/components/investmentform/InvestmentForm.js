import "./InvestmentForm.css"; // Import the CSS file for the component
import React, { useState } from "react";
function InvestmentForm(props) {
  const [currSavings, setcurrSavings] = useState("");
  const [savePerYear, setSavePerYear] = useState("");
  const [tenure, setTenure] = useState("");
  const [expectInterest, setExpoInterest] = useState("");

  function onSubmitListener(event) {
    event.preventDefault();
    let newRows = [];
    if (
      currSavings.trim().length === 0 ||
      savePerYear.trim().length === 0 ||
      tenure.trim().length === 0 ||
      expectInterest.trim().length === 0
    ) {
      props.onSubmit(newRows);
      return;
    }
    let totalSavings = parseInt(currSavings);
    let totalInterest = 0;

    for (let i = 0; i < tenure; i++) {
      let interest = (totalSavings * expectInterest) / 100;
      totalSavings += parseInt(savePerYear) + interest;
      totalInterest += interest;

      let row = {
        year: i + 1,
        totalSavings: totalSavings.toFixed(3),
        interestPerYear: interest.toFixed(3),
        totalInterest: totalInterest.toFixed(3),
        capital: (totalSavings.toFixed(2) - totalInterest.toFixed(2)).toFixed(
          3
        ),
      };

      newRows.push(row);
    }
    props.onSubmit(newRows);
  }

  function onChangeCurrentSavingListner(event) {
    setcurrSavings(event.target.value);
    console.log(event.target.value);
  }

  function onChaneSavingsPerListner(event) {
    setSavePerYear(event.target.value);
    console.log(event.target.value);
  }

  function onChangetenureListner(event) {
    setTenure(event.target.value);
    console.log(event.target.value);
  }
  function onChangeExpoInterestListner(event) {
    setExpoInterest(event.target.value);
    console.log(event.target.value);
  }
  function onResetListener() {
    setcurrSavings("");
    setExpoInterest("");
    setSavePerYear("");
    setTenure("");
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmitListener}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="currentSavings">Current savings</label>
            <input
              type="number"
              id="currentSavings"
              className="input-field"
              value={currSavings}
              onChange={onChangeCurrentSavingListner}
            />
            {/* {currSavings.trim().length === 0 && (
              <p style={{ color: "red" }}>please enter current savings</p>
            )} */}
          </div>
          <div className="form-group">
            <label htmlFor="howMuchToSave">
              How much you can save per year
            </label>
            <input
              type="number"
              id="howMuchToSave"
              className="input-field"
              value={savePerYear}
              onChange={onChaneSavingsPerListner}
            />
            {/* {savePerYear.trim().length === 0 && (
              <p style={{ color: "red" }}>
                please enter how much you can save per year
              </p>
            )} */}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="howManyYears">How many years</label>
            <input
              type="number"
              id="howManyYears"
              className="input-field"
              value={tenure}
              onChange={onChangetenureListner}
            />
            {/* {tenure.trim().length === 0 && (
              <p style={{ color: "red" }}>
                please enter how many years you can save
              </p>
            )} */}
          </div>
          <div className="form-group">
            <label htmlFor="expectedInterest">Expected Interest</label>
            <input
              type="number"
              id="expectedInterest"
              className="input-field"
              value={expectInterest}
              onChange={onChangeExpoInterestListner}
            />
            {/* {expectInterest.trim().length === 0 && (
              <p style={{ color: "red" }}>
                please enter How much interest you expecting{" "}
              </p>
            )} */}
          </div>
        </div>
        <button type="button" onClick={onResetListener}>
          Reset
        </button>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default InvestmentForm;
