import React, { useEffect, useState } from 'react'
import './App.css';

const Tempapp= () => {

    const [city, setCity]= useState(null);
    const [search, setSearch] = useState("");

    useEffect( ()=> {
        const fetchApi= async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=70b1a04435e3173a3d8a2cb2d841a049`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
         
        fetchApi();
    }, [search])

    return (
        <>
        <div className='box'>
            <div className='inputData'>
            <input
            placeholder='enter place for weather' 
            type= "search"
            className='inputField'
            onChange={(e) => { setSearch(e.target.value) } }/>
            </div>

        {!city? (
            <p className='errormsg'>No Data Found</p>
        ): (
            <div className='info'>
                <h2 className='location'>{search}</h2>
                <h1 className='temp'>{city.temp} Deg. Cel.</h1>

                <h3>Min : {city.temp_min}  |  Max: {city.temp_max} </h3>
            </div>
            )}
        </div>

        
        </>
    )
}

export default Tempapp;