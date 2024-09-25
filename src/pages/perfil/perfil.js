import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form className="formu">
            <div className="mb-3 item">
              <h2 className="reg">Inicio Sesión</h2>
            </div>
            <div className="mb-3 item">
              <label for="exampleInputPassword1" className="form-label">
                Usuario
              </label>
              <input
                type="text"
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
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Inicio sesión
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
