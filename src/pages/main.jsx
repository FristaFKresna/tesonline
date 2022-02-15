import React, { useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../support/urlAPI';


const MainPage = () => {
    const [logout, setLogout] = useState(null);
    const [nama, setNama] = useState("")
    const [data, setData] = useState(null)
    

  const onTambahBtnClick = () => {
    const token = localStorage.getItem('token')


    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        body: {
            'name': nama
        }
      }

    Axios.post(API_URL+'register', config)
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        alert(err.message)
    })
  }

  const renderData = () => {
      return data.map((val)=>{
        return(
            <div>
                {val.name}
            </div>
        )

      })
  }

  const onLogoutBtnClick = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setLogout(true)
  }

  return (
    <div className='container p-5'>
        <div className="container">
            <div >To Do :</div>
            <input type='text' placeholder='To Do' className='form-control mb-3' onChange={(e)=>{setNama(e.target.value)}} ></input>          
            <div className="btn btn-primary m-3" onClick={()=>{onTambahBtnClick()}}>Tambah</div>
        </div>
        <div>
            {data==null? <div></div>: renderData()}
        </div>
        <div className="container">
            <div className="btn btn-primary m-3" onClick={()=>{onLogoutBtnClick()}}>Log Out</div>
        </div>
    </div>
  );
}

export default MainPage;
