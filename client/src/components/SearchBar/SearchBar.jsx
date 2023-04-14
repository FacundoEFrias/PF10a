import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsName, getAllProducts, setCurrentPage } from '../../Redux/actions/index.js'
import { Link, useNavigate } from 'react-router-dom'


const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropSearch, setDropSearch] = useState(false)
  const productNames = useSelector((state) => state.allProducts);
  const [productsSearch,setproductsSearch] = useState([])
  // const category = productNames[0]
  // const location = useLocation();

  function submitHandleInput(e) {
    e.preventDefault();
    console.log('dataaaaa',name);
    if (name.length>0) {
      dispatch(getAllProductsName(name));
      navigate('Products/')

      dispatch(setCurrentPage(1))
      setDropSearch(false)
      console.log('aca');
    } else {
      dispatch(getAllProducts())
      dispatch(setCurrentPage(1))
      navigate('Products/')
      setDropSearch(false)
    }
  }

  function handleChange  (e) {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      let datos = productNames?.filter(i=>i.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setproductsSearch(datos?.slice(0,5))
    }else{
      setproductsSearch([])
    }
  }

  return (
    <>
      <div id='search' className="search-box">
        {/* <input list='productNames' type='text' value={name} name='search' className="input-search" placeholder="Search Products" onChange={(e) => handleInputChange(e)} /> */}
        {/* <datalist id='productNames'>
        {productNames.map(el => (
          <option key={el.productsID} value={el.name } />
        ))}
      </datalist> */}
        <button className="btn-search" onClick={() => {setDropSearch(!dropSearch);setName('');setproductsSearch([])}}><FaSearch className="fas fa-search" /></button>
      </div>

      <div className={dropSearch ? 'contSearch' : 'contSearchDisable'}>

        <button className='btn-close position-absolute top-0 start-0 mt-4 ms-5' onClick={() => setDropSearch(!dropSearch)}></button>

        <form className="input-group mt-3 w-75" onSubmit={(e)=>submitHandleInput(e)}>
          <input value={name} type="text" className="form-control" placeholder="Search product" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>handleChange(e)}/>
          <input className="btn btn-outline-secondary" type='submit' id="inputGroupFileAddon04"/>
        </form>

        <div className='listSearch d-flex w-100 my-5 text-decoration-none'>
          {productsSearch?.map(e =>
            <Link to={`/Products/${e.article}/${e.productsID}/Detail`} className='me-5 text-black' onClick={() => setDropSearch(false)}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={e.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{e.name}</h6>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className={dropSearch ? 'bgConten' : 'bgContenDisable'} onClick={() => setDropSearch(!dropSearch)}>

      </div>

    </>
  );
};

export default SearchBar
