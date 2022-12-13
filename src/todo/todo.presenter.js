import { Fragment } from "react";
import TodoElementContainer from "../todoElement/todoElement.container";

const TodoPresenter = (props) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="할일을 입력하세요"
          onChange={props.onChangeTodoInput}
        />
        <button onClick={props.onClickCreate}>추가</button>
      </div>
      <div>
        <div style={{ display: "flex", maxWidth: "400px" }}>
          <div style={{ width: "200px", textAlign: "center" }}>할일</div>
          <div style={{ width: "200px", textAlign: "center" }}>완료 여부</div>
          <div style={{ width: "200px", textAlign: "center" }}>수정</div>
          <div style={{ width: "200px", textAlign: "center" }}>삭제</div>
        </div>
        {props.todoList?.map((todo) => {
          return (
            <div
              style={{ display: "flex", maxWidth: "400px" }}
              key={String(todo.id)}
            >
              <TodoElementContainer
                todo={todo}
                fetchAllTodo={props.fetchAllTodo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoPresenter;
