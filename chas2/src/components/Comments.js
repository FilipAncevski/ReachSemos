import React from "react";

export function Comments(props) {
  console.log(props);
  return (
    <div className="comment">
      {props.hasComments && <h2>Comments</h2>}
      {props.multipleComments === true ? (
        <p>Some comments</p>
      ) : (
        <p>Only a few collents</p>
      )}
    </div>
  );
}
