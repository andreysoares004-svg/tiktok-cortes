
import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPix, setShowPix] = useState(false);

  // Seu Pix copia e cola (use o seu código Pix real)
  const pixCode = "00020126580014BR.GOV.BCB.PIX013684f310c0-7ed5-41c1-a3c6-a7f416937752520400005303986540519.995802BR5922Andrey Soares de Souza6009SAO PAULO62140510uQZ6rSH59I63048951";

  const copyPix = () => {
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado!");
  };

  return (
    <div className="app">

      {/* Vídeo estilo TikTok */}
      <video
        className="video"
        src="https://cdn.pixabay.com/vimeo/458164503/flowers-49183.mp4?width=1080&hash=99f0c4a76b1bbfd9d8b5dd6f7cf02be8a1"
        controls
        loop
        autoPlay
        muted
      />

      {/* Botão de pagamento */}
      <button className="pix-btn" onClick={() =>
