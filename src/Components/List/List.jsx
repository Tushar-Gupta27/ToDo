import React from "react";
import {
  ListBody,
  Heading,
  ListDelete,
  ListEdit,
  ItemsWrapper,
} from "./ListStyles";
import Input from "../Input/Input";
import ListItem from "../ListItem/ListItem";
import { MdDelete } from "react-icons/md";
import { deleteListAction } from "../../Utils";

function List({ header, listItems, dispatcher, listID }) {
  return (
    <ListBody>
      <Heading>
        <h1>{header}</h1>
      </Heading>
      <Input dispatcher={dispatcher} listID={listID} />
      <ItemsWrapper>
        {listItems.length !== 0 &&
          listItems.map((listItem) => {
            return (
              <ListItem
                dispatcher={dispatcher}
                listID={listID}
                key={listItem.id}
                itemID={listItem.id}
                itemBody={listItem.text}
              />
            );
          })}
      </ItemsWrapper>

      {/* <ListEdit onClick={()=>}></ListEdit> */}
      <ListDelete
        title="Delete List"
        onClick={() => dispatcher({ type: deleteListAction, id: listID })}
      >
        <MdDelete />
      </ListDelete>
    </ListBody>
  );
}

export default List;
