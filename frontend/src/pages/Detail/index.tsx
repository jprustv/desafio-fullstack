import React, { useContext, useEffect, useState } from 'react';

import './styles.css';

import BackIcon from '../../assets/img/back.svg';
import OvalBlue from '../../assets/img/oval-blue.svg';
import OvalEmpty from '../../assets/img/oval-empty.svg';
import OvalRed from '../../assets/img/oval-red.svg';
import OvalWaves from '../../assets/img/oval-waves.svg';

import ReadIcon from '../../assets/img/book-open.svg';
import HeadphonesIcon from '../../assets/img/headphones.svg';
import ShareIcon from '../../assets/img/share.svg';

import { useHistory, useLocation } from 'react-router-dom';

import { NavigationContext } from '../../contexts/navigation';

import api from '../../services/api';
interface IDetails {
  title: string;
  subtitle?: string;
  author: string;
  coverURL: string;
  description: string;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Detail: React.FC = () => {
  const query = useQuery();
  const history = useHistory();

  const { setEnabled } = useContext(NavigationContext);

  const [details, setDetails] = useState({} as IDetails);

  function handleBackButtonClick(e: React.MouseEvent) {
    e.preventDefault();
    history.goBack();
  }

  useEffect(() => {
    setEnabled(false);
    return function cleanUp() {
      setEnabled(true);
    };
  }, [setEnabled]);

  useEffect(() => {
    api
      .get(`books/details?id=${query.get('id')}`)
      .then((result) => {
        let _details = result.data.details;
        setDetails({
          title: _details.name,
          subtitle: '',
          author: _details.author,
          coverURL: _details.cover_url,
          description: _details.description,
        });
      })
      .catch((err) => {});
  }, []);

  return (
    <article className="detail">
      <div className="header">
        <div className="back-button" onClick={handleBackButtonClick}>
          <img src={BackIcon} alt="" className="back-icon" />
        </div>
        <img src={OvalWaves} alt="" className="waves-oval-bigger" />
      </div>
      <div className="cover-container">
        <img src={OvalRed} alt="" className="red-oval" />
        <img src={OvalBlue} alt="" className="blue-oval" />
        <img src={OvalEmpty} alt="" className="empty-oval" />
        <div className="waves-oval-container">
          <img src={OvalWaves} alt="" className="waves-oval" />
        </div>
        <img src={details.coverURL} alt="" className="cover" />
      </div>
      <div className="content">
        <div className="title-container">
          <span className="title">{details.title}</span>
          {/* <span className="subtitle"> : {details.subtitle}</span> */}
        </div>
        <div className="author">{details.author}</div>
        <div className="description">{details.description}</div>
      </div>
      <div className="actions-menu">
        <div className="action-button">
          <img src={ReadIcon} alt="" className="action-icon" />
          <div className="action-text">Read</div>
        </div>
        <div className="action-button">
          <img src={HeadphonesIcon} alt="" className="action-icon" />
          <div className="action-text">Listen</div>
        </div>
        <div className="action-button">
          <img src={ShareIcon} alt="" className="action-icon" />
          <div className="action-text">Share</div>
        </div>
      </div>
    </article>
  );
};

export default Detail;
