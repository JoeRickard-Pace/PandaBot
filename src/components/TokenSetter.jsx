import React from "react";

const TokenSetter = ({ setToken }) => {
  const updateToken = (event) => {
    setToken(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToken(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Set Token: <input type="text" onChange={updateToken} />
        </label>
      </form>
    </>
  );
};

export default TokenSetter;
