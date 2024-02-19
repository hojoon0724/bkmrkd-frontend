import {
  createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
  createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
  Route //will be put into the helper
} from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Bookmarks from './pages/bookmarks'
import { bookmarksLoader } from './loaders'
import { createAction, deleteAction, updateAction } from './actions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path=":id" element={<Bookmarks />} loader={bookmarksLoader} />
      <Route path="create" action={createAction} /> {/*this is an action and doesnt render an element*/}
      <Route path="update/:id" action={updateAction} /> {/*<------ we just added this*/}
      <Route path="delete/:id" action={deleteAction} /> {/*this is an action and doesnt render an element*/}
    </Route>
  )
)

export default router
