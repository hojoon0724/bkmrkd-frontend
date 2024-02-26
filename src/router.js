import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Bookmarks from './pages/bookmarks'
import { bookmarksLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Bookmarks />} loader={bookmarksLoader} />
      {/* <Route path="create" action={createAction} /> */}
      <Route path="/user" element={<Home />} />
    </Route>
  )
)

export default router
