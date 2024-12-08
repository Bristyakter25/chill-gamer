import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const MyReviews = () => {
  const { email,setReview,review } = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/review/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setReviews(data);
          } else {
            setError('No reviews found for this user');
          }
        })
        .catch((error) => {
          console.error('Error fetching user reviews:', error);
          setError('Failed to fetch user reviews');
        })
        .finally(() => setLoading(false));
    }
  }, [email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  const handleDelete = (id) => {  // Change _id to id
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/review/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remaining = review.filter(rev => rev._id!== id )
                setReview(remaining); 
              }
        })
        }
      });
  };

  return (
    <div className="my-reviews w-[400px] lg:w-[1024px] mx-auto">
      <h2 className="text-3xl font-bold text-center my-5">My Reviews</h2>
      
      <div className="overflow-x-auto">
      <table className=" mx-auto lg:w-[900px] md:w-96 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-center bg-slate-200 p-2">Game Image</th>
            <th className="text-center bg-slate-200 p-2">Game Title</th>
            <th className="text-center bg-slate-200 p-2">Review</th>
            <th className="text-center bg-slate-200 p-2">Rating</th>
            <th className="text-center bg-slate-200 p-2">Publishing Year</th>
            <th className="text-center bg-slate-200 p-2">Genre</th>
            <th className="text-center bg-slate-200 p-2">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td className="text-center p-2">
                <img className="w-[250px] rounded-lg" src={review.gameCover} alt="" />
              </td>
              <td className="text-center p-2 font-semibold">{review.gameTitle}</td>
              <td className="text-center p-2 font-semibold">{review.reviewDescription}</td>
              <td className="text-center p-2 font-semibold">{review.rating}</td>
              <td className="text-center p-2 font-semibold">{review.publishingYear}</td>
              <td className="text-center p-2 font-semibold">{review.genre}</td>
              <td>
              <Link to={`/review/user/${email}/updateReview/${review._id}`}>
              <button className="mt-5 btn">Update</button>
              </Link>
                <button
                  className="mt-5 btn bg-cyan-300"
                  onClick={() => handleDelete(review._id)}  
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MyReviews;
