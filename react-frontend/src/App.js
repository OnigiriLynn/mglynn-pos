import './App.css';
import Admin from './components/admin/Admin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/frontend/pos/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main  />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
