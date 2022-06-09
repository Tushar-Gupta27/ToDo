import React, { useState } from "react";
import { ListItemWrapper, ListItemText, DeleteBut } from "./ListItemStyle";
import { MdOutlineDelete } from "react-icons/md";
import { deleteAction } from "../../Utils";

function ListItem({ itemID, itemBody, dispatcher, listID }) {
  const [delAnim, setDelAnim] = useState(false);
  return (
    <ListItemWrapper id={itemID}>
      <ListItemText anim={delAnim}>{itemBody}</ListItemText>
      <DeleteBut
        onClick={() => {
          setDelAnim(true);
          setTimeout(() => {
            dispatcher({ type: deleteAction, listItemID: itemID, id: listID });
          }, 600);
        }}
      >
        <MdOutlineDelete />
      </DeleteBut>
    </ListItemWrapper>
  );
}

export default ListItem;
