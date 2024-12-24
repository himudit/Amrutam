import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { FindDoctors } from '../pages/FindDoctors';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/find-doctors',
    element: <FindDoctors />,
  },
]);