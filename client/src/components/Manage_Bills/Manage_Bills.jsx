import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { getAllBills } from "../../Redux/actions/index.js";


const ManageBills = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allBills = useSelector((e) => e.allBills);
  const [dropNewData, setDropNewData] = useState(0)


  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  console.log(allBills, "LASBILLS")

  return (

    <div>
      <div>
        <h1>ACA VAN LAS BILL's PERRRRRRRRRRROo</h1>
      </div>

      {
        allBills ? allBills.map((e) => <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"  >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{e.user.email}</h5>
              <h5 class="mb-1">{e.user.first_name} {e.user.last_name}</h5>
              {Math.floor((new Date() - new Date(e.date)) / 86400000) === 0 ? <small>Today</small> : <small>{Math.floor((new Date() - new Date(e.date)) / 86400000)} days ago</small>}
            </div>
            <button className='float-end btn btn-light btn-sm' onClick={() => setDropNewData(e.id)}>VER MAS</button>
            <div>
              {e.payment_status ? <small className='btn btn-success btn-sm'> {e.payment_status} </small> : <small className='btn btn-warning btn-sm'>Pending payment</small>}
              {e.payment_status && e.Shipped === false ? <button onClick={(e) => handleSubmit(e)}>Shipped</button> : null}
            </div>
          </a>
          {dropNewData === e.id ?
            <div className='bg-secondary text-white p-3'>
              <button className='float-end btn btn-danger' onClick={() => setDropNewData(0)}>X</button>
              <h3>Lista de compra</h3>
              <p>{e.item}</p>

            </div>
            :
            null
          }
          <hr />{/* //!Borraar esto y meterle un padding  */}
        </div>)


          : (<h1>No Vendimo una mierda hasta ahora --Carita Triste-- </h1>)
      }
    </div>
  )
}


export default ManageBills;



