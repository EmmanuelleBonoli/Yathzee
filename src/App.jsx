import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Root from "./components/Root.jsx";
import Game from "./pages/Game.jsx";
import Menu from "./pages/Menu.jsx";
import Settings from "./pages/Settings.jsx";
import DicesContext from "./components/DiceContext.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Menu />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "jeu-yathzee",
          element: <Game />,
        },
      ],
    },
  ]);

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
  );
}

export default App;
