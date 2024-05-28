import { Form } from 'react-router-dom';
import { useState } from 'react';

function BookmarkEditForm({ data, onInputChange, updateAction, cancelAction }) {
  const [formData, setFormData] = useState({
    ...data,
  });

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormData({ ...formData, [name]: value });
    onInputChange(event.target.value);
  };

  return (
    <div className="bookmark-data">
      <div className="content">
        <input
          className="bookmark-name-form"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input className="bookmark-url-form" name="url" type="url" value={formData.url} onChange={handleInputChange} />
      </div>

      <div className="edit-buttons-container">
        <button className="update-button" onClick={updateAction}>
          {/* <button className="update-button" onClick={updateTest}> */}
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
