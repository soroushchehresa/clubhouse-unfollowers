import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
    animation: wave-animation 3s infinite ease;
  }
  > h1 {
    color: #333;
    font-size: 20px;
    margin: 0;
  }
  > span {
    color: #999;
    margin: 3px 0 0 5px;
  }
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(-5deg);
    }
    10% {
      transform: rotate(10deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(12deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(12deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(0deg);
    }
    90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
