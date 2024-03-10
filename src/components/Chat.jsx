/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { auth, db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import Message from '../components/Message';
import SendMessage from './SendMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsubscribe = onSnapshot(newQuery, (querySpanshot) => {
      let currentMessages = [];
      querySpanshot.forEach((item) => {
        currentMessages.push({ content: item.data(), id: item.id });
      });
      setMessages(currentMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <section className="chat-content">
      {messages &&
        messages.map((item) => (
          <Message key={item.id} message={item.content} />
        ))}
      <SendMessage />
    </section>
  );
};

export default Chat;
