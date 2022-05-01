import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import DataTable from 'react-data-table-component';

function ProjectDetails(props) {
  let {id} = useParams();

  const [project, setProject] = useState();
  const [projectHours, setProjectHours] = useState();

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        console.log(res);
        setProject(res.data);
      })
    axios
      .get(`/projects/${id}/hours`)
      .then((res) => {
        console.log(res);
        setProjectHours(res.data);
      })
  }, [id]);

  const columns = [
    {
      name: 'Tekijän nimi',
      selector: row => row.person_name,
      sortable: true
    },
    {
      name: 'Tunnit',
      selector: row => row.hours
    }, 
    {
      name: 'Tehtävä',
      selector: row => row.classification,
      sortable: true
    }
  ]

  if(!project) {
    return "Loading...";
  }

  return (
    <div className='home-container'>
      <h2>{project.project_name}</h2>
      <p>Aloituspäivä {new Date(project.start_date).toISOString().slice(0,10)}</p>
      {project.est_end_date && <p>Päättymispäivä { new Date(project.est_end_date).toISOString().slice(0,10)}</p>}
      <Link to={`/project/${id}/hours`}><button className="button">Kirjaa tunteja</button></Link>
      <Link to={`/project/edit/${id}`}><button className="button">Muokkaa projektia</button></Link>

      <h2>Tehdyt tunnit</h2>
      <div className='table'>
        <DataTable
          columns={columns}
          data={projectHours}
          pagination />
      </div>

    </div>
  )
}

export default ProjectDetails