import { useState } from 'react';

function BookmarkEditForm({ data, onInputChange, updateAction, cancelAction }) {
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
        <input className="bookmark-name-form" name="title" type="text" value={formData.title} onChange={handleChange} />
        <input className="bookmark-url-form" name="url" type="url" value={formData.url} onChange={handleChange} />
      </div>

      <div className="edit-buttons-container">
        <button className="update-button" onClick={updateAction}>
          update
        </button>
        <button className="cancel-button" onClick={cancelAction}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default BookmarkEditForm;
