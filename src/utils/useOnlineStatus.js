import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setisOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", setisOnline(true));
    window.addEventListener("offline", setisOnline(false));

    return () => {
      window.addEventListener("online", setisOnline(true));
      window.addEventListener("offline", setisOnline(false));
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
