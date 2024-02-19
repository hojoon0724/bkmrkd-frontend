function Auth() {
  return (
    <div className="login-form-container">
      <form>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <div className="login-form-buttons">
          <input type="submit" value="Sign Up" />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Auth
