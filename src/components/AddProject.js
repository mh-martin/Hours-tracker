import React from 'react'
import '../App.css';

function AddProject(props) {
  return (
    <div className='App'>
      <h1>Lisää projekti</h1>
      {/* <form> */}
      <div className="container">
        <label className="label">Projektin nimi: 
          <input type="text" name="nimi" className="inputBox" />
        </label>
        <label className="label">Kuvaus: 
          <input type="text" name="kuvaus" className="inputBox" />
        </label>
        <label className="label">Aloituspäivä: 
          <input type="date" className="inputBox"></input>
        </label>
        <label>Lisää työtehtävät/kategoriat</label>
        <button onClick={props.onProjectAdded} className="button">Submit</button>
      {/* </form> */}
      </div>
    </div>
  )
}

export default AddProject