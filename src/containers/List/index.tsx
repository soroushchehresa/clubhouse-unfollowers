/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import _ from 'lodash';
import Logo from '../../components/Logo';
import Styles from './styles';
import { getFollowingList, getFollowersList, unfollowUser } from './redux';

interface Props {
  getFollowingListLoading: boolean,
  followingListData: object[] | null,
  getFollowersListLoading: boolean,
  followersListData: object[] | null,
  getFollowingList: () => void,
  getFollowersList: () => void,
  unfollowUser: (data: {user_id: number}) => void,
  unfollowUserLoading: number,
  unfollowUserSuccess: number,
}

function List(
  {
    getFollowingListLoading,
    followingListData,
    getFollowersListLoading,
    followersListData,
    unfollowUserLoading,
    unfollowUserSuccess,
    getFollowingList: getFollowingListAction,
    getFollowersList: getFollowersListAction,
    unfollowUser: unfollowUserAction,
  }: Props,
) {
  const history = useHistory();
  const [unfollowers, setUnfollowers] = useState<object[] | null>();

  useEffect(() => {
    let token: string | null = localStorage.getItem('CH-token');
    let uid: string | null = localStorage.getItem('CH-uid');
    if (!token || !uid) {
      history.push('/');
    } else {
      getFollowingListAction();
      getFollowersListAction();
    }
  }, []);

  useEffect(() => {
    if (followingListData && followersListData) {
      const comparer = (otherArray: object[]) => {
        return (current: object[]) => {
          return otherArray.filter((other) => {
            return _.get(other, 'username') === _.get(current, 'username');
          }).length === 0;
        }
      };

      // @ts-ignore
      setUnfollowers((followingListData.filter(comparer(followersListData))).reverse());
    }
  }, [followingListData, followersListData]);

  useEffect(() => {
    if (unfollowUserSuccess && unfollowers) {
      const newUnfollowers = unfollowers.filter((item) => {
        return _.get(item, 'user_id') !== unfollowUserSuccess;
      });
      setUnfollowers(newUnfollowers);
    }
  }, [unfollowUserSuccess]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <Styles>
      <Logo />

      {(getFollowingListLoading || getFollowersListLoading) && (
        <div id="loading-wrapper">
          <PulseLoader color="#333" size={24} />
        </div>
      )}
      {
        unfollowers && ((unfollowers.length > 0) ? (
          <ul id="unfollowers-list">
            {
              unfollowers.map((item) => (
                <li className="unfollower-item">
                  <div className="details-wrapper">
                    <img src={_.get(item, 'photo_url')} width="100px" alt="profile" />
                    <p>{_.get(item, 'name')}</p>
                  </div>
                  <div className="unfollow-wrapper">
                    <button
                      disabled={!!unfollowUserLoading}
                      onClick={() => unfollowUserAction({ user_id: _.get(item, 'user_id') })}
                    >
                      {
                        unfollowUserLoading === _.get(item, 'user_id')
                          ? <PulseLoader color="#fff" size={10} />
                          : 'Unfollow'
                      }
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          <h3 id="empty-list">You don't have any unfollowers :)</h3>
        ))
      }
      <button onClick={handleLogout} id="logout-button">
        Logout
      </button>
    </Styles>
  );
}

export default connect(
  state => ({
    getFollowingListLoading: _.get(state, ['List', 'getFollowingListLoading']),
    followingListData: _.get(state, ['List', 'followingListData']),

    getFollowersListLoading: _.get(state, ['List', 'getFollowersListLoading']),
    followersListData: _.get(state, ['List', 'followersListData']),

    unfollowUserLoading: _.get(state, ['List', 'unfollowUserLoading']),
    unfollowUserSuccess: _.get(state, ['List', 'unfollowUserSuccess']),
  }),
  {
    getFollowingList,
    getFollowersList,
    unfollowUser,
  },
)(List);
