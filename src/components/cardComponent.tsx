import React from 'react'
import { Card } from '../interfaces/Card';
import { Link } from 'react-router-dom';

const CardComponent:React.FC<{CardData:Card}> = ({CardData})=>{
    
    if(!CardData){
        return null;
    }

    return(
        <div className="card mt-3" style={{ width: "40rem" }}>
        <img src={CardData.cover_image} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{CardData.title}</h5>
        <p className="card-text">{CardData.description}</p>
        <Link  className="btn btn-primary" to={`/news/${CardData.id}`}>read more</Link>
        </div>
    </div>
   )
}

export default CardComponent