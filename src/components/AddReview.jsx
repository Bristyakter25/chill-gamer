import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const AddReview = () => {
  const { user } = useContext(AuthContext); // Access logged-in user info
  const navigate = useNavigate();
  const [genres, setGenres] = useState(["Action", "RPG", "Adventure", "Shooter", "Puzzle"]); // Dropdown options

  // Redirect non-logged-in users
  if (!user) {
    navigate("/login");
    return null; // Prevent rendering if not logged in
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const reviewData = {
      gameCover: form.gameCover.value,
      gameTitle: form.gameTitle.value,
      reviewDescription: form.reviewDescription.value,
      rating: parseInt(form.rating.value),
      publishingYear: parseInt(form.publishingYear.value),
      genre: form.genre.value,
      userEmail: user.email,
      userName:  "Anonymous",
     
    };
    console.log(reviewData);

    

// send data to the server
fetch("http://localhost:5000/review",{
    method: 'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(reviewData)
})
.then(res => res.json())
.then(data =>{
    if (data.insertedId) {
                  Swal.fire({
                    title: "Success!",
                    text: "Your review has been submitted successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                  });
                  
                }
})
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Add New Review</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {/* Game Cover Image */}
        <div>
          <label className="block font-medium">Game Cover Image (URL)</label>
          <input
            type="url"
            name="gameCover"
            className="input input-bordered w-full"
            placeholder="Enter the URL of the game cover"
            required
          />
        </div>

        {/* Game Title */}
        <div>
          <label className="block font-medium">Game Title</label>
          <input
            type="text"
            name="gameTitle"
            className="input input-bordered w-full"
            placeholder="Enter the game title"
            required
          />
        </div>

        {/* Review Description */}
        <div>
          <label className="block font-medium">Review Description</label>
          <textarea
            name="reviewDescription"
            className="textarea textarea-bordered w-full"
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium">Rating (1-10)</label>
          <input
            type="number"
            name="rating"
            className="input input-bordered w-full"
            placeholder="Enter a rating"
            min="1"
            max="10"
            required
          />
        </div>

        {/* Publishing Year */}
        <div>
          <label className="block font-medium">Publishing Year</label>
          <input
            type="number"
            name="publishingYear"
            className="input input-bordered w-full"
            placeholder="Enter the publishing year"
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block font-medium">Genre</label>
          <select name="genre" className="select select-bordered w-full" required>
            <option value="" disabled selected>
              Select a genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* User Email */}
        <div>
          <label className="block font-medium">User Email</label>
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            value={ "Anonymous"}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
