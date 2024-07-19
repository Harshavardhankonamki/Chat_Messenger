import './ChatList.css';
import {Link} from 'react-router-dom';

const ChatList = () => {
  return (
    <div className="chat-container">
      <div className="chat-list-container">
        <h2>Friends</h2>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              
            <Link className="user-link" to="/chat/1">Ranga Swamy </Link>
              
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
             Yesho Vardhan
              
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
            Nunna Dunna
              
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
            Bhuvan
              
            </div>
          </li>
        </ul>
        
      </div>
      
    </div>
    
  );
};

export default ChatList;