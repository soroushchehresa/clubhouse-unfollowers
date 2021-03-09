import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Styles from './styles';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    let token: string | null = localStorage.getItem('CH-token');
    let uid: string | null = localStorage.getItem('CH-uid');
    if (token && uid) {
      history.push('/list');
    } else {
      history.push('/login')
    }
  }, []);

  return (
    <Styles>
      <h1>Loading...</h1>
    </Styles>
  );
}
