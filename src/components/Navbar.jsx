import { NavLink } from "react-router-dom";
import logo from "../assets/gamer logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const {user,logOutUser,userEmail} = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error(error));
  };
    const lists = <>
   <NavLink to="/"> <li><a>Home</a></li></NavLink>
   <NavLink to="/addReview"><li><a>Add Review</a></li></NavLink>
   <NavLink to="/allReviews"><li><a>All Review</a></li></NavLink>
   <NavLink to={`/review/user/${userEmail}`}><li><a>My Reviews</a></li></NavLink>
   
    
    <li><a>Game WatchList</a></li>
    </>
    return (
        <div className='bg-green-300'>
        <div className="navbar max-w-5xl mx-auto ">

  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {lists}
      </ul>
    </div>
    <img className="w-10 rounded-full" src={logo}alt="" />
    <a className="ml-2 text-xl">Chill Gamer</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-0">
     {lists}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
  <div className="flex-none gap-2">
        {user ? (
          <div className=" items-center gap-1">
           
           <span className="font-semibold">{user.email}</span>
            <button onClick={handleLogOut} >
              Log Out
            </button>
          </div>
        ) : (
          <a href="/login" >
            Login
          </a>
        )}
        
      </div>
  <NavLink to='/register'> <button>Register</button></NavLink><br />
 
    
 
  </div>
  
</div>

</div>


    );
};

export default Navbar;