import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginWrapper from "./components/LoginWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper";
import { loader as userLoader } from "./components/DashboardWrapper";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import { loader as jobsLoader } from "./pages/Jobs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        index: true,
        element: <LoginWrapper />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardWrapper />,
    loader: userLoader,
    children: [
      {
        path: '',
        element: <Dashboard />,
        children: [
          {
            path: 'jobs',
            element: <Jobs />,
            loader: jobsLoader
          },
          {
            path: 'profile',
            element: <h1>Profile</h1>
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;