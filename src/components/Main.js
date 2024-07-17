
import phoneImage from '../assets/iphone13-Layout.png'; 
import foodImg from '../assets/FoodieLogo.png'
const MainContent = () => {
  return (
    <main className="container text-center my-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center" >
          <img  src={phoneImage} alt="Food display" id='lunchimg' />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center mt-5 sections">
        <img  src={foodImg} alt="Food display" className='foodLogo' />
          <h1>Welcome to Foodie</h1>
          <p>
            At Foodie, we redefine convenience with our seamless food delivery service. 
            Whether you're craving the flavors of home or exploring new culinary delights, 
            Foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners 
            and everything in between, our curated menu caters to every palate and preference.
          </p>
          <div>
          <button className="doublebtn">Join the Waitlist</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
