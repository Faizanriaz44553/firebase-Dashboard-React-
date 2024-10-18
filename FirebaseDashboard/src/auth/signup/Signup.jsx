import "./Signup.css";
import Button from "../../component/button/Button";
import ImgPage from "../../component/imgPage/ImgPage";
import { useForm } from "react-hook-form";
import { auth , createUserWithEmailAndPassword , onAuthStateChanged } from "../../../firebaseConfig.js";
import { redirect, useNavigate } from "react-router-dom";


function Signup() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({email , password})=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/login');
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  }); 
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/home")
    }
  });
  return (
    <div className="main-container">
      <div>
        <ImgPage
          Account="Already have an account?"
          Title="Start New Journey!"
          logo="/images/carbon_logo-slack.png"
          button="Sign In"
        />
      </div>
      <div className="input-main-data">
        <div className="main-input-div">
          <h2>Create Account</h2>
          <div className="icon-div">
            <span className="icon">
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className="icon">
              <i className="fa-brands fa-google-plus"></i>
            </span>
            <span className="icon">
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
          <p>or use ur email account</p>
          <div className="input-div">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input  {...register("name")} />
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
                <div className="button-div">
                <Button data="Sign Up" isActive={true} type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
