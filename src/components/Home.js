import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import '../App.css';

function Home(props) {
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
    <div>
      <h2>Avoimet projektit</h2>
      <div>
        <DataTable
          columns={columns}
          data={props.projects.filter(p => !p.completed)} />
      </div>
      <Link to="hours">Kirjaa tunnit</Link>
    </div>
  )
}

export default Home