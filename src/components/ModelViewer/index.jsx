import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import './ModelViewer.css'

const ModelViewer = () => {
  const { scene } = useGLTF("/anime_saki_bikini_girl.glb");

  return (
    <Canvas style={{ height: "750px", width: "400px" }}>
      {/* Iluminação */}
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />

      {/* Centralizando o modelo */}
      <primitive
        object={scene}
        scale={1.5} // Ajuste o tamanho
        position={[0, -3.8, 0]} // Centraliza verticalmente e horizontalmente
      />

      {/* Controle para movimentação */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ModelViewer;
