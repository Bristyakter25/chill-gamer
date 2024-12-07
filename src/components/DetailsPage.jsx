import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsPage = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/highest-rated-games/${id}`)
        .then(res =>res.json())
        .then(data => setDetails(data));

    },[id]);

    if (!details) {
                return <p>Details not found!</p>;
            }
    return (
       <div className="flex justify-center items-center">
         <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src={details.image}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{details.title}</h2>
    <p className="font-semibold mb-2">{details.description}</p>
    <p className="font-semibold text-xl mb-2">Developer: {details.developer}</p>
    <p className="font-semibold text-xl mb-2">Release Date: {details.releaseDate}</p>
    
    
  </div>
</div>
       </div>
    );
};

export default DetailsPage;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; 

// const ReviewDetails = () => {
//     const { id } = useParams();
//     const [review, setReview] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`http://localhost:5000/reviews/${id}`) 
//             .then((res) => res.json())
//             .then((data) => {
//                 setReview(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching review:", error);
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!review) {
//         return <p>Review not found!</p>;
//     }

//     return (
//         <div className="w-[600px] mx-auto my-10">
            
//             <img src={review.gameCover} alt={review.title} className="w-full rounded-xl" />
//             <p className="font-semibold text-3xl text-center">{review.gameTitle}</p>
//             <p className="font-semibold text-xl text-center">{review.description}</p>
//             <p className="font-semibold text-xl text-center"><strong>Rating:</strong> {review.rating}</p>
           
//             <p className="font-semibold text-xl text-center"><strong>Genre:</strong> {review.genre}</p>
//             <p className="font-semibold text-xl text-center"><strong>Reviewer Name:</strong> {review.userName}</p>
//             <p className="font-semibold text-xl text-center"><strong>Reviewer Email:</strong> {review.userEmail}</p>
//         </div>
//     );
// };

// export default ReviewDetails;
