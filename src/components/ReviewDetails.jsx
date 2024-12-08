import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"; 

const ReviewDetails = () => {
    const { id } = useParams();
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`) 
            .then((res) => res.json())
            .then((data) => {
                setReview(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching review:", error);
                setLoading(false);
            });
    }, [id]);


    
      

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!review) {
        return <p>Review not found!</p>;
    }

    return (
        <div className="w-[600px] mx-auto my-10">
            
            <img src={review.gameCover} alt={review.title} className="w-full rounded-xl" />
            <p className="font-semibold text-3xl text-center">{review.gameTitle}</p>
            <p className="font-semibold text-xl text-center">{review.description}</p>
            <p className="font-semibold text-xl text-center"><strong>Rating:</strong> {review.rating}</p>
           
            <p className="font-semibold text-xl text-center"><strong>Genre:</strong> {review.genre}</p>
            <p className="font-semibold text-xl text-center"><strong>Reviewer Name:</strong> {review.userName}</p>
            <p className="font-semibold text-xl text-center"><strong>Reviewer Email:</strong> {review.userEmail}</p>
           
        </div>
    );
};

export default ReviewDetails;
