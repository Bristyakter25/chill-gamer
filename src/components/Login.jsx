import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

  const {logInUser} = useContext(AuthContext);

  const handleLogIn = e  =>{
    e.preventDefault();
    const email= e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    logInUser(email,password)
    .then(result =>{
      console.log(result.user);
      Swal.fire({
        title: "Successful",
        text: "You successfully LoggedIn",
        icon: "success"
      });


    })
    .catch(error =>{
      console.log('error',error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              
            });
        })
  }
    return (
        
       <div className="hero  my-5">
  <div className="hero-content flex-col ">
  <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center font-semibold">New User? <Link to='/register' className="text-red-500">Register </Link>here!</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;