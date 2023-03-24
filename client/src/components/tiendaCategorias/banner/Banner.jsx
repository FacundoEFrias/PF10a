import React from 'react'
import imageOne from '../../../images/1.png'
import imageTwo from '../../../images/2.png'
import imageThree from '../../../images/3.png'

const Banner = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={imageOne} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={imageTwo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={imageThree} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner