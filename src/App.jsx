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

  const [saveDices, setSaveDices] = useState([])
  const [resultDices, setResultDices] = useState([0, 0, 0, 0, 0]);
  const dicesGlobal = [resultDices, saveDices]


  return (
  <DicesContext.Provider value={{dicesGlobal:dicesGlobal,saveDices:saveDices,setSaveDices:setSaveDices,resultDices:resultDices, setResultDices:setResultDices}}>
  <RouterProvider router={router} />
  </DicesContext.Provider>
  )
}

export default App;
