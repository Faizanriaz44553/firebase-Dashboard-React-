import './Login.jsx'
import { useForm } from "react-hook-form";
import ImgPage from "../../component/imgPage/ImgPage";
import { useNavigate } from 'react-router-dom';
import { auth , signInWithEmailAndPassword } from '../../../firebaseConfig.js';
import Button from '../../component/button/Button.jsx';


function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({email , password})=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/home')
    console.log(user);
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
  };
  return (
    <div className="main-container">
      <div>
        <ImgPage
          Account="Don’t have an account?"
          Title="Welcome Back!"
          button="Sign Up"
        />
      </div>
      <div className="input-main-data">
        <div className="main-input-div">
          <h2>Sign in to StarFills</h2>
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
                <input {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
                <div className="button-div">
                  <Button data="Sign In" isActive={true} type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
