import React from 'react'

function Hours() {
  return (
    <div>
      <h1>Selaa ja kirjaa tunnit Projekti XYZ</h1>

      <button>Lisää tunteja</button>
      <form>
      <div>
        <label>Nimi:
          <input placeholder="nimi"></input>
        </label>
        <label>Päivämäärä
          <input type="date"></input>
        </label>
        <label>Työtunnit
          <input type="number"></input>
        </label>
        <label> Työtehtävä:
        <select name="tehtava" id="tehtava">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        </label>
      </div>
      </form>



      <table>
        <tr>
          <th>Nimi</th>
          <th>Päivä</th>
          <th>Tunnit</th>
          <th>Tehtävä</th>
        </tr>
        <tr>
          <td>Erkki Esimerkki</td>
          <td>1.1.2022</td>
          <td>7,5</td>
          <td>Join viinaa</td>
        </tr>
        <tr>
          <td>Erkki Esimerkki</td>
          <td>2.1.2022</td>
          <td>7,5</td>
          <td>Join viinaa</td>
        </tr>
      </table>
    </div>
  )
}

export default Hours