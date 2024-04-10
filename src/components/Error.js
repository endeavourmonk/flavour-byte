import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const getErrorMessage = () => {
    if (error.statusText) {
      return error.statusText;
    } else if (error.message) {
      return error.message;
    } else {
      return "An unexpected error occurred.";
    }
  };

  return (
    <div className="error-page">
      <h1 className="error-title">Oops! Something went wrong.</h1>
      <p className="error-message">{getErrorMessage()}</p>
      {error.status && <p className="error-code">Error Code: {error.status}</p>}
      <button className="button" onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
