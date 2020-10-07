import React from 'react';
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import './App.css';

//components
import MyNavbar from "./components/my-navbar/navbar.component";
import MyCarousel from "./components/my-carousel/carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/About/about.component";
import Container from 'react-bootstrap/Container';
import Skills from "./pages/skills/skills.component";



const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar />
     <MyCarousel />
     <TitleMessage/>

     <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          strength={-200}
        >
        <Container className="container-box rounded">
        <Fade duration={1500}>
    <About />
    </Fade>
    </Container>
    </Parallax>
    </div>
    {/* skills */}

     <div>
        <Container className="rounded d-flex justify-content-center"> 
        <Fade duration={1500}>
    <Skills />
    </Fade>
    </Container>
    </div>

    
    </div>
  );
}

export default App;
