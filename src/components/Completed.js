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
      cell: row => <Link className='project-link' to={`/project/${row.id}`}>{row.project_name}</Link>,
      selector: row => row.project_name,
      sortable: true
    },
    {
      name: 'Aloituspvm',
      selector: row => new Date(row.start_date).toISOString().slice(0,10),
      sortable: true
    },
    {
      name: 'Päättymispvm',
      selector: row => new Date(row.est_end_date).toISOString().slice(0,10),
      sortable: true
    },
  ]


  return (
    <div className='home-container'>
      <h2>Päättyneet projektit</h2>
      <div className='table'>
        <DataTable
          columns={columns}
          data={projects.filter(p => p.completed)}
          pagination />
      </div>
    </div>
  )
}

export default Home