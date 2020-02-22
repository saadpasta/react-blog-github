import React from "react";
import ReactDOM from "react-dom";
import ParticleField from "react-particles-webgl";
import "./styles.css";
import styled from "styled-components";

function App() {
  /**
   * Docs
   * @see https://timellenberger.com/libraries/react-particles-webgl
   *
   * Config Builder
   * @see https://timellenberger.com/particles
   *
   * Repo
   * @see https://github.com/tim-soft/react-particles-webgl
   */
  const config = {
    showCube: true,

    dimension: "3D",
    velocity: 1.9,
    boundaryType: "bounce",
    antialias: false,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1
    },
    lines: {
      colorMode: "rainbow",
      color: "#000",
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 150,
      visible: false
    },
    particles: {
      colorMode: "solid",
      color: "#000",
      transparency: 0.9,
      shape: "circle",
      boundingBox: "cube",
      count: 1174,
      minSize: 29,
      maxSize: 34,
      visible: true
    },
    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.85,
      enableZoom: true,
      autoRotate: true,
      autoRotateSpeed: 0.8,
      resetCameraFlag: false
    }
  };

  return (
    <div className="App">
      <ParticleField config={config} />
    </div>
  );
}

export default styled(App)``;
