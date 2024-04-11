import React, { useState } from "react";
import {PulseLoader} from "react-spinners"
const RequestForm = ({ token }) => {
  const [spinner, setSpinner] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const updateResponse = (responseValue) => {
    setSpinner(false);
    setResponse(responseValue);
  };

  const queryBot = (queryPrompt) => {
    setSpinner(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ prompt: { prompt } }),
    };

    fetch(
      "https://emea.snaplogic.com/api/1/rest/slsched/feed/ptnrPaceIntegration/projects/Joseph%20Rickard/PandaBot",
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status + " " + response.statusText);
      })
      .then((json) => updateResponse(json[0].output.content))
      .catch((error) => updateResponse(error.toString()));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    queryBot(prompt);
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Question for PandaBot:
          <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Next</button>
      </form>
      <p className="bot-response">
        {spinner ? <PulseLoader color="#f79421" /> : response}
      </p>
    </>
  );
};

export default RequestForm;
