import '../styles/EmployeeTable.css';

function EmployeeTable({ displayEmployee }) {
  return (
    <div className="employeeTable">
      {displayEmployee.map((value, index) => {
        return (
          <div key={index} className="employee-card">
            <h3>{value.fullname}</h3>
            <p>Position: {value.position}</p>
            <p>Department: {value.department}</p>
            <p>Email: {value.email}</p>
            <p>Salary: {value.salary}</p>
            <p>Start Date: {value.startDate}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeTable;
