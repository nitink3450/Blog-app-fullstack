import React from 'react'
import './header.css'
import Lottie from 'react-lottie';
import worldMap from '../../Assets/logo.json'
import worldMobile from '../../Assets/world-mobile.json'
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: worldMobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: worldMap,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
return (
  <>
    <div className='header-conatiner'>
      <span className='map'><Lottie
        options={defaultOptions3}
        height={90}
        width={850}
      />
      </span>
      <span className='the-90'>The</span>
      <span className='siren'>Siren</span>
      <span><Lottie
        options={defaultOptions}
        height={90}
        width={100}
      />
      </span>
      <span className='map1'><Lottie
        options={defaultOptions3}
        height={90}
        width={850}
      />
      </span>
    </div>
  </>
)
}

export default Header;