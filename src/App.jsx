import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Root from "./components/Root.jsx";
import Game from "./pages/Game.jsx";
import Menu from "./pages/Menu.jsx";
import Settings from "./pages/Settings.jsx";
import DicesContext from "./components/DiceContext.jsx";
import useScreenOrientation from "./components/useScreenOrientation";
import LoadingPage from "./pages/LoadingPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <LoadingPage />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "yathzee",
          element: <Game />,
        },
      ],
    },
  ]);

  const orientation = useScreenOrientation();
  const [counter, setCounter] = useState(3);
  const [saveDices, setSaveDices] = useState([]);
  const [resultDices, setResultDices] = useState([0, 0, 0, 0, 0]);
  const dicesGlobal = [resultDices, saveDices];
  const [resultTotalSimple, setResultTotalSimple] = useState(0);
  const [resultTotalComplex, setResultTotalComplex] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [disabledSimple, setDisabledSimple] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [disabledComplex, setDisabledComplex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <>
      {orientation === "portrait-primary" ? (
        <div className="orientationPortrait">
          <img
            className="logoYahtzee"
            src="../images/MajorGames1.png"
            alt="logo Yahtzee"
          />

          <p>
            Afin de profiter pleinement du jeu, veuillez tourner votre appareil.
          </p>
          <p>
            {" "}
            <img
              className="arrow"
              src="../images/arrow.png"
              alt="flèche tournée"
            />
          </p>
        </div>
      ) : (
        <DicesContext.Provider
          value={{
            finalScore,
            setFinalScore,
            disabledComplex,
            setDisabledComplex,
            disabledSimple,
            setDisabledSimple,
            dicesGlobal,
            saveDices,
            setSaveDices,
            resultDices,
            setResultDices,
            setCounter,
            counter,
            resultTotalSimple,
            setResultTotalSimple,
            resultTotalComplex,
            setResultTotalComplex,
          }}
        >
          <RouterProvider router={router} />
        </DicesContext.Provider>
      )}
    </>
  );
}

export default App;
