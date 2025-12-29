import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

/**
 * Pantalla de bienvenida con countdown de 5 segundos.
 */
const LandingPage = () => {
  const navigate = useNavigate(); //hook para redirigir
  const [countdown, setCountdown] = useState(5); //hook para el contador
  useEffect(() => {
    //llega a 0 redirige a home
    if (countdown === 0) {
      navigate("/home");
      return;
    }
    // cada segundo resta 1 al contador
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    // limpia intervalo
    return () => clearInterval(interval);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <img
          src={logo}
          alt="Relatos de Papel"
          className="w-64 md:w-80 lg:w-96 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4 text-primary-dark">
          Relatos de Papel
        </h1>
        <p className="text-xl mb-8 text-text-body">
          Tu librería online favorita
        </p>
        <p className="text-lg text-text-muted">
          Redirigiendo en {countdown}...
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
