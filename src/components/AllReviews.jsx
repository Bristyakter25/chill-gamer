import { useLoaderData } from "react-router-dom";
import ReviewCard from "./Reviewcard";


const AllReview = () => {
    const reviews = useLoaderData();
    return (
       <div className="max-w-4xl mx-auto">
       <div className="grid grid-cols-3 gap-3 my-5 ">
        {
            reviews.map(review => <ReviewCard key={review._id}
            review={review}>

            </ReviewCard>)
        }
       </div>
       </div>
    );
};

export default AllReview;