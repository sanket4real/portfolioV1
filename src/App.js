import React from 'react';
import './App.css';

//components
import MyNavbar from "./components/my-navbar/navbar.component";
import MyCarousel from "./components/my-carousel/carousel.component";
import TitleMessage from "./components/title-message/title-message.component";


const App = () => {
  return (
    <div>
     <MyNavbar />
     <MyCarousel />
     <TitleMessage/>
   
    </div>
  );
}

export default App;
