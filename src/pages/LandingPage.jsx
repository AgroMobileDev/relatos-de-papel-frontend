import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <h1>Relatos de Papel</h1>
        <p>Tu librería online favorita</p>
        <p>Redirigiendo en {countdown}...</p>
      </div>
    </div>
  );
};

export default LandingPage;
