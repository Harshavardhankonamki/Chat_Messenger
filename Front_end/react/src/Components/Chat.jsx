/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import svg from '../assets/react.svg'
import './Chat.css';
import ChatList from './ChatList';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sendMessage = async () => {
    if (message.trim()) {
      console.log('Message:', message);
      // Clear the input after sending the message
      setMessage('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Handle file upload logic here
    }
  };

  return (
    <div className="Chat-container">
      <div className={`Drawer-toggle ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(!isDrawerOpen)} >
      ☰

      </div>

      <div className={`Chat-list-container ${isDrawerOpen ? 'open' : ''}`}>
        <ChatList />
      </div>

      <div className="Messages-container">
        <h2>Chat with Ranga</h2>

        <div className="Message-container own">
          <div className="Message">
            <p>HI</p>
          </div>
        </div>

        <div className="Message-container other">
          <div className="Message">
            <p>Hello</p>
          </div>
        </div>

        <div className="Message-container own">
          <div className="Message">
            <img src={svg} alt="uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        </div>
      </div>

      <div className="Input-container">
        <input
          className="Type-message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <label className="Upload-button"> 
          <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 4.44 8.34 7.78 9.76 9.2 11 7.94V17h2V7.94l1.24 1.26 1.42-1.42L12 4.44zM5 19v-2h14v2H5z"/></svg>
        </label>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
