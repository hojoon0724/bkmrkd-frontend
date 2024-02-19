import {
  createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
  createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
  Route //will be put into the helper
} from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Bookmarks from './pages/bookmarks'
import { linksLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Bookmarks />} loader={linksLoader} />
      <Route path="/user" element={<Home />} />
    </Route>
  )
)

export default router
