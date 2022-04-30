import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function ProjectDetails(props) {
  let {id} = useParams();

  const [project, setProject] = useState();

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        console.log(res);
        setProject(res.data);
      })
  }, [id]);

  if(!project) {
    return "Loading...";
  }

  return (
    <div>
      <h2>{project.project_name}</h2>
      <p>Aloituspäivä {new Date(project.start_date).toISOString().slice(0,10)}</p>
      {project.est_end_date && <p>Päättymispäivä { new Date(project.est_end_date).toISOString().slice(0,10)}</p>}
      <Link to="/"><button className="button">Kirjaa tunteja</button></Link>
      <Link to={`/project/edit/${id}`}><button className="button">Muokkaa projektia</button></Link>

      <h2>Tehdyt tunnit</h2>
    </div>
  )
}

export default ProjectDetails