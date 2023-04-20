import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import './Manage_Bills.css'


import { getAllBills } from "../../Redux/actions/index.js";

const ManageBills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBills = useSelector((e) => e.allBills);
  const [dropNewData, setDropNewData] = useState(0);

  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  console.log(allBills, "LASBILLS")
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="text-center mt-5 titulos-color">RECENT ORDERS</h1>
      </div>
    </div>
  
    {allBills ? allBills.map((e) => (
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"  >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{e.user.email}</h5>
            <h5 class="mb-1">{e.user.first_name} {e.user.last_name}</h5>
            {Math.floor((new Date() - new Date(e.date)) / 86400000) === 0 ? <small>Today</small> : <small>{Math.floor((new Date() - new Date(e.date)) / 86400000)} days ago</small>}
          </div>
          <button class='float-end btn btn-light btn-sm' onClick={() => setDropNewData(e.id)}>VER MAS</button>
          <div>
            {e.payment_status ? <small class='btn btn-success btn-sm'> {e.payment_status} </small> : <small class='btn btn-warning btn-sm'>Pending payment</small>}
            {e.payment_status && e.Shipped === false ? <button class='btn btn-primary btn-sm' onClick={(e) => handleSubmit(e)}>Shipped</button> : null}
          </div>
        </a>
        {dropNewData === e.id ?
          <div class='bg-secondary text-white p-3'>
            <button class='float-end btn btn-danger' onClick={() => setDropNewData(0)}>X</button>
            <h3>Lista de compra</h3>
            <p class="mb-1">
                {e.item && e.image
      ? e.item.map((element, index) => {
          return (
            <div className="text-prod">
              <Link             
                onClick={() => scrollTop()}
                to={`/Products/${e.category_name[index]}/${e.product_ID[index]}/Detail`}
                className="text-prod"
              >
               {element}
               <img src={e.image[index]} style={{ width: "5%" }} />
              </Link>
            </div>
          );
        })
      : null}
            </p>
          </div>
          :
          null
        }
        <hr class="my-2" />
      </div>
    )) : (<h1>No orders to display</h1>)
      }
    </div>
  );
};

export default ManageBills;
