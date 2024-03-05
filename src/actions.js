import { redirect } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedBookmark = {
    title: formData.get('title'),
    url: formData.get('url'),
    username: formData.get('username')
  };
  console.log(updatedBookmark);

  await fetch(`${URL}/bookmark/${params.id}`, {
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
  const createdBookmark = {
    title: formData.get('title'),
    url: formData.get('url'),
    username: formData.get('username')
  };

  await fetch(`${URL}/bookmark`, {
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
  await fetch(`${URL}/bookmark/${params.id}`, {
    method: 'delete'
  });

  return redirect('/');
};

export const loginAction = async ({ req }) => {
  console.log(`login action`);
};

export const signupAction = async ({ req }) => {
  console.log(`signup action`);
};
