import { useState } from 'react';
import axios from 'axios';

const projectID = '6be35fa6-d7fe-4b29-9072-2287106f30be';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
     await axios.get('https://api.chatengine.io/chats', { headers: authObject })

localStorage.setItem('username', username)
localStorage.setItem('password', password)







    }
  };
};
