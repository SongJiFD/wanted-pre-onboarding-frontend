import { Fragment } from "react";

const TodoElementPresenter = (props) => {
  return (
    <>
      <div style={{ width: "200px", textAlign: "center" }}>
        {props.todo.todo}
      </div>
      <div style={{ width: "200px", textAlign: "center" }}>
        {props.todo.isCompleted ? "완료" : "미완료"}
        <br />
        <button id={props.todo.id} onClick={props.onClickComplete}>
          {props.todo.isCompleted ? "되돌리기" : "완료하기"}
        </button>
      </div>
      {props.isEdit ? (
        <div style={{ width: "200px", textAlign: "center" }}>
          <input
            defaultValue={props.editItem}
            onChange={props.onChangeEditItem}
          />
          <br />
          <button id={props.todo.id} onClick={props.onClickUpdateConfirm}>
            제출
          </button>
          <button onClick={props.onClickUpdateCancel}>취소</button>
        </div>
      ) : (
        <div style={{ width: "200px", textAlign: "center" }}>
          <button onClick={props.onClickUpdate}>수정하기</button>
        </div>
      )}
      <div style={{ width: "200px", textAlign: "center" }}>
        <button id={props.todo.id} onClick={props.onClickDelete}>
          삭제
        </button>
      </div>
    </>
  );
};
export default TodoElementPresenter;
