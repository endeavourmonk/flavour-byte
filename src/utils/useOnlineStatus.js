import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setisOnline] = useState(true);
  useEffect(() => {
    const goOnline = () => setisOnline(true);
    const goOffline = () => setisOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.addEventListener("online", goOnline);
      window.addEventListener("offline", goOffline);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
