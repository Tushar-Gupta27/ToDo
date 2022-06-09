import React, { useState } from "react";
import { InputWrapper, TextInput, Label, Button } from "./InputStyles";
import { addAction } from "../../Utils";

function Input({ dispatcher, listID }) {
  const [inputText, setinputText] = useState("");

  function submit(e) {
    if (e.type === "click" || e.key === "Enter") {
      dispatcher({ type: addAction, payload: inputText, id: listID });
      setinputText("");
    } else return;
  }
  return (
    <InputWrapper>
      <TextInput
        type="text"
        onChange={(e) => setinputText(e.target.value)}
        value={inputText}
        placeholder="ToDo"
        onKeyDown={(e) => {
          submit(e);
        }}
      />
      <Button
        onClick={(e) => {
          submit(e);
        }}
      >
        Add
      </Button>
    </InputWrapper>
  );
}

export default Input;
