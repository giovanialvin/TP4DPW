import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//masih erorr :)
//bingung pas innerhtmlnya :)

function App() {
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

  const [nama, setNama] = useState("");
  const [jk, setJK] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [agama, setAgama] = useState("");
  const [hobi, setHobi] = useState("");
  const [pesan, setPesan] = useState("");
  
  


  function terimaInput() {
    let nama = document.getElementById('nama').value;
    let tanggal = document.getElementById('tanggal').value;
    let jk = document.getElementById('jk').value;
  
    let checkbox = document.getElementsByName('hobi');
    let hobi = '';
    let i;
    for (i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
  
        hobi = hobi + checkbox[i].value + ", ";
  
  
      }
    }
    hobi = hobi.replace(/,\s*$/, "");
    let agama = document.getElementById('agama').value;
    let pesan = document.getElementById('pesan').value;
  
    const table = document.querySelector('.table');
    const record = document.createElement('table');
  
    record.setAttribute('class', 'table');
    record.innerHTML = `
      <thead>
          <tr>
              <th>Label</th>
              <th>Value</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th>Nama</th>
              <td>${nama}</td>
          </tr>
          <tr>
              <th>Tanggal Lahir</th>
              <td>${tanggal}</td>
          </tr>
          <tr>
              <th>Jenis Kelamin</th>
              <td>${jk}</td>
          </tr>
          <tr>
              <th>Hobi</th>
              <td>${hobi}</td>
          </tr>
          <tr>
              <th>Agama</th>
              <td>${agama}</td>
          </tr>
          <tr>
              <th>Pesan</th>
              <td>${pesan}</td>
          </tr>
  
      </tbody>
      
      `;
    table.appendChild(record);
    

    setNama(nama);
    setTanggal(tanggal);
    setJK(jk);
    setHobi(hobi);
    setAgama(agama);
    setPesan(pesan);






  }
  
  
  return (
    <div className="App">
      <div className='container'>
        <h3>
          Biodata
        </h3>

        <form action="">
          <div className='kelasNama'>
            <label for='nama'>
              Nama Lengkap
            </label>
            <input type='text' name='nama' id='nama'>
            </input>
          </div>

          <div className='kelasTanggal'>
            <label for='tanggal'>
              Tanggal
            </label>
            <input type='date' name='tanggal' id='tanggal'>
            </input>
          </div>

          <div className='kelasJK'>
            <label for='jk'>
              Jenis Kelamin
            </label>
            <div className='opsi'>

              <p> <input type='radio' name='jk' id='jk' value="Pria"></input>Pria</p>
              <p> <input type='radio' name='jk' id='jk' value="Wanita"></input>Wanita</p>
              <p> <input type='radio' name='jk' id='jk' value="Other"></input>Other</p>

            </div>


          </div>

          <div className='kelasHobi'>
            <label for='hobi'>
              Hobi
            </label>
            <div className='opsi'>

              <p> <input type='checkbox' name='hobi' id='hobi' value="Ngoding"></input>Ngoding</p>
              <p> <input type='checkbox' name='hobi' id='hobi' value="Rebahan"></input>Rebahan</p>
              <p> <input type='checkbox' name='hobi' id='hobi' value="Melamun"></input>Melamun</p>
              <p> <input type='checkbox' name='hobi' id='hobi' value="Netflixan"></input>Netflixan</p>

            </div>


          </div>

          <div className='kelasAgama'>
            <label for='agama'>Agama</label>

            <select name='agama' id='agama'>
              <option value='Islam'>Islam</option>
              <option value='Hindu'>Hindu</option>
              <option value='Budha'>Budha</option>
              <option value='Katolik'>Katolik</option>
              <option value='Protestan'>Protestan</option>
              <option value='Konghucu'>Konghucu</option>
              <option value='Talo'>Talo</option>

            </select>
          </div>

          <div className='kelasPesan'>
            <label for='pesan'>
              Pesan
            </label>

            <textarea name='pesan' id='pesan' cols='30' rows='10' placeholder='Masukkan Pesan'>

            </textarea>
          </div>

          <div className='kelasButton'>
            <button name='button' id='button' onClick={() => terimaInput()}> Kirim</button>


          </div>


        </form>

        <table className='table'>
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Nama</th>
              <td>{nama}</td>
            </tr>
            <tr>
              <th>Tanggal Lahir</th>
              <td>{tanggal}</td>
            </tr>
            <tr>
              <th>Jenis Kelamin</th>
              <td>{jk}</td>
            </tr>
            <tr>
              <th>Hobi</th>
              <td>{hobi}</td>
            </tr>
            <tr>
              <th>Agama</th>
              <td>{agama}</td>
            </tr>
            <tr>
              <th>Pesan</th>
              <td>{pesan}</td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
