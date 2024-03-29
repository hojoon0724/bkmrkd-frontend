import { redirect } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedBookmark = {
    title: formData.get('title'),
    url: formData.get('url')
  };

  await fetch(`${URL}/dashboard/${params.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(updatedBookmark)
  });

  return redirect('/dashboard');
};

export const createAction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
  const createdBookmark = {
    title: formData.get('title'),
    url: formData.get('url')
  };

  await fetch(`${URL}/dashboard`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(createdBookmark)
  });
  console.log(createdBookmark);
  return redirect('/dashboard');
};

export const deleteAction = async ({ params }) => {
  await fetch(`${URL}/dashboard/${params.id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  return redirect('/dashboard');
};

export const loginAction = async ({ req }) => {
  console.log(`login action`);
};

export const signupAction = async ({ req }) => {
  console.log(`signup action`);
};

export const logoutAction = async ({ req }) => {
  localStorage.removeItem('token');
  return redirect('/');
};
