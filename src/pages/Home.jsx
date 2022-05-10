import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';


const Home = () => {
    const [characters,setCharacters] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchData = async()=>{
        try {
            setLoading(true);
            const data = await axios.get('https://www.breakingbadapi.com/api/characters/')
            setCharacters(data.data)
            setLoading(false);
            
        } catch (error) {
            navigate('/error')
            
        }
     
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='card-container'> 
        {loading ? <Loader />: characters.map((character,i)=>(
           
            <div className='card' key={i}>
                 <Link to={`/character/${character.char_id}`}>
                <div className='img-container'>
                    <img className='img' src={character.img} alt="err" />
                </div>
                <div className='name-container'>
                    <p className='name'>{character.name}</p>

                </div>
                </Link>
            </div>
        ))}
    </div>
   
  )
}

export default Home