import React, { useEffect, useState } from "react";
import "./formulario.css";
import Icono from "../../pages/img/certificado.png";
import Logo from "../../pages/img/logo_R.png";
import UserDoc from "../../pages/img/identi.png";

export default function Formulario() {
  const [tipoIdentificacion, settipoIdentificacion] = useState("");
  const [numeroIdentificacion, setnumeroIdentificacion] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");

  const handSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        tipoIdentificacion,
        numeroIdentificacion,
        fechaNacimiento,
      }),
    };

    const url = "http://10.170.129.197:8080/login";
    const response = await fetch(url, requestOptions);
    const data = await response.json();
  };

  return (
    <div className="container l">
      <div className="form-container ">
        <div className="col col-1">
          <div className="image-layer">
            <h1>¿Quieres consultar tus laboratorios ?</h1>
            <img src={Icono} className="form-imgage-main" />
          </div>
          <p className="featured-words">
            No esperes más para cuidar de tu salud.
          </p>
          <img src={Logo} className="form-imge" />
        </div>
        <div className="col col-2">
          <div className="login-fom">
            <div className="form-tittle">
              <h1>
                Incio <span>Sesion</span>
              </h1>
            </div>
            <div className="form-inputs">
              <div className="input-box">
                <label className="tip-doc">Tipo de documento</label>
                <select
                  id="seleccion"
                  value={tipoIdentificacion}
                  onChange={(e) => {
                    e.preventDefault();
                    settipoIdentificacion(e.target.value);
                  }}
                  required
                >
                  <option value="">Selecione un tipo de documento</option>
                  <option value="CC">Cedula de ciudadania</option>
                  <option value="TI">Tarjeta de identidad</option>
                  <option value="PP">Permiso de permanencía</option>
                </select>
              </div>
              <div className="input-box">
                <label className="tip-doc">Numero de documento</label>
                <input
                  type="number"
                  value={numeroIdentificacion}
                  onChange={(e) => {
                    e.preventDefault();
                    setnumeroIdentificacion(e.target.value);
                  }}
                  className="input-field"
                  placeholder="Ingrese su numero de documento"
                  max={8}
                  required
                />
              </div>
              <div className="input-box">
                <label className="tip-doc">Fecha de nacimiento</label>
                <input
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => {
                    e.preventDefault();
                    setfechaNacimiento(e.target.value);
                  }}
                  className="input-field"
                  placeholder="Ingrese su fecha de nacimiento"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <button className="input-submit">
                <span>Inicio sesion</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
