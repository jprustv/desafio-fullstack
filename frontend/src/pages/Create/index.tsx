import React, { useEffect, useState } from 'react';

import './styles.css';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

const Create: React.FC = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [description, setDescription] = useState('');

  const initialErrorsState = {
    name: '',
    author: '',
    coverURL: '',
    description: '',
  };

  const initialFieldIsValidState = {
    name: false,
    author: false,
    coverURL: false,
    description: false,
  };

  const [errors, setErrors] = useState(initialErrorsState) as any;

  const resetErrors = () => {
    setErrors(initialErrorsState);
  };

  const [fieldIsValid, setFieldIsValid] = useState(
    initialFieldIsValidState
  ) as any;

  const resetFieldIsValid = () => {
    setFieldIsValid(initialFieldIsValidState);
  };

  function validateField(fieldName: string, value: string) {
    let isValid = false;
    switch (fieldName) {
      case 'name':
        isValid = true;
        setFieldIsValid({ ...fieldIsValid, name: isValid });
        break;
      case 'author':
        // The below RegEx will check if author's name does not contain special characters or numbers
        isValid = !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~\d]/.test(value);
        setFieldIsValid({
          ...fieldIsValid,
          author: isValid,
        });
        setErrors({
          ...errors,
          author: isValid || value === '' ? '' : `- Author's name is not valid`,
        });
        break;
      case 'coverURL':
        // RegEx to determine if a URL is valid
        // const urlRegex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
        // isValid = urlRegex.test(value) && value !== '';
        isValid = true;
        setFieldIsValid({ ...fieldIsValid, coverURL: isValid });
        setErrors({
          ...errors,
          coverURL: isValid || value === '' ? '' : '- Cover URL is not valid',
        });
        break;
      case 'description':
        isValid = true;
        setFieldIsValid({ ...fieldIsValid, description: isValid });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    validateField('name', name);
  }, [name]);

  useEffect(() => {
    validateField('author', author);
  }, [author]);

  useEffect(() => {
    validateField('coverURL', coverURL);
  }, [coverURL]);

  useEffect(() => {
    validateField('description', description);
  }, [description]);

  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    api
      .post('books', {
        name,
        author,
        coverURL,
        description,
      })
      .then(() => {
        setName('');
        setAuthor('');
        setCoverURL('');
        setDescription('');
        resetFieldIsValid();
        resetErrors();
        notify();
      })
      .catch(() => {
        console.log('Error');
      });
  }

  const notify = () =>
    toast.success('The book is added. Thanks for sharing it!');

  return (
    <article className="create">
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        <div className="header">
          <div className="title">Add a new book</div>
        </div>
        <div className="content">
          <form className="create-form" onSubmit={handleOnSubmit}>
            {(errors.name !== '' ||
              errors.author !== '' ||
              errors.coverURL !== '' ||
              errors.description !== '') && (
              <div className="form-error">
                <ErrorOutlineIcon className="error-icon" />
                <div className="error-title">Houston, we have a problem!</div>
                <div className="error-description">
                  {Object.keys(errors).map((fieldName, i) => {
                    if (errors[fieldName].length > 0) {
                      return <p key={i}>{errors[fieldName]}</p>;
                    } else {
                      return '';
                    }
                  })}
                </div>
              </div>
            )}
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
              disabled={
                !fieldIsValid.name ||
                !fieldIsValid.author ||
                !fieldIsValid.coverURL ||
                !fieldIsValid.description
                  ? true
                  : false
              }
            ></input>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Create;
