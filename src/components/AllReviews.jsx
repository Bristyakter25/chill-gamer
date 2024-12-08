import { useLoaderData } from "react-router-dom";
import ReviewCard from "./Reviewcard";
import { useState } from "react";



const AllReview = () => {
    const loadedReviews = useLoaderData();
    const [review,setReview] = useState(loadedReviews);

    return (
       <div className="max-w-4xl mx-auto">
       <div className="grid grid-cols-3 gap-3 my-5 ">
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