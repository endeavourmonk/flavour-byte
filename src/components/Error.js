import { Link, useRouteError } from "react-router-dom";
import { ERROR_GIF } from "../utils/constants";

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
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      {error.status === 404 ? (
        <>
          <img className="block mx-auto h-96" alt="404" src={ERROR_GIF} />
          <Link to="/">
            <button className="bg-lightOrange text-white py-2 px-4 rounded cursor-pointer hover:bg-orange-500">
              Home
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-5xl font-bold mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-xl mb-4">{getErrorMessage()}</p>
          {error.status && (
            <p className="text-xl mb-4 text-red-500">
              Error Code: {error.status}
            </p>
          )}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

export default Error;
