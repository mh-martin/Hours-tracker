import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../App.css';


function Home(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/projects")
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
  }, []);

  const columns = [
    {
      name: 'Projektin nimi',
      cell: row => <Link to={`project/${row.id}`}>{row.project_name}</Link>,
      sortable: true
    },
    {
      name: 'Aloituspvm',
      selector: row => new Date(row.start_date).toDateString(),
      sortable: true
    },
  ]


  return (
    <div className='home-container'>
      <h2>Avoimet projektit</h2>
      <div className='table'>
        <DataTable
          columns={columns}
          data={projects.filter(p => !p.completed)} />
      </div>
      <Link to="hours">Kirjaa tunnit</Link>
    </div>
  )
}

export default Home