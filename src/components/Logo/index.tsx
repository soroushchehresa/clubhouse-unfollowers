import React from 'react';
import Styles from './styles';
import wave from '../../assets/images/wave-emoji.png';

export default function Logo() {
  return (
    <Styles>
      <img src={wave} alt="logo" />
      <h1>Clubhouse</h1>
      <span>Unfollowers</span>
    </Styles>
  )
}
