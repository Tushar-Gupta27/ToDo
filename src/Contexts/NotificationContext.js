import React, { useState, createContext } from "react";

export const NotiContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [noti, setNoti] = useState({
    state: false,
    time: 3000,
    message: "Everything Deleted",
  });

  return (
    <NotiContext.Provider value={[noti, setNoti]}>
      {children}
    </NotiContext.Provider>
  );
};
