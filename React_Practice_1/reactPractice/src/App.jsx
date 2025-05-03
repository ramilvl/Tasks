import Form from './components/EmployeeForm'
import Table from './components/EmployeeTable'
import './styles/App.css'
import {useState} from 'react'

function App(){
  const [empl, setEmpl] = useState([]);
  function addEmployee(newEmployee) {
    setEmpl([...empl, newEmployee]);
  }
  
  return(
    <div className='app-container'>
      <Form addEmployee={addEmployee}/>
      <Table displayEmployee={empl}/>
    </div>
  )
}

export default App;