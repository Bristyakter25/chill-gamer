import { useLoaderData } from "react-router-dom";



const UpdateReviewData = () => {
    const updateReview = useLoaderData();
    const {gameTitle} = updateReview;

    return (
        <div>
            <h2>this is update</h2>
            <p>{gameTitle}</p>
          
        </div>
    );
};

export default UpdateReviewData;