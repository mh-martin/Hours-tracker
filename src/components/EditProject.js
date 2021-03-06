import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

function EditProject() {
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [estEndDate, setEstEndDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        setProjectName(res.data.project_name);
        setStartDate(new Date(res.data.start_date).toISOString().slice(0, 10));
        setEstEndDate(new Date(res.data.est_end_date).toISOString().slice(0, 10));
        setCompleted(res.data.completed);
      })
  }, [id]);


  function isInvalid() {
    return projectName === '' ||
      startDate === '' ||
      estEndDate === '';
  }

  function formSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    axios.patch(`/projects/${id}`, formData).then(response => {
      navigate("/")
    }).catch(response => {
    })
  }

  return (
    <div className='App'>
      <h1>Muokkaa projektia</h1>
      <form onSubmit={formSubmitted}>
        <div className="container">
          {/* <input type="hidden" value={id}></input> */}
          <div className="input-container">
            <label className="label">Projektin nimi:</label>
            <input type="text" name="project_name" className="inputBox" value={projectName} onChange={(event) => setProjectName(event.target.value)} />
          </div>
          <div className="input-container">
            <label className="label">Aloituspäivä:</label>
            <input type="date" name="start_date" className="inputBox" value={startDate} onChange={(event) => setStartDate(event.target.value)}></input>
          </div>
          <div className="input-container">
            <label className="label">Arvioitu päättymispäivä: </label>
            <input type="date" name="est_end_date" className="inputBox" value={estEndDate} onChange={(event) => setEstEndDate(event.target.value)}></input>
          </div>
          <div className="input-container">
            <label htmlFor="completed" className='label'>Projekti valmis?</label>
            <input className="inputCheckbox" type="checkbox" name="completed" id="completed" value={completed} />
          </div>

          <button className="button" disabled={isInvalid()}>Submit</button>
        </div>
      </form>
    </div>
  )

}

export default EditProject