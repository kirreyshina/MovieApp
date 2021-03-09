import React from 'react';
import Modal from 'react-modal';
import { IMG_API} from '../movie_item/movie_item';
import './modal.css';

const ModalWindow = ({ movie, onClose }) => {
  const { title, overview, poster_path, release_date, vote_average } = movie || {};
 
  return (
    <div>
      <Modal 
        isOpen={movie !== null} 
        onRequestClose={onClose}
        overlayClassName="modal-overlay" 
        className="modal-content">
        <button  
          className="close"
          onClick={onClose}>
            X
        </button>
        <div className="modal-info">
          <div className="modal-info-img">
            <img src={`${IMG_API}${poster_path}`} alt={title}/>
          </div>
          <div className="info">
            <div className="title_modal">{title}</div>
            <div className="overview">{overview}</div>
            <div className="release-box">
              <div className="release-data">
                Release: {release_date ? release_date.substring(0,4) : 'No date'}
              </div>
              <div className="vote_average">Rating: {vote_average}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
