import React from 'react'
import {data} from '../../../data/categorias';
import './style.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../Redux/actions';

const Categorias = ({scroll}) => {

  const dispatch = useDispatch();

  return (
    <div className="marketing" id='categoria'>
      <h2 className='text-center mt-5 titulos-color'>CATEGORIES</h2>
      <div className=" row text-center d-flex justify-content-center lign-items-center contianer">
      {data.map(e =>
          <Link onClick={()=>{scroll();dispatch(setCurrentPage(1))}} to={`/Products/${e.name}`} key={e.name} className="my-3 text-decoration-none col-2 text-secondary text">
            <img className="w-100 rounded-circle" src={e.img} alt="" />
            <h2 className="mt-4 fw-normal text titulos-color">{e.name}</h2>
          </Link>
      )}
      </div>

    </div>
  )
}

export default Categorias