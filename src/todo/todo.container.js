import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoPresenter from "./todo.presenter";

const TodoContainer = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([{}]);
  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigator("/");
    axios
      .request({
        url: "https://pre-onboarding-selection-task.shop/todos",
        method: "get",
        headers: {
          Authorization: `Bearer ${String(
            localStorage.getItem("access_token")
          )}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigator]);
  console.log(todoList);

  const fetchAllTodo = async () => {
    const result = await axios.request({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "get",
      headers: {
        Authorization: `Bearer ${String(localStorage.getItem("access_token"))}`,
        "Content-Type": "application/json",
      },
    });
    setTodoList(result.data);
  };

  const onChangeTodoInput = (event) => {
    setTodo(event.target.value);
  };

  const onClickCreate = async () => {
    await axios.request({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "post",
      headers: {
        Authorization: `Bearer ${String(localStorage.getItem("access_token"))}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: todo,
      },
    });
    await fetchAllTodo();
  };

  return (
    <TodoPresenter
      todoList={todoList}
      onClickCreate={onClickCreate}
      onChangeTodoInput={onChangeTodoInput}
      fetchAllTodo={fetchAllTodo}
    />
  );
};
export default TodoContainer;
