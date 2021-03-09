import { createGlobalStyle } from 'styled-components';
import NunitoLight from './assets/fonts/Nunito/Nunito-Light.ttf';
import NunitoRegular from './assets/fonts/Nunito/Nunito-Regular.ttf';
import NunitoBold from './assets/fonts/Nunito/Nunito-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLight}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  body {
    background-color: #eee;
    overflow: hidden;
    color: #424242;
    margin: 0;
    font-family: 'Nunito';
    font-weight: 300;
    height: 100vh;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    color: #2a2a28;
    text-decoration: none;
  }
  
  @media all and (min-width: 300px) and (max-width: 400px) {
    body {
      background-color: #f4f0e5;
    }
    #root {
      width: 100%;
      height: 100vh;
      > i, > b {
        display: none;
      }
    }
  }
  
  @media all and (min-width: 401px) and (max-width: 3000px) {
    #root {
      z-index: 999999;
      overflow: hidden;
      padding-top: 30px;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;
      width: 360px;
      height: 780px;
      border-radius: 40px;
      box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
      &:before,
      &:after{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      &:after {
        bottom: 7px;
        width: 140px;
        height: 4px;
        background-color: #f2f2f2;
        border-radius: 10px;
      }
      &:before {
        top: 0px;
        width: 56%;
        height: 30px;
        background-color: #1f1f1f;
        border-radius: 0px 0px 40px 40px;
      }
      i,
      b,
      s,
      > span {
        position: absolute;
        display: block;
        color: transparent;
      }
      i {
        top: 0px;
        left: 50%;
        transform: translate(-50%, 6px);
        height: 8px;
        width: 15%;
        background-color: #101010;
        border-radius: 8px;
        box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
      }
      b {
        left: 10%;
        top: 0px;
        transform: translate(180px, 4px);
        width: 12px;
        height: 12px;
        background-color: #101010;
        border-radius: 12px;
        box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
        &:after {
          content: '';
          position: absolute;
          background-color: #2d4d76;
          width: 6px;
          height: 6px;
          top: 2px;
          left: 2px;
          top: 3px;
          left: 3px;
          display: block;
          border-radius: 4px;
          box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  
  #root {
    background-color: #f4f0e5;
  }
`;
