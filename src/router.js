import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Bookmarks from './pages/bookmarks';
import { bookmarksLoader } from './loaders';
import { createAction, updateAction, deleteAction, loginAction, signupAction } from './actions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}>
        <Route path="login" action={loginAction} />
        <Route path="signup" action={signupAction} />
      </Route>
      <Route path="dashboard" element={<Bookmarks />} loader={bookmarksLoader} />
      <Route path="create" action={createAction} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
);

export default router;
