import { Dispatch } from 'redux';

export const GET_FOLLOWING_LIST: string = 'clubhouse-unfollowers/List/GET_FOLLOWING_LIST';
export const GET_FOLLOWING_LIST_SUCCESS: string = 'clubhouse-unfollowers/List/GET_FOLLOWING_LIST_SUCCESS';
export const GET_FOLLOWING_LIST_FAIL: string = 'clubhouse-unfollowers/List/GET_FOLLOWING_LIST_FAIL';

export const GET_FOLLOWERS_LIST: string = 'clubhouse-unfollowers/List/GET_FOLLOWERS_LIST';
export const GET_FOLLOWERS_LIST_SUCCESS: string = 'clubhouse-unfollowers/List/GET_FOLLOWERS_LIST_SUCCESS';
export const GET_FOLLOWERS_LIST_FAIL: string = 'clubhouse-unfollowers/List/GET_FOLLOWERS_LIST_FAIL';

export const UNFOLLOW_USER: string = 'clubhouse-unfollowers/List/UNFOLLOW_USER';
export const UNFOLLOW_USER_SUCCESS: string = 'clubhouse-unfollowers/List/UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAIL: string = 'clubhouse-unfollowers/List/UNFOLLOW_USER_FAIL';

const initialState: object = {
  getFollowingListLoading: false,
  followingListData: null,
  getFollowingListError: null,

  getFollowersListLoading: false,
  followersListData: null,
  getFollowersListError: null,

  unfollowUserLoading: null,
  unfollowUserSuccess: null,
  unfollowUserError: null,
};

export default function reducer(state = initialState, action: {type: string, data: any}) {
  switch (action.type) {
    case GET_FOLLOWING_LIST:
      return ({
        ...state,
        getFollowingListLoading: true,
      });
    case GET_FOLLOWING_LIST_SUCCESS:
      return ({
        ...state,
        getFollowingListLoading: false,
        followingListData: action.data,
      });
    case GET_FOLLOWING_LIST_FAIL:
      return ({
        ...state,
        getFollowingListLoading: false,
        getFollowingListError: action.data,
      });

    case GET_FOLLOWERS_LIST:
      return ({
        ...state,
        getFollowersListLoading: true,
      });
    case GET_FOLLOWERS_LIST_SUCCESS:
      return ({
        ...state,
        getFollowersListLoading: false,
        followersListData: action.data,
      });
    case GET_FOLLOWERS_LIST_FAIL:
      return ({
        ...state,
        getFollowersListLoading: false,
        getFollowersListError: action.data,
      });

    case UNFOLLOW_USER:
      return ({
        ...state,
        unfollowUserLoading: action.data,
      });
    case UNFOLLOW_USER_SUCCESS:
      return ({
        ...state,
        unfollowUserLoading: null,
        unfollowUserSuccess: action.data,
      });
    case UNFOLLOW_USER_FAIL:
      return ({
        ...state,
        unfollowUserLoading: null,
        unfollowUserError: action.data,
      });
    default:
      return state;
  }
}

export const getFollowingList = () => (dispatch: Dispatch) => (
  dispatch({ type: GET_FOLLOWING_LIST })
);

export const getFollowersList = () => (dispatch: Dispatch) => (
  dispatch({ type: GET_FOLLOWERS_LIST })
);

export const unfollowUser = (data: {user_id: number}) => (dispatch: Dispatch) => (
  dispatch({ type: UNFOLLOW_USER, data: data.user_id })
);
