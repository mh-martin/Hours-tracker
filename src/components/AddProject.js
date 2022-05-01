import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [estEndDate, setEstEndDate] = useState('');
  const navigate = useNavigate();

  function isInvalid() {
    return projectName === '' ||
           startDate === '' ||
           estEndDate === '';
  }

  function formSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    axios.post('/projects', formData).then(response => {
      console.log(response)
      navigate("/")
    }).catch(response => {
      console.log(response)
    })
  }

  return (
    <div className='App'>
      <h1>Lisää projekti</h1>
      <form onSubmit={formSubmitted}>
        <div className="container">
          <label className="label">Projektin nimi: 
            <input type="text" name="project_name" className="inputBox" value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
          </label>
          <label className="label">Aloituspäivä: 
            <input type="date" name="start_date" className="inputBox" value={startDate} onChange={(event) => setStartDate(event.target.value)}></input>
          </label>
          <label className="label">Arvioitu päättymispäivä: 
            <input type="date" name="est_end_date" className="inputBox" value={estEndDate} onChange={(event) => setEstEndDate(event.target.value)}></input>
          </label>
          <button className="button" disabled={isInvalid()}>Lisää projekti</button>
        </div> 
      </form>
    </div>
  )
}

export default AddProject