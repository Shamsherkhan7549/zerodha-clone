// src/pages/VerifyPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyPage = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    let url = import.meta.env.VITE_BACKEND_URL;

    axios.get(`${url}/verify/${token}`)
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response?.data?.error || 'Verification failed'));
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyPage;