import React, { useState, useEffect } from "react";
import "./GaleriaDeVideos.css";

const GaleriaDeVideos = () => {
  const [popupVideoSrc, setPopupVideoSrc] = useState(null);

  const openPopup = (src) => {
    setPopupVideoSrc(src);
  };

  const closePopup = () => {
    setPopupVideoSrc(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && popupVideoSrc) {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupVideoSrc]);

  return (
    <section id="galeriadevideo">
      <div className="galcontainer">
        <h1 className="titu">Galería de videos</h1>
        <div className="videocontainer">
          {[
            "/imagenes/videos/video-1.mp4",
            "/imagenes/videos/video-2.mp4",
            "/imagenes/videos/video-3.mp4",
            "/imagenes/videos/video-4.mp4",
            "/imagenes/videos/video-5.mp4",
            "/imagenes/videos/video-6.mp4",
          ].map((videoSrc, index) => (
            <div
              className="video"
              key={index}
              onClick={() => openPopup(videoSrc)}
            >
              <video src={videoSrc} muted></video>
            </div>
          ))}
        </div>

        {popupVideoSrc && (
          <div className="popupvideo">
            <span onClick={closePopup}>&times;</span>
            <video src={popupVideoSrc} muted autoPlay controls></video>
          </div>
        )}
      </div>
    </section>
  );
};

export default GaleriaDeVideos;
