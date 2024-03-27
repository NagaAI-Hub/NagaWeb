import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AsciiVortex: React.FC = () => {
  const vortexRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!vortexRef.current) return;

    const fontSize = 12;
    const fontFamily = "monospace";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    context.font = `${fontSize}px ${fontFamily}`;

    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    const textWidth = context.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = fontSize;

    context.fillStyle = "white";
    context.font = `${fontSize}px ${fontFamily}`;
    context.fillText(text, 0, fontSize);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.PointsMaterial({
      size: fontSize,
      sizeAttenuation: true,
      map: texture,
      transparent: true,
      alphaTest: 0.5,
    });

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    const numPoints = 10000;
    const radius = 5;
    const arms = 3;
    const spin = 1;
    const randomness = 0.2;

    for (let i = 0; i < numPoints; i++) {
      const distance = Math.random() * radius;
      const angle = (i % arms) * ((Math.PI * 2) / arms) + distance * spin;
      const randomX =
        Math.pow(Math.random(), randomness) *
        (Math.random() < 0.5 ? 1 : -1) *
        radius *
        0.2;
      const randomY =
        Math.pow(Math.random(), randomness) *
        (Math.random() < 0.5 ? 1 : -1) *
        radius *
        0.2;
      const randomZ =
        Math.pow(Math.random(), randomness) *
        (Math.random() < 0.5 ? 1 : -1) *
        radius *
        0.2;

      positions.push(
        Math.cos(angle) * distance + randomX,
        Math.sin(angle) * distance + randomY,
        randomZ,
      );

      colors.push(1, 1, 1);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    vortexRef.current.geometry = geometry;
    vortexRef.current.material = material;
  }, []);

  useFrame(({ clock }) => {
    if (!vortexRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    vortexRef.current.rotation.z = elapsedTime * 0.1;
  });

  return <points ref={vortexRef} />;
};

export default AsciiVortex;
