import React, { useState } from "react";
import "./registro.css";

export default function Login() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState();

  const handSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        userName,
        password,
        email,
      }),
    };

    const url = "http://10.179.64.15:8080/register";
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setmessage(data);
    } else {
      setmessage(data);
    }
  };

  return (
    <div className="form-container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form className="formu">
            <div className="mb-3 item">
              <h2 className="reg">Registro</h2>
              <label for="exampleInputEmail1" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 item">
              <label for="exampleInputPassword1" className="form-label">
                Nombre Usuario
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  e.preventDefault();
                  setUserName(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 item">
              <label for="exampleInputPassword1" className="form-label text">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 item">
              <label for="exampleInputPassword1" className="form-label">
                Correo
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Registrarse
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
