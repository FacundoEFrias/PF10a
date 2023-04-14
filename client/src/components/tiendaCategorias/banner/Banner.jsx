import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { setCurrentPage } from '../../../Redux/actions'
import { useDispatch } from 'react-redux'

const Banner = () => {
    const dispatch = useDispatch();
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>

            <div className="carousel-inner" onClick={()=> dispatch(setCurrentPage(1))}>
                <Link  to={`/Products/`} className="carousel-item active" data-bs-interval={2000}>
                    <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1680578667/SnowPandaCO/FrontEnd/new_ban_1_qqbxrn.png' className="d-block w-100" alt="..." />
                </Link>
                <Link to={`/Products/board`} className="carousel-item" data-bs-interval={2000}>
                    <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1680578667/SnowPandaCO/FrontEnd/new_ban_2_om73lk.png' className="d-block w-100" alt="..." />
                </Link>
                <Link to={`/Products/accessories`} className="carousel-item" data-bs-interval={2000}>
                    <img src='https://res.cloudinary.com/dberwyxyq/image/upload/v1680578665/SnowPandaCO/FrontEnd/new_ban_3_wfgc6o.png' className="d-block w-100" alt="..." />
                </Link>
            </div>

            <div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



        </div>
    )
}

export default Banner