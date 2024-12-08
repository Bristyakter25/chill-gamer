import { useLoaderData } from "react-router-dom";
import ReviewCard from "./Reviewcard";
import { useState } from "react";



const AllReview = () => {
    const loadedReviews = useLoaderData();
    const [review,setReview] = useState(loadedReviews);

    return (
       <div className="w-[300px] lg:w-[750px] mx-auto my-5 ">
        <h2 className="text-center font-bold text-3xl">All Reviews</h2>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5 ">
        {
            review.map(review => <ReviewCard key={review._id}
               
                setReview={setReview}
            review ={review}
            >

            </ReviewCard>)
        }
       </div>
       </div>
    );
};

export default AllReview;