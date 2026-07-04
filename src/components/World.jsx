import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text, SoftShadows, Html } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import * as THREE from 'three';

// Import local images for the displays
import cricketAuctionImg from '../assets/images/cricket-auction.png';
import nestImg from '../assets/images/Nest Django backend.png';
import nayaanImg from '../assets/images/nayaan.png';
import nemlImg from '../assets/images/NeML.png';

const THEME_COLOR = "#F4795B";

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

import { useRaycastVehicle } from '@react-three/cannon';

// Toy Jeep Player (Raycast Vehicle Physics)
const Player = ({ setPopupData, zones }) => {
  const chassisRef = useRef();
  const [chassis, chassisApi] = useBox(() => ({ mass: 150, position: [0, 5, 0], args: [1, 0.5, 2] }), chassisRef);
  const keys = useKeyboard();
  
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();

  const radius = 0.3;
  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 100000,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 2.3,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 2
  };

  const wheelInfos = [
    { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-0.6, 0, 0.7] },
    { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [0.6, 0, 0.7] },
    { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [-0.6, 0, -0.7] },
    { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [0.6, 0, -0.7] },
  ];

  const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos,
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1,
  }));

  const position = useRef([0, 0, 0]);
  useEffect(() => {
    const unsubscribe = chassisApi.position.subscribe((p) => (position.current = p));
    return unsubscribe;
  }, [chassisApi]);

  const engineForce = 1500;
  const maxSteerVal = 0.5;

  useFrame((state) => {
    const playerPos = new THREE.Vector3(...position.current);

    // Vehicle Controls
    let force = 0;
    if (keys.forward) force = engineForce;
    if (keys.backward) force = -engineForce;

    // Apply engine force to rear wheels
    vehicleApi.applyEngineForce(force, 2);
    vehicleApi.applyEngineForce(force, 3);

    let steer = 0;
    if (keys.left) steer = maxSteerVal;
    if (keys.right) steer = -maxSteerVal;

    // Apply steering to front wheels
    vehicleApi.setSteeringValue(steer, 0);
    vehicleApi.setSteeringValue(steer, 1);

    // Brakes
    if (!keys.forward && !keys.backward) {
      vehicleApi.setBrake(50, 2);
      vehicleApi.setBrake(50, 3);
    } else {
      vehicleApi.setBrake(0, 2);
      vehicleApi.setBrake(0, 3);
    }

    // Camera follow smoothly
    const cameraOffset = new THREE.Vector3(-15, 20, 15);
    const targetCameraPos = playerPos.clone().add(cameraOffset);
    state.camera.position.lerp(targetCameraPos, 0.1);
    state.camera.lookAt(playerPos);

    let activeZone = null;
    for (let zone of zones) {
      if (playerPos.distanceTo(zone.pos) < zone.radius) {
        activeZone = zone;
        break;
      }
    }
    setPopupData(activeZone);
  });

  return (
    <group ref={vehicle}>
      {/* Chassis */}
      <group ref={chassis}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1, 0.5, 2]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.5, -0.2]}>
          <boxGeometry args={[0.9, 0.5, 1]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.51, 0.31]}>
          <boxGeometry args={[0.8, 0.4, 0.05]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>

      {/* Wheels */}
      {[wheel1, wheel2, wheel3, wheel4].map((ref, index) => (
        <group ref={ref} key={index}>
          <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[radius, radius, 0.2, 32]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Floor and Walls
const Bounds = () => {
  const [floorRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0] }));
  usePlane(() => ({ position: [0, 0, -80] }));
  usePlane(() => ({ rotation: [0, Math.PI, 0], position: [0, 0, 80] }));
  usePlane(() => ({ rotation: [0, -Math.PI / 2, 0], position: [80, 0, 0] }));
  usePlane(() => ({ rotation: [0, Math.PI / 2, 0], position: [-80, 0, 0] }));

  return (
    <mesh ref={floorRef} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color={THEME_COLOR} roughness={0.5} />
    </mesh>
  );
};

// Interactive Box Obstacles
const Box = ({ position }) => {
  const [ref] = useBox(() => ({ mass: 1, position, args: [0.6, 0.6, 0.6] }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
    </mesh>
  );
};

// 3D Display Monitor (Picture Frame)
const DisplayMonitor = ({ position, rotation, textureUrl }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  return (
    <group position={position} rotation={rotation}>
      {/* Legs */}
      <mesh position={[-3, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[3, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Screen Frame (tilted back 15 degrees) */}
      <group position={[0, 4.5, 0]} rotation={[-Math.PI / 12, 0, 0]}>
        {/* Bezel */}
        <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
          <boxGeometry args={[10, 6, 0.4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
        {/* Screen Content */}
        <mesh castShadow receiveShadow position={[0, 0, 0.11]}>
          <planeGeometry args={[9.4, 5.4]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
};

// Styled Floor Information Block (Anton Bold Italic Style)
const FloorInfo = ({ position, title, subtitle, description, showOpenBtn = false }) => {
  return (
    <group position={position}>
      <Text position={[0, -0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} fontSize={2.5} color="#ffffff" anchorX="left" letterSpacing={0.02}>
        {title.toUpperCase()}
      </Text>
      <Text position={[0, -0.48, 1.8]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1} color="#ffe5d9" anchorX="left" letterSpacing={0.05}>
        {subtitle.toUpperCase()}
      </Text>
      <Text position={[0, -0.48, 4.5]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.7} color="#ffffff" anchorX="left" maxWidth={16} textAlign="left">
        {description.toUpperCase()}
      </Text>
      {showOpenBtn && (
        <group position={[0, -0.47, 8]} rotation={[-Math.PI / 2, 0, 0]}>
          <Text fontSize={1.2} color="#ffffff" anchorX="left">
            OPEN ↗
          </Text>
        </group>
      )}
    </group>
  );
};

const World = () => {
  const [popupData, setPopupData] = useState(null);

  // Link Zones spaced out perfectly
  const zones = [
    { pos: new THREE.Vector3(0, 0, -30), radius: 8, title: "Nest Ecommerce", link: "https://github.com/Pranaychandrikapure/Django-Ecommerce", color: "#F4795B" },
    { pos: new THREE.Vector3(30, 0, -30), radius: 8, title: "DocWise", link: "https://github.com/Pranaychandrikapure/DocWise-Application", color: "#F4795B" },
    { pos: new THREE.Vector3(-30, 0, -30), radius: 8, title: "Cricket Auction", link: "https://www.neml.in/", color: "#F4795B" },
    { pos: new THREE.Vector3(-15, 0, 35), radius: 6, title: "GitHub", link: "https://github.com/Pranaychandrikapure", color: "#F4795B" },
    { pos: new THREE.Vector3(15, 0, 35), radius: 6, title: "Email", link: "mailto:pranaychandrikapure@gmail.com", color: "#F4795B" },
  ];

  const boxes = Array.from({ length: 40 }).map((_, i) => [
    Math.random() * 80 - 40,
    1,
    Math.random() * 80 - 40
  ]);

  return (
    <>
      <Canvas shadows camera={{ position: [-15, 20, 15], fov: 40 }}>
        <SoftShadows size={20} samples={16} focus={0.5} />
        <color attach="background" args={[THEME_COLOR]} />
        
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight 
          position={[30, 50, 20]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize={[2048, 2048]} 
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />

        <Physics gravity={[0, -30, 0]}>
          <Player setPopupData={setPopupData} zones={zones} />
          <Bounds />
          {boxes.map((pos, i) => (
            <Box key={i} position={pos} />
          ))}
        </Physics>

        <Suspense fallback={<Html center><div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Loading Displays...</div></Html>}>
          {/* Projects Display Monitors */}
          <DisplayMonitor position={[-25, 0, -42]} textureUrl={cricketAuctionImg} />
          <DisplayMonitor position={[5, 0, -42]} textureUrl={nestImg} />
          <DisplayMonitor position={[35, 0, -42]} textureUrl={nestImg} />
          
          {/* Experience Display Monitors */}
          <DisplayMonitor position={[40, 0, -8]} rotation={[0, -Math.PI / 4, 0]} textureUrl={nemlImg} />
          <DisplayMonitor position={[45, 0, 20]} rotation={[0, -Math.PI / 4, 0]} textureUrl={nayaanImg} />
        </Suspense>

          {/* Portfolio Text aligned underneath the monitors */}
          <FloorInfo 
            position={[-3, 0, -5]} 
            title="Pranay Chandrikapure" 
            subtitle="FULL STACK DEVELOPER" 
            description="Welcome to my Interactive Portfolio! Run around to explore." 
          />
          
          {/* Experience */}
          <FloorInfo 
            position={[30, 0, -2]} 
            title="NCDEX e-Market" 
            subtitle="SOFTWARE ENGINEER INTERN" 
            description="Working on scalable eAuction platforms for commodity trading." 
          />
          <FloorInfo 
            position={[35, 0, 25]} 
            title="Team Nayaan" 
            subtitle="AI / OCR DEVELOPER" 
            description="Built OCR component for patented AI smart assistive device." 
          />

          {/* Projects */}
          <FloorInfo 
            position={[-32, 0, -30]} 
            title="Cricket Auction" 
            subtitle="NEXT.JS & SPRING BOOT" 
            description="Web-based auction platform for live bidding." 
            showOpenBtn={true}
          />
          <FloorInfo 
            position={[-2, 0, -30]} 
            title="Nest Ecommerce" 
            subtitle="DJANGO BACKEND" 
            description="Backend ecommerce with secure auth." 
            showOpenBtn={true}
          />
          <FloorInfo 
            position={[28, 0, -30]} 
            title="DocWise" 
            subtitle="FLUTTER & FIREBASE" 
            description="Mobile app for discovering schemes." 
            showOpenBtn={true}
          />

          {/* Contact Links */}
          <FloorInfo position={[-15, 0, 35]} title="GitHub" subtitle="OPEN SOURCE" description="View Repositories" showOpenBtn={true} />
          <FloorInfo position={[15, 0, 35]} title="Email" subtitle="LET'S TALK" description="Contact me!" showOpenBtn={true} />
      </Canvas>

      {/* UI Overlay */}
      <div className="game-ui-overlay">
        <div className="instruction-banner">
          Use <strong>WASD</strong> or <strong>Arrows</strong> to drive the Jeep!
        </div>

        {popupData && popupData.link && (
          <div className="game-tooltip" style={{ borderColor: popupData.color, background: '#ffffff', color: '#333', bottom: '60px', padding: '1rem', width: '250px' }}>
            <h4 style={{ color: popupData.color, marginBottom: '0.8rem', fontSize: '1rem', textTransform: 'uppercase' }}>{popupData.title}</h4>
            <a href={popupData.link} target="_blank" rel="noreferrer" style={{ display: 'block', background: popupData.color, color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
              OPEN LINK
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default World;
