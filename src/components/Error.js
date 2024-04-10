import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div>Error</div>
    </div>
  );
};

export default Error;
