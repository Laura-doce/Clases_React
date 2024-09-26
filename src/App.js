import "./App.css";
import login from "./pages/login/login";
import consultaLab from "./pages/consultaLab/consultaLab";
import consultaDetLab from "./pages/consultaDetLab/consultaDetLab";
import { Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section>
        <Route path="/" component={login} />
        <Route path="/consultaLab" component={consultaLab} />
        <Route path="/consultaDetLab" component={consultaDetLab} />
      </section>
    </div>
  );
}
