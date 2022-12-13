import TodoElementPresenter from "./todoElement.presenter";
import axios from "axios";
import { useState } from "react";

const TodoElementContainer = (props) => {
  const fetchAllTodo = props.fetchAllTodo;
  const todo = props.todo;
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState(todo.todo);

  const onChangeEditItem = (event) => {
    setEditItem(event.target.value);
  };

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickUpdateCancel = () => {
    setIsEdit(false);
  };

  const onClickUpdateConfirm = async (event) => {
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${String(localStorage.getItem("access_token"))}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: editItem,
        isCompleted: todo.isCompleted,
      },
    });
    await fetchAllTodo();
    setIsEdit(false);
  };

  const onClickComplete = async (event) => {
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${String(localStorage.getItem("access_token"))}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: todo.todo,
        isCompleted: !todo.isCompleted,
      },
    });
    await fetchAllTodo();
  };

  const onClickDelete = async (event) => {
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${String(localStorage.getItem("access_token"))}`,
      },
    });
    await fetchAllTodo();
  };

  return (
    <TodoElementPresenter
      isEdit={isEdit}
      todo={props.todo}
      editItem={editItem}
      onClickComplete={onClickComplete}
      onClickUpdate={onClickUpdate}
      onClickUpdateCancel={onClickUpdateCancel}
      onClickUpdateConfirm={onClickUpdateConfirm}
      onClickDelete={onClickDelete}
      onChangeEditItem={onChangeEditItem}
    />
  );
};
export default TodoElementContainer;
