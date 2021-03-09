import styled from 'styled-components';

export default styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  > #page-title {
    font-weight: 300;
    margin-top: 100px;
    font-size: 24px;
  }
  > #phone-input {
    padding: 8px;
    margin-top: 20px;
    width: 75%;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    outline: none;
    &::placeholder {
      color: #ccc;
      opacity: 1;
    }
  }
  > #next-button {
    padding: 11px 65px;
    background-color: #5576ab;
    font-size: 20px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    margin-top: 80px;
    height: 50px;
    width: 200px;
    > svg {
      margin-left: 5px;
      font-size: 28px;
    }
    > span {
      line-height: 0;
    }
    &:disabled,
    &[disabled]{
      opacity: .5;
      cursor: default;
    }
  }
`;
