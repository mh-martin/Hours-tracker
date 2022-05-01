import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Hours() {
  let { id } = useParams();
  const [projectName, setProjectName] = useState();
  const navigate = useNavigate();
  const [personName, setPersonName] = useState("");
  const [hours, setHours] = useState("");
  const [classification, setClassification] = useState("");

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        console.log(res);
        setProjectName(res.data.project_name);
      })
  }, [id]);

  function isInvalid() {
    return personName === '' ||
      hours === '' ||
      classification === '';
  }

  function formSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    axios.post(`/projects/${id}/hours`, formData).then(response => {
      console.log(response)
      navigate(`/project/${id}`)
    }).catch(response => {
      console.log(response)
    })
  }


  return (
    <div className='App'>
      <h2>Kirjaa työtunnit projektiin {projectName}</h2>

      <form onSubmit={formSubmitted}>
        <div className='container'>
          <div className="input-container">
            <label className="label">Nimi:</label>
            <input type="text" name="person_name" className='inputBox' value={personName} onChange={(event) => setPersonName(event.target.value)}></input>
          </div>
          <div className="input-container">
            <label className="label">Tehdyt tunnit:</label>
            <input type="number" name="hours" step="0.25" className='inputBox' value={hours} onChange={(event) => setHours(event.target.value)}></input>
          </div>
          <div className="input-container">
            <label className="label">Työtehtävä:</label>
            <input type="text" className='inputBox' name="classification" value={classification} onChange={(event) => setClassification(event.target.value)}></input>
          </div>
          <input type="hidden" name="project_id" value={id}></input>
          <button className='button' disabled={isInvalid()}>Kirjaa tunnit</button>
        </div>
      </form>
    </div>
  )
}

export default Hours