import { NavLink } from "react-router-dom";


const ReviewCard = ({review}) => {
    const {gameTitle,gameCover,genre,reviewDescription}=review;
    return (
        
            <div className=" bg-base-100 w-[280px] shadow-xl rounded-lg flex flex-col items-center">
  <figure>
    <img className="w-[300px] h-[200px] rounded-lg"
      src={gameCover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center font-bold text-2xl">{gameTitle}</h2>
    <p className="text-center font-semibold">{reviewDescription}</p>
    <p className="text-center font-semibold ">{genre}</p>
    <div className="card-actions justify-end">
   <NavLink to= {`/review/${review._id}`}> 
   <button className="btn  bg-teal-300">Explore Details</button></NavLink>
    </div>
  </div>
</div>
     
    );
};

export default ReviewCard;