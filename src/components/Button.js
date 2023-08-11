import React, {useState} from 'react';

const Button = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };
/*
  const handleModalClose = () => {
    setModalVisible(false);
  };*/

  return (
    <div>
      <button onClick={handleButtonClick} >Show Modal</button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modal Content</h3>
            <p>This is modal content.</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
