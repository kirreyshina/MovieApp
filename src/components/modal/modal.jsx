import React, {useState} from 'react';
import Modal from 'react-modal';
import { IMG_API} from '../movie_item/movie_item';
import './modal.css';

const ModalWindow = ({title, overview, posterPath, releaseData, voteAverage}) => {
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal () {
    setIsOpen(true);
  };
 
  function closeModal () {
    setIsOpen(false);
  };
 
  return (
    <div>
      <button 
        className="over-btn"
        onClick={openModal}>
          Overview
      </button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay" 
        className="modal-content">
        <button  
          className="close"
          onClick={closeModal}>
            X
        </button>
        <div className="modal-info">
          <div className="modal-info-img">
            <img src={`${IMG_API}${posterPath}`} alt={title}/>
          </div>
          <div className="info">
            <div className="title_modal">{title}</div>
            <div className="overview">{overview}</div>
            <div className="release-box">
              <div className="release-data">Release: {releaseData.substring(0,4)}</div>
              <div className="vote_average">Rating: {voteAverage}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
