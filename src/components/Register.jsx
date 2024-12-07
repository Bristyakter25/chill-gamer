import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

  
    const {createUser}  = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();
      
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            const newUser = {name,email}

            // save new user
            fetch("http://localhost:5000/users",{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)

            })
            .then(res => res.json())
            .then(data =>{
                console.log('user created to db',data);
                Swal.fire({
                  title: "Successful",
                  text: "You successfully registered!",
                  icon: "success"
                });
            })

        })
        .catch(error =>{
            console.log('error',error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              
            });
        })


        // createUser();
    }

    return (
        <div className="hero  my-5">
  <div className="hero-content flex-col ">
  <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" placeholder="photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center font-semibold">Already have an account? <Link to='/login' className="text-red-500">Login </Link>here!</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;