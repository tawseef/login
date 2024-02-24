import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (user === "user" && pass === "password") {
      setSuccess(true);
      setFail(false);
    } else {
      setFail(true);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {fail ? <div>Invalid username or password</div> : false}
      {success ? (
        <div> Welcome, {user}!</div>
      ) : (
        <form onSubmit={handle}>
          <label htmlFor="username">Username:</label>
          <input
          required
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            placeholder="username"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            required
            type="text"
            name="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            palceholder="password"
          />
          <div>
          <button type="Submit">Submit</button></div>
        </form>
      )}
    </div>
  );
}
