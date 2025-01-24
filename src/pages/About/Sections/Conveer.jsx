import React from 'react'
import mainblock from "../../../assets/images/About/mainblock.jpg";
const Conveer = () => {
    return (
        <section className='conveer'>
            <div className="container">
                <img src={mainblock} alt="conveer" data-aos="zoom-out"/>
                <div className="h3">
                    Более 10 лет мы занимаемся проектированием и
                    производством конвейерного оборудования
                </div>
            </div>
        </section>)
}

export default Conveer