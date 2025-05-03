import '../styles/EmployeeForm.css'
import {useState} from 'react'

function EmployeeForm({addEmployee}){
    const [employee, setEmployee] = useState({
        fullname: '',
        position: '',
        department: '',
        email: '',
        salary:'',
        startDate: '',
    });

    function handleSubmit(e){
        e.preventDefault();

        addEmployee(employee);
        setEmployee({ fullname: '', position: '', department: '', email: '', salary: '', startDate: '' });

    }

    function handleChange(e){
        const {name, value} = e.target;
        setEmployee(prev=>({...prev, [name]:value}))
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" name='fullname' placeholder="fullname" value={employee.fullname} onChange={handleChange}/>
                    <input type="text" name='position' placeholder="position" value={employee.position} onChange={handleChange}/>
                    <input type="text" name='department' placeholder="department" value={employee.department} onChange={handleChange}/>
                    <input type="email" name='email' placeholder="email" value={employee.email} onChange={handleChange}/>
                    <input type="number" name='salary' placeholder="salary" value={employee.salary} onChange={handleChange}/>
                    <input type="date" name='startDate' placeholder="start date" value={employee.startDate} onChange={handleChange}/>
                    <button>Add Employee</button>
                </div>

            </form>
        </div>
    )
}

export default EmployeeForm;