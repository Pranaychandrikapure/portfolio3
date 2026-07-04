import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Stars, Grid } from '@react-three/drei';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import * as THREE from 'three';

// Custom Hook for Keyboard Controls
function useKeyboard() {
  const [keys, setKeys] = useState({ forward: false, backward: false, left: false, right: false });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.code) {
        case 'KeyW': case 'ArrowUp': setKeys(k => ({ ...k, forward: true })); break;
        case 'KeyS': case 'ArrowDown': setKeys(k => ({ ...k, backward: true })); break;
        case 'KeyA': case 'ArrowLeft': setKeys(k => ({ ...k, left: true })); break;
        case 'KeyD': case 'ArrowRight': setKeys(k => ({ ...k, right: true })); break;
      }
    };
    const handleKeyUp = (e) => {
      switch(e.code) {
        case 'KeyW': case 'ArrowUp': setKeys(k => ({ ...k, forward: false })); break;
        case 'KeyS': case 'ArrowDown': setKeys(k => ({ ...k, backward: false })); break;
        case 'KeyA': case 'ArrowLeft': setKeys(k => ({ ...k, left: false })); break;
        case 'KeyD': case 'ArrowRight': setKeys(k => ({ ...k, right: false })); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keys;
}

// Player Character (Rolling Sphere)
const Player = ({ setPopupData }) => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 2, 0], args: [0.5] }));
  const keys = useKeyboard();
  const position = useRef([0, 0, 0]);
  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    const unsubscribe = api.position.subscribe((p) => (position.current = p));
    const unsubscribeV = api.velocity.subscribe((v) => (velocity.current = v));
    return () => {
      unsubscribe();
      unsubscribeV();
    };
  }, [api]);

  const speed = 4;

  useFrame((state) => {
    // Movement Logic
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3(0, 0, (keys.backward ? 1 : 0) - (keys.forward ? 1 : 0));
    const sideVector = new THREE.Vector3((keys.left ? 1 : 0) - (keys.right ? 1 : 0), 0, 0);
    
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed);
    
    // Apply velocity, keeping the current Y velocity (gravity/bouncing)
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    // Camera follow player smoothly
    const playerPos = new THREE.Vector3(...position.current);
    const cameraOffset = new THREE.Vector3(0, 5, 8); // Offset camera back and up
    const targetCameraPos = playerPos.clone().add(cameraOffset);
    state.camera.position.lerp(targetCameraPos, 0.1);
    state.camera.lookAt(playerPos);

    // Check proximity to zones
    const zones = [
      { id: 'identity', pos: new THREE.Vector3(-6, 0, -6), title: "Identity", content: "I am Pranay Chandrikapure, a Full Stack Developer passionate about scalable web applications." },
      { id: 'experience', pos: new THREE.Vector3(6, 0, -6), title: "Experience", content: "Currently at NCDEX e-Market Ltd, handling core trading functionalities for large-scale eAuction platforms." },
      { id: 'innovations', pos: new THREE.Vector3(0, 0, -10), title: "Innovations", content: "Built the OCR component for Nayaan, a patented AI-enabled smart assistive device for the visually impaired." }
    ];

    let activeZone = null;
    for (let zone of zones) {
      if (playerPos.distanceTo(zone.pos) < 2.5) {
        activeZone = zone;
        break;
      }
    }
    setPopupData(activeZone);
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} wireframe />
    </mesh>
  );
};

// Static Floor
const Floor = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#030305" opacity={0.8} transparent />
    </mesh>
  );
};

// Physics Obstacles (Fun to crash into)
const Box = ({ position }) => {
  const [ref] = useBox(() => ({ mass: 1, position, args: [1, 1, 1] }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

// Info Zone Markers
const ZoneMarker = ({ position, color, label }) => {
  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
        <ringGeometry args={[1.5, 2, 32]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.5} />
      </mesh>
      <Text position={[0, 1.5, 0]} fontSize={0.5} color={color} anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
};

const AboutGame = () => {
  const [popupData, setPopupData] = useState(null);

  // Generate random boxes for obstacles
  const boxes = Array.from({ length: 30 }).map((_, i) => [
    Math.random() * 20 - 10,
    1,
    Math.random() * 20 - 5
  ]);

  return (
    <section className="section-container" id="about-game">
      <h2 className="section-title text-gradient">Cyber Playground</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        Click on the game and use <strong>WASD</strong> or <strong>Arrow Keys</strong> to drive. Crash into boxes and drive into the glowing rings to reveal data!
      </p>

      <div className="game-container glass-panel" style={{ cursor: 'crosshair' }}>
        <Canvas shadows camera={{ position: [0, 5, 8], fov: 50 }}>
          <color attach="background" args={['#050508']} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 15, 10]} intensity={1.5} castShadow />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          <Grid infiniteGrid fadeDistance={40} fadeStrength={5} sectionColor="#00f0ff" cellColor="#ffffff" cellThickness={0.5} position={[0, -0.49, 0]} />

          <Physics gravity={[0, -10, 0]}>
            <Player setPopupData={setPopupData} />
            <Floor />
            
            {/* Render Obstacles */}
            {boxes.map((pos, i) => (
              <Box key={i} position={pos} />
            ))}
          </Physics>

          {/* Zones */}
          <ZoneMarker position={[-6, 0, -6]} color="#00f0ff" label="IDENTITY" />
          <ZoneMarker position={[6, 0, -6]} color="#00ff66" label="EXPERIENCE" />
          <ZoneMarker position={[0, 0, -10]} color="#9d00ff" label="INNOVATIONS" />
        </Canvas>

        {/* HTML UI Overlay */}
        {popupData && (
          <div className="game-tooltip glass-panel" style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '320px',
            padding: '1.5rem',
            border: `1px solid var(--accent-cyan)`,
            boxShadow: `0 0 20px rgba(0, 240, 255, 0.3)`,
            zIndex: 100,
            pointerEvents: 'none',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              {popupData.title}
            </h3>
            <p style={{ color: '#e0e0e0', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {popupData.content}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutGame;
