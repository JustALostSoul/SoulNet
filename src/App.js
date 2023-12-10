import logo from './logo.svg';
import './App.css';
import Navbar from './navigation/Navbar';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Hoga from './pages/Hoga';
import { Dashboard } from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar /><Outlet /></div>,
    children: [
      {
        path: "de",
        element: <Dashboard />
      },
      {
        path: "de/hoga/",
        element: <Hoga />
      }
    ]
  },
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router}>
          
        </RouterProvider>
    </div>
  );
}

export default App;
