import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css'
import SelectPlan from './Views/SelectPlan.jsx'
import YourInfo from './Views/YourInfo.jsx';
import AddOns from './Views/AddOns.jsx'
import Summary from './Views/Summary.jsx'
import Layout from './Views/Layout.jsx'
import HomeView from './Views/HomeView.jsx';
import ThankYou from './Views/ThankYou.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <div>ERROR</div>,
  },
  {
    path: '/layout',
    element: <Layout />,
    errorElement: <div>ERROR</div>,
    children: [
      {
        path: '',
        element: <Navigate to="your-info" replace />,
      },
      {
        path: 'your-info',
        element: <YourInfo />,
      },
      {
        path: 'select-plan',
        element: <SelectPlan />
      },
      {
        path: 'add-ons',
        element: <AddOns />
      },
      {
        path: 'summary',
        element: <Summary />
      },
      {
        path: 'thank-you',
        element: <ThankYou />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)