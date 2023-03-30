import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loginAstrologer = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <div>
        <h3>My Login Page</h3>
        <hr />
        <form onSubmit={loginAstrologer}>
          <div>
            <label>
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
          </div>
          <div>
            <label>
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordErr && <p style={{ color: "red" }}>{passwordErr}</p>}
          </div>

          <button type="submit">Login</button>

          {errorMsg && <p>{errorMsg}</p>}
          <div>Don&apos;t have an account </div>
          <div>
            By login up, you agree to our <span>T&C and Privacy Policy</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
