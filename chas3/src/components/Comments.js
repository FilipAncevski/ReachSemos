import React from "react";
import PropTypes from "prop-types";

export const Comments = ({ listOfComments, cifra }) => {
  return (
    <div id="comments">
      <h2>Comments</h2>
      <ol>
        {listOfComments.map((comment, i) => {
          return (
            <li key={i}>
              <p>Author: {comment.author}</p>
              <p>Content: {comment.content}</p>
            </li>
          );
        })}
      </ol>
      <p>Cifra: {cifra}</p>
    </div>
  );
};

Comments.propTypes = {
  listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  cifra: PropTypes.number.isRequired,
};
