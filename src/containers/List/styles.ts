import styled from 'styled-components';

export default styled.div`
  padding: 30px 0 0;
  position: relative;
  overflow-x: scroll;
  height: calc(100% - 30px);
  > #loading-wrapper {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > #empty-list {
    font-size: 16px;
    color: #ccc;
    text-align: center;
    margin: 50px 0;
    display: block;
    font-weight: 300;
  }
  #logout-button {
    padding: 12px;
    display: block;
    background-color: #5576ab;
    width: 80%;
    margin: 30px auto;
    font-size: 18px;
    color: #fff;
    border-radius: 20px;
  }
  > #unfollowers-list {
    padding: 0;
    margin-top: 20px;
    > .unfollower-item {
      padding: 10px;
      height: 50px;
      background-color: #fff;
      list-style: none;
      margin: 10px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      > .details-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > img {
          border-radius: 25px;
          width: 50px;
          height: 50px;
          background-color: #ccc;
        }
        > p {
          margin-left: 10px;
          font-weight: 600;
        }
      }
      > .unfollow-wrapper {
        position: absolute;
        right: 10px;
        > button {
          width: 75px;
          text-align: center;
          padding: 10px;
          background-color: #5576ab;
          color: #fff;
          border-radius: 10px;
          &:disabled,
          &[disabled]{
            opacity: .5;
            cursor: default;
          }
          > span {
            margin: 0;
          }
        }
      }
    }
  }
`;
