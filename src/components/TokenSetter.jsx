import React from "react";
import TextField from "@mui/material/TextField";

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
          <TextField
            type="text"
            onChange={updateToken}
            label="Set Bearer Token"
            variant="standard"
          />
        </label>
      </form>
    </>
  );
};

export default TokenSetter;
