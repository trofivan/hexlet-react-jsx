import React from 'react'; // eslint-disable-line

// BEGIN (write your solution here)
export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }
  
  const titleDom = title ? <h4 className="card-title">{title}</h4> : null;
  const textDom = text ? <p className="card-text">{text}</p> : null;
  
  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
};
// END
