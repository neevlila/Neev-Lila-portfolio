import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 1000 }) => {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = -50 + Math.random() * 100;
      const y = -50 + Math.random() * 100;
      const z = -50 + Math.random() * 100;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame(() => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);
      const index = i * 3;

      positions[index] = x + Math.cos(t) * factor;
      positions[index + 1] = y + Math.sin(t) * factor;
      positions[index + 2] = z + Math.sin(t) * factor;
    });
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <pointLight distance={40} intensity={8} color="lightblue" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#00aaff"
          sizeAttenuation
          transparent={false}
          alphaTest={0.5}
          opacity={1.0}
        />
      </points>
    </>
  );
};

const Background3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    >
      <Particles />
    </Canvas>
  );
};

export default Background3D;
