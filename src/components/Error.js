import { Link, useRouteError } from "react-router-dom";
import connectionError from "../assets/Connection Error.gif";

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
      {error.status === 404 ? (
        <>
          <img className="error-gif" alt="404" src={connectionError} />
          <Link to="/">
            <button className="button">Home</button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="error-title">Oops! Something went wrong.</h1>
          <p className="error-message">{getErrorMessage()}</p>
          {error.status && (
            <p className="error-code">Error Code: {error.status}</p>
          )}
          <button className="button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

export default Error;
