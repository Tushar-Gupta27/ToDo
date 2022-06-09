import React, { useContext } from "react";
import { NotiWrapper, Text } from "./NotificationStyle";
import { NotiContext } from "../../Contexts/NotificationContext";
function Notification() {
  const [noti, setNoti] = useContext(NotiContext);
  return (
    <NotiWrapper>
      <Text>{noti.message}</Text>
    </NotiWrapper>
  );
}

export default Notification;
