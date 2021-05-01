import React from 'react';

import './styles.css';

import BackIcon from '../../assets/img/back.svg';
import OvalBlue from '../../assets/img/oval-blue.svg';
import OvalEmpty from '../../assets/img/oval-empty.svg';
import OvalRed from '../../assets/img/oval-red.svg';
import OvalWaves from '../../assets/img/oval-waves.svg';

import details from '../../services/details.json';

const Detail: React.FC = () => {
  return (
    <article className="detail">
      <div className="header">
        <div className="back-button">
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
    </article>
  );
};

export default Detail;
