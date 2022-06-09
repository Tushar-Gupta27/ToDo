import React, { useState, useEffect, useContext } from "react";
import {
  AddWrapper,
  AddButton,
  AddInput,
  AddPopup,
  AddSubmit,
  AddLabel,
} from "./AddListStyle";
import { NotiContext } from "../../Contexts/NotificationContext";
import { IoAddOutline } from "react-icons/io5";
import { addListAction } from "../../Utils";

function AddList({ dispatcher, listLength}) {
  // console.log(listLength);
  const [listName, setListName] = useState("");
  const [noti, setNoti] = useContext(NotiContext);
  const [anim, setAnim] = useState(false);
  function submit(e) {
    if (e.key === "Enter" || e.type === "click") {
      if (listLength < 4) {
        dispatcher({ type: addListAction, payload: listName });
        setListName("");
      } else if (listLength === 4) {
        setAnim(true);
        setNoti({ state: true, time: 3000, message: "Can't add more than 4" });

        setTimeout(() => {
          setAnim(false);
          setListName("");
        }, 600);
        setTimeout(() => {
          setNoti((prev) => ({
            ...prev,
            state: false,
          }));
        }, 3100);
      }
    }
  }

  return (
    <AddWrapper anim={anim}>
      <AddLabel>Add List:</AddLabel>

      <AddInput
        type="text"
        onChange={(e) => setListName(e.target.value)}
        value={listName}
        placeholder="Category Name"
        onKeyDown={(e) => submit(e)}
      />
      <span />
      <AddSubmit onClick={(e) => submit(e)}>ADD</AddSubmit>
    </AddWrapper>
  );
}

export default AddList;
