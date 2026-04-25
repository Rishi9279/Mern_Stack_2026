import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setError("All field should be required to fill");
      return;
    }
    if (password.length < 6) {
      setError("Password must be greater than 6");
      return;
    }

    console.log({
      name,
      password,
    });

    setName("");
    setPassword("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("")
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("")
          }}
        />

        <button disabled={!name || !password} type="submit">
          Login
        </button>
      </form>

      {error && <p>{error}</p>}

      <h2>Name:{name}</h2>
     
    </div>
  );
};

export default App;
