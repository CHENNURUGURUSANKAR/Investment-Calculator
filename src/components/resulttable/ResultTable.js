import "./ResultTable.css";
function ResultTable(props) {
  return (
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Saving </th>
            <th>Interest(Year)</th>
            <th>Total interest</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr>
              <td>{row.year}</td>
              <td>{row.totalSavings}</td>
              <td>{row.interestPerYear}</td>
              <td>{row.totalInterest}</td>
              <td>{row.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ResultTable;
