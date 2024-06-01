import { useState } from 'react';

function BookmarkForm({ data, onInputChange, createAction }) {
  const [formData, setFormData] = useState({
    ...data,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onInputChange(updatedFormData);
  };

  return (
    <div className="bookmark-data">
      <div className="content">
        <input
          className="bookmark-name-form"
          name="title"
          type="text"
          placeholder="Name"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="bookmark-url-form"
          name="url"
          type="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
        />
      </div>
      <div className="save-button">
        <input type="submit" onClick={createAction} />
      </div>
    </div>
  );
}

export default BookmarkForm;
