
import React from 'react';
import "./CommentBody.css";

// Function based React Component
const CommentBody = (props) => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use 
  // this.props.comment and this.props.date
  let classList = `CommentBody`;
  const body = props.bodyProps;
  const date = props.dateProps;
  const time = props.timeProps;

  return(
    <div className={classList}>
      <p className="Body">
        {body}
      </p>
      <p className="Date">
        {date} <br/>
        {time}
      </p>
    </div>
  );
}

export default CommentBody;