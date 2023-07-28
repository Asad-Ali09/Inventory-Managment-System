import React from "react";

const Error = ({ msg }) => {
  return (
    <>
      <div className="error">
        <h1 className="error__title heading__primary">Oops!</h1>
        <p className="error__text">{msg ? msg : "Something went wrong"}</p>
        <div className="error__text">Please Try Again Later</div>
      </div>
    </>
  );
};

export default Error;
