import {useState, useEffect} from "react";
import LoadingBar from "../components/LoadingBar";

const LoadingPage = () => {

    const animationDices =[
        "../../images/animDice1.png",
        "../../images/animDice4.png",
        "../../images/animDice2.png",
        "../../images/animDice6.png",
        "../../images/animDice3.png",
        "../../images/animDice5.png",
    ]

    const [imageIndex, setImageIndex] =useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % animationDices.length);
        }, 150); 
        return () => clearInterval(interval); 
      }, []);

  return (
    <div className="loadingPage menu">
      <div className="formatMenu">
        <img
          className="logoMenuLoading"
          src="../../images/MajorGames2.png"
          alt="logo du jeu"
        />
        <LoadingBar />
        <div className="animationDices">
            <img className="animDices" src={animationDices[imageIndex]} alt ="animation dés chargement"/>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
