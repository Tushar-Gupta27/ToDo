import React, { useContext } from "react";
import { ToggleContainer, Checkbox, Label } from "./ToggleStyles";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { NotiContext } from "../../Contexts/NotificationContext";

function Toggle({ isChecked, dispatcher }) {
  const [noti, setNoti] = useContext(NotiContext);
  return (
    <ToggleContainer>
      <Checkbox
        id="toggleCheck"
        type="checkbox"
        onChange={(e) => {
          dispatcher({
            type: "SETMODE",
            payload: e.target.checked ? "dark" : "light",
          });
          setNoti({
            ...noti,
            state: true,
            message: !isChecked ? "Dark Mode" : "Light Mode",
          });
          setTimeout(() => {
            setNoti((prev) => ({ ...prev, state: false }));
          }, 3000);
        }}
        checked={isChecked}
      />
      <Label checked={isChecked} htmlFor="toggleCheck">
        <div>
          <span>{isChecked ? <RiMoonClearFill /> : <RiSunLine />}</span>
        </div>
      </Label>
    </ToggleContainer>
  );
}

export default Toggle;
