import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SelectPlan from './Components/SelectPlan.jsx'
import YourInfo from './Components/YourInfo.jsx';
import AddOns from './Components/AddOns.jsx'
import Summary from './Components/Summary.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App acts as the layout
    errorElement: <Error />,
    children: [
      {
        path: '/', // Default route
        element: <YourInfo />,
        errorElement: <div>ERROR</div>,
      },
      {
        path: '/select-plan',
        element: <SelectPlan/>
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
