import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsActions";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const message = useSelector((state) => state.CommentsReducer.message);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  return (
    <div id="comments">
      <h2>Comments: {comments.length}</h2>
      {message && <p>{message}</p>}
    </div>
  );
};
