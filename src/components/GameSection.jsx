

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function GameSection() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/highest-rated-games') 
            .then((res) => res.json())
            .then((data) => setGames(data));
    }, []);

    return (
        <div className='lg:w-[800px] w-[400px] mx-auto'> 
        <h2 className='font-extrabold text-3xl text-center my-5'>Highest Rated Games</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 border bg-black p-7 rounded-xl">
            {games.map((game) => (
                <div key={game._id} className=" ">
                    <img  src={game.image} alt={game.title} className="w-[300px] h-[150px] rounded-md" />
                    <h3 className='text-center text-white my-3'>{game.title}</h3>
                    <p className='text-white text-center my-2'>Rating: {game.rating}</p>
                    <NavLink to={`/highest-rated-games/${game._id}`}><button className="btn glass text-white btn-block">Explore Details</button></NavLink>
                    
                </div>
            ))}
        </div>
        </div>
    );
}

export default GameSection;
