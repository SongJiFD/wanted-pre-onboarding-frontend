const SignUpPresenter = (props) => {
  return (
    <>
      <div>
        <label>아이디</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={props.onChangeEmail}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={props.onChangePassword}
        />
      </div>
      <div>
        {props.emailStatus && props.passStatus ? (
          <button onClick={props.onClickSignUp}>회원가입</button>
        ) : (
          <button disabled onClick={props.onClickSignUp}>
            회원가입
          </button>
        )}
      </div>
    </>
  );
};
export default SignUpPresenter;
