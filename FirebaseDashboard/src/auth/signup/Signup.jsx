import './Signup.css'
import Button from '../../component/button/Button'
import ImgPage from '../../component/imgPage/ImgPage'

function Signup() {
  return (
    <div className='main-container'>
      <div>
      <ImgPage Account='Already have an account?' Title="Start New Journey!" logo="/images/carbon_logo-slack.png"/>
      </div>
      <div className="input-main-data">
        <div className="main-input-div">
            <h2 >Create Account</h2>
            <div className="icon-div">
                <span className='icon'><i class="fa-brands fa-facebook"></i></span><span className='icon'><i class="fa-brands fa-google-plus"></i></span><span className='icon'><i class="fa-brands fa-linkedin"></i></span>
            </div>
            <p>or use ur email account</p>
            <div className="input-div">
            <div>
            <input type="text" placeholder='Name'/><br />
            <input type="text" placeholder='Email'/><br />
            <input type="text" placeholder='Password'/><br />
            <p className='forget'>Forgot your password?</p>
            <div className="button-div">
            <Button data='Signup' isActive={true}/>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup


