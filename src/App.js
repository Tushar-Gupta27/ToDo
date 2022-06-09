import React, {
  useEffect,
  useReducer,
  useState,
  useContext,
  useLayoutEffect,
} from "react";
import { AppWrapper, EmptyStorage, ListWrapper, Title } from "./AppStyles";
import List from "./Components/List/List";
import {
  addAction,
  addListAction,
  deleteAction,
  initialState,
  setAction,
  deleteListAction,
} from "./Utils";
import AddList from "./Components/AddList/AddList";
import Notification from "./Components/Notification/Notification";
import { MdDeleteForever } from "react-icons/md";
import {
  NotiContext,
  NotificationProvider,
} from "./Contexts/NotificationContext";
import Toggle from "./Components/Toggle/Toggle";

function makeNewTodo(content) {
  return {
    id: Date.now(),
    text: content[0].toUpperCase() + content.slice(1).toLowerCase(),
  };
}
function makeNewList(listHeading) {
  return {
    heading: listHeading[0].toUpperCase() + listHeading.slice(1).toLowerCase(),
    listItems: [],
  };
}

function listReducer(state, action) {
  switch (action.type) {
    case setAction:
      return { ...action.payload };
    case addAction: {
      var temp = {
        ...state.lists[action.id],
        listItems: [
          ...state.lists[action.id].listItems,
          makeNewTodo(action.payload),
        ],
      };
      // console.log(temp);
      var tobeSet = state.lists;
      tobeSet[action.id] = temp;
      return { ...state, lists: tobeSet };
    }
    case deleteAction: {
      var temp = state.lists[action.id].listItems;
      temp = temp.filter((item) => item.id !== action.listItemID);
      var tobeSet = state.lists;
      tobeSet[action.id] = { ...state.lists[action.id], listItems: temp };
      return { ...state, lists: tobeSet };
    }
    case addListAction: {
      return { ...state, lists: [...state.lists, makeNewList(action.payload)] };
    }
    case deleteListAction: {
      var temp = state.lists;
      temp = temp.filter((list, index) => index !== action.id);

      return {
        ...state,
        lists: temp,
      };
    }
    case "SETMODE": {
      return { ...state, mode: action.payload };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [noti, setNoti] = useContext(NotiContext);

  useEffect(() => {
    const retrievedListObj = localStorage.getItem("todo");
    dispatch({
      type: setAction,
      payload: retrievedListObj ? JSON.parse(retrievedListObj) : initialState,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  return (
    <AppWrapper dark={state.mode === "light" ? false : true}>
      <Title>ToDo DooDoo</Title>
      <ListWrapper>
        {state.lists.length !== 0 &&
          state.lists.map((list, index) => {
            return (
              <List
                key={index}
                listID={index}
                header={list.heading}
                listItems={list.listItems}
                dispatcher={dispatch}
              />
            );
          })}
      </ListWrapper>
      <AddList
        listLength={state.lists.length}
        dispatcher={dispatch}
        notifier={setNoti}
      />
      <EmptyStorage
        title="Delete Everything"
        onClick={() => {
          localStorage.removeItem("todo");
          dispatch({ type: setAction, payload: initialState });
          setNoti({
            state: true,
            time: 3000,
            message: "Everything Deleted",
          });
          setTimeout(
            () =>
              setNoti((prev) => ({
                ...prev,
                state: false,
              })),
            noti.time
          );
        }}
      >
        <MdDeleteForever />
      </EmptyStorage>
      {noti.state && <Notification />}
      <Toggle
        isChecked={state.mode === "light" ? false : true}
        dispatcher={dispatch}
      />
    </AppWrapper>
  );
}

export default App;
