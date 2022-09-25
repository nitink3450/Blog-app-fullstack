import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='social'>
            <div className='socBox'>
              <i className='fab fa-facebook-f'></i>
              <span>SHARE</span>
            </div>
            <div className='socBox'>
              <i className='fab fa-pinterest'></i>
              <span>PINTEREST</span>
            </div>
            <div className='socBox'>
              <i className='fab fa-twitter'></i>
              <span>TWITTER</span>
            </div>
            <div className='socBox'>
              <i className='fa fa-envelope'></i>
              <span>MAIL</span>
            </div><br /><br />
            <div>
              <i className='fa fa-envelope'></i>
              <span> onepiece@gmail.com </span> <br /><br />
              <i className='fa fa-phone'></i>
              <span> +91 9876543210</span>
            </div>

          </div>
          <div className='box'>
            <h3>FITNESS</h3>
            <div className='item'>
              <img src='https://c4.wallpaperflare.com/wallpaper/679/865/217/machine-workout-fitness-gym-wallpaper-preview.jpg' alt='FITNESS' />
              <p>"The fitness enthusiast had previously revealed that he's a victim of laziness, too</p>
            </div>
            <div className='item'>
              <img src='https://images.indianexpress.com/2022/08/yoga_1200_getty.jpg' alt='FITNESS' />
              <p>Yoga expert Smriti Vashisht said that men, too, can do these exercises for good overall health.</p>
            </div>
          </div>
          <div className='box'>
            <h3>BOLLYWOOD</h3>
            <div className='item'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg' alt='BOLLYWOOD' />
              <p>Anushka Sharma is all goofy in new pictures from England: Dont be fooled by that smile</p>
            </div>
            <div className='item'>
              <img src='https://filmfare.wwmindia.com/content/2022/jun/vikramvedha41654416329.jpg' alt='BOLLYWOOD' />
              <p>Hrithik Roshan watches Lord of the Rings: The Rings of Power; says the show is too good</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Hollywood</span> <label>(5)</label>
              </li>
              <li>
                <span>Technology</span> <label>(6)</label>
              </li>
              <li>
                <span>Sport</span> <label>(7)</label>
              </li>
              <li>
                <span>Food</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made by <i className='fa fa-heart'></i> Nitin Kanhurkar
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
