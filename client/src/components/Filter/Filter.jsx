import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilteredProducts } from '../../Redux/actions/index';
import { useLocation } from 'react-router-dom';
import './Filter.css'


function FilterForm({ pagination }) {
    const [category, setCategory] = useState('');
    const [brandName, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [orderPrice, setOrderPrice] = useState('');
    const [size, setSize] = useState('');
    const [numberSize, setNumberSize] = useState('');
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);  
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Crea un objeto con los valores seleccionados para cada filtro
        const query = {
            category,
            brandName,

            minPrice,
            maxPrice,
            orderPrice,
            size,
            numberSize,
        };

        // Envía la acción de Redux para actualizar la lista de productos filtrados
        dispatch(FilteredProducts(query));
    };

    function Menu() {
        return (
            <div className="sidebar">
                <form onSubmit={handleSubmit}>
                    {location.pathname.includes('/Products/') && (
                        <div>
                            <label htmlFor="category">Category:</label>
                            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">All</option>
                                <option value="accessories">Accessories</option>
                                <option value="board">Board</option>
                                <option value="pants">Pants</option>
                                <option value="boots">Boots</option>
                                <option value="t-shirts">T-shirts</option>
                                <option value="jackets">Jackets</option>
                            </select>
                            <label htmlFor="brandName">Brand:</label>
                            <select id="brandName" value={brandName} onChange={(e) => setBrand(e.target.value)}>
                                <option value="">All</option>
                                <option value="SnowPandaCo">SnowPandaCo</option>
                                <option value="Burton">Burton</option>
                                <option value="Rome">Rome</option>
                                <option value="Nitro">Nitro</option>
                                <option value="k2">K2</option>
                                <option value="Rossignol">Rossignol</option>
                                <option value="Arbor">Arbor</option>
                                <option value="Capita">Capita</option>
                                <option value="Gnu">Gnu</option>
                                <option value="Jones">Jones</option>
                            </select>


                        </div>
                    )}
                    <label htmlFor="minPrice">Precio mínimo:</label>
                    <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />

                    <label htmlFor="maxPrice">Precio máximo:</label>
                    <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

                    <label htmlFor="orderPrice">Ordenar por precio:</label>
                    <select id="orderPrice" value={orderPrice} onChange={(e) => setOrderPrice(e.target.value)}>
                        <option value="">Ninguno</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>

                    <button className='buttonback' onClick={() => pagination(1)}>Filtrar</button>
                </form>
                <button className="hamburger" onClick={handleMenuClick}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
            </div>
        );
    }

    return (
        <nav>
            <button className="hamburger" onClick={handleMenuClick}>
            <div className={menuOpen? 'open' : ''}>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                </div>
            </button>           
            {menuOpen && <Menu />}           
        </nav>
    )
}

export default FilterForm
