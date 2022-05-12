import {
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
} from "../constants/CommentsConstats";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => dispatch(fetchCommentsSuccess(json)))
      .catch((err) => dispatch(fetchCommentsFail(err)));
  };
};
