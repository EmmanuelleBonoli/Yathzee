import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Game from "./pages/Game.jsx";
import Menu from "./pages/Menu.jsx";
import Settings from "./pages/Settings.jsx";

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

  return <RouterProvider router={router} />;
}

export default App;
