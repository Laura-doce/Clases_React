import React, { useRef, useEffect, useState } from "react";
import LogoR from "../../pages/img/logo_R.png";
import "./formulario.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "wouter";

export default function Formulario() {
  const [tipoIdentificacion, settipoIdentificacion] = useState("");
  const [numeroIdentificacion, setnumeroIdentificacion] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const captcha = useRef(null);
  const [captchaValido, setCapchaValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("No es bot");
      setCapchaValido(true);
      handSubmit();
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("No es bot");
      setUsuarioValido(true);
      setCapchaValido(true);
    } else {
      console.log("Complete el captcha");
      setUsuarioValido(false);
      setCapchaValido(false);
    }
  };

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
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form onSubmit={submit}>
          <h1 className="tit">Inicio Sesion</h1>
          <label className="text">Tipo de documento</label>
          <select
            className="input"
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

          <label className="text">Numero de documento</label>
          <input
            className="input"
            type="text"
            value={numeroIdentificacion}
            onChange={(e) => {
              e.preventDefault();
              setnumeroIdentificacion(e.target.value);
            }}
            placeholder="Ingrese su numero de documento"
            required
          />

          <label className="text">Fecha de nacimiento</label>
          <input
            type="date"
            className="input"
            value={fechaNacimiento}
            onChange={(e) => {
              e.preventDefault();
              setfechaNacimiento(e.target.value);
            }}
            placeholder="Ingrese su fecha de nacimiento"
            required
          />

          <div className="recaptcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LfeCk8qAAAAAFCFfe6OLStCWdtv6qsaZ6zwy71E"
              onChange={onChange}
            />
          </div>
          {captchaValido === false && (
            <div
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <div>Por favor acepte el Captcha</div>
            </div>
          )}
          <Link to="/ConsultaLab" className="btn btn-dark">
            Incio sesion
          </Link>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>¡Descubre Nuestro Módulo de Consulta de Laboratorio!</h1>
            <p>
              Ingresa ahora y empieza a disfrutar de la comodidad y eficiencia
              de nuestro módulo de consulta de laboratorio web. ¡Tu salud es lo
              primero!
            </p>
            <img className="loj" src={LogoR} />
          </div>
        </div>
      </div>
    </div>
  );
}
