function Auth() {
  return (
    <div className="login-form-container">
      <Form action="/login" method="POST">
        <input type="text" name="username" id="username" placeholder="username" />
        <input type="password" name="password" id="password" placeholder="password" />
        <div className="login-form-buttons">
          <input type="submit" value="Sign Up" />
          <input type="submit" value="Login" />
        </div>
      </Form>
    </div>
  );
}

export default Auth;
