import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import SelectPlan from './Views/SelectPlan.jsx'
import YourInfo from './Views/YourInfo.jsx';
import AddOns from './Views/AddOns.jsx'
import Summary from './Views/Summary.jsx'
import Layout from './Views/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>ERROR</div>,
    children: [
      {
        index: true, // Default child route
        element: <YourInfo />,
      },
      {
        path: '/select-plan',
        element: <SelectPlan />
      },
      {
        path: '/add-ons',
        element: <AddOns />
      },
      {
        path: '/summary',
        element: <Summary />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
