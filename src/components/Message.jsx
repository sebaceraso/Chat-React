/* eslint-disable react/prop-types */

import { formatDate } from './helpers/helps';
import { auth } from '../firebase';

const Message = ({ message }) => {
  let newStyles = 'message';
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    newStyles = user === newUser ? 'my-message' : 'message';
  }

  console.log(message);
  return (
    <>
      <article className={newStyles}>
        <div>
          <div className="text-message">
            <p className="text">{message.text}</p>
          </div>
          <p className="time">{formatDate(message.timestamp)}</p>
        </div>
        <img
          src={message.photo}
          alt="user photo"
          referrerPolicy="no-referrer"
        />
      </article>
    </>
  );
};

export default Message;
