import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NOtFoundPage from "./pages/NOtFoundPage";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>

      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} />
      <Route path="*" element={<NOtFoundPage />} />
    </Route>
)
)


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App