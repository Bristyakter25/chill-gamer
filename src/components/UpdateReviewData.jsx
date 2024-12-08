import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReviewData = () => {
  const updateReview = useLoaderData();
  const { _id, gameTitle, gameCover, reviewDescription, rating, publishingYear } = updateReview;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const reviewData = {
      gameCover: form.gameCover.value,
      gameTitle: form.gameTitle.value,
      reviewDescription: form.reviewDescription.value,
      rating: parseInt(form.rating.value),
      publishingYear: parseInt(form.publishingYear.value),
    };

    fetch(`http://localhost:5000/review/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your review has been updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update the review!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating review:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Update Your Review</h1>
      <form onSubmit={handleUpdate} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block font-medium">Game Cover Image (URL)</label>
          <input
            type="url"
            name="gameCover"
            defaultValue={gameCover}
            className="input input-bordered w-full"
            placeholder="Enter the URL of the game cover"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Game Title</label>
          <input
            type="text"
            name="gameTitle"
            defaultValue={gameTitle}
            className="input input-bordered w-full"
            placeholder="Enter the game title"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Review Description</label>
          <textarea
            name="reviewDescription"
            defaultValue={reviewDescription}
            className="textarea textarea-bordered w-full"
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Rating (1-10)</label>
          <input
            type="number"
            name="rating"
            defaultValue={rating}
            className="input input-bordered w-full"
            placeholder="Enter a rating"
            min="1"
            max="10"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Publishing Year</label>
          <input
            type="number"
            name="publishingYear"
            defaultValue={publishingYear}
            className="input input-bordered w-full"
            placeholder="Enter the publishing year"
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Updated Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReviewData;
