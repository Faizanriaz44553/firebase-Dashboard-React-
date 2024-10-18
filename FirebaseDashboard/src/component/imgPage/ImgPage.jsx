import "./ImgPage.css";
import Button from "../button/Button";

function ImgPage({ Title, Account, data, isActive, logo ,button }) {
  return (
    <div className="main-div">
      <div
        className="main-wraper"
        style={{
          backgroundImage: `url(/images/background.jpeg)`,
        }}
      >
        <div className="container">
          <div>
            <img src={logo ? logo : ""} alt="" />
          </div>
          <div>
            <h1>{Title}</h1>
          </div>
          <div>
            <h2>{Account}</h2>
          </div>
          <div className="button-div">
            <Button data={button} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgPage;
