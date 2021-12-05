import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    
    <div className="bio">
        <Image className="thumbnail" src={bio.thumbnail} alt="thumbnail" />
        <div className="introduction korean">
          <p className="title">
            <strong>{name}</strong>
            <br />
            <ReactRotatingText items={bio.description} />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
    </div>
  );
}

export default Bio;
