import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,  } from 'react-router-dom';
import axios from 'axios';
import './Character.css'
import Loader from './Loader';

const Character = () => {
    let { id } = useParams();
    const navigate = useNavigate();


    const [characters,setCharacters] = useState({});
    const [loading,setLoading] = useState(false);


    const fetchData = async()=>{
        setLoading(true)
        try{
            const data = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
            if (Array.isArray(data.data) && data.data.length>0)
                setCharacters(data.data[0])
            else {
                setCharacters([])
                navigate('/error')
            
            }
            setLoading(false)
        }catch(error){
            navigate('/error')

        }
     
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='container'>
        {loading ? <Loader />:characters.length === 0 ? <h2>Character Not Found!</h2> : <div className='character'>
            <div className='imgs'>
                <img src={characters.img} alt="" />
            </div>
            <div className='details'>
                <table>
                    <tbody>
                    <tr>
                        <td className='bold'>Name :</td>
                        <td className='detail'>{characters.name}</td>
                    </tr>
                    <tr>
                        <td className='bold'>Nickname :</td>
                        <td className='detail'>{characters.nickname}</td>
                    </tr>
                    <tr>
                        <td className='bold'>Birthday :</td>
                        <td className='detail'>{characters.birthday}</td>
                    </tr>
                    <tr>
                        <td className='bold'>Occupation :</td>
                        <td className='detail'>{characters.occupation}</td>
                    </tr>
                    <tr>
                        <td className='bold'>Portrayed :</td>
                        <td className='detail'>{characters.portrayed}</td>
                    </tr>
                    </tbody>

                </table>
                </div>
        </div>}
        
    </div>
  )
}

export default Character