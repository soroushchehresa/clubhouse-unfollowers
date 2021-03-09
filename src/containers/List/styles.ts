import styled from 'styled-components';

export default styled.div`
  padding: 30px 0 0;
  position: relative;
  > #loading-wrapper {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media all and (min-width: 401px) and (max-width: 3000px) {
    > #unfollowers-list {
      height: 680px !important;
    }
  }
  @media all and (min-width: 300px) and (max-width: 400px) {
    > #unfollowers-list {
      height: calc(100vh - 110px);
    }
  }
  > #unfollowers-list {
    padding: 0;
    overflow-y: scroll;
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
