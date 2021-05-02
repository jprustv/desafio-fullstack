import React, { useState } from 'react';

import './styles.css';

const Create: React.FC = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [description, setDescription] = useState('');
  return (
    <article className="create">
      <div className="container">
        <div className="header">
          <div className="title">Add a new book</div>
        </div>
        <div className="content">
          <form action="" className="create-form">
            <label className="form-label">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </label>
            <label className="form-label">
              Author
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                name="author"
              />
            </label>
            <label className="form-label">
              Cover URL
              <input
                type="text"
                value={coverURL}
                onChange={(e) => setCoverURL(e.target.value)}
                name="coverURL"
              />
            </label>
            <label className="form-label">
              Description
              <textarea
                name="description"
                rows={16}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <input
              type="submit"
              value="Add new book"
              className="submit-button"
            ></input>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Create;
