import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTripPage } from './pages/create-trip'
import { TripDetailsPage } from './pages/trip-details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
])

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
