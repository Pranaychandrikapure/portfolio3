import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

const PantherScene = () => {
  const imageRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    // Calculate scroll progress (0 at top, 1 at bottom)
    const scrollY = window.scrollY;
    // We assume a roughly 3000px high document for the scale, but we can compute dynamically
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;
    const time = state.clock.elapsedTime;

    if (imageRef.current) {
      // 1. Breathing Effect (Base animation)
      const breathe = Math.sin(time * 1.5) * 0.015;

      // 2. Compute Target Physics
      // As we scroll down, the panther moves UP and scales UP (like it's leaping forward)
      const targetX = mouseX * 0.5;
      const targetY = mouseY * 0.5 + (scrollProgress * 3.5);

      // Intense Utsubo-style tilt based on scroll
      const targetRotX = (scrollProgress * 0.6) - (mouseY * 0.05);
      const targetRotY = mouseX * 0.1;

      // Zoom in aggressively as we scroll down
      const targetScale = 1.1 + breathe + (scrollProgress * 0.8);

      // 3. Apply Smooth Lerping (Easing)
      imageRef.current.position.x = THREE.MathUtils.lerp(imageRef.current.position.x, targetX, 0.05);
      imageRef.current.position.y = THREE.MathUtils.lerp(imageRef.current.position.y, targetY, 0.05);

      imageRef.current.rotation.x = THREE.MathUtils.lerp(imageRef.current.rotation.x, targetRotX, 0.05);
      imageRef.current.rotation.y = THREE.MathUtils.lerp(imageRef.current.rotation.y, targetRotY, 0.05);
      imageRef.current.rotation.z = Math.sin(time * 0.5) * 0.01; // subtle sway

      imageRef.current.scale.setScalar(targetScale);

      // 4. Color Shift (Dimming slightly as we scroll deep into the page)
      if (imageRef.current.material) {
        // HSL: Hue, Saturation, Lightness
        // Base lightness is 1. We drop to 0.5 at the bottom of the page.
        imageRef.current.material.color.setHSL(0, 0, 1 - (scrollProgress * 0.5));
      }
    }
  });

  return (
    <Image
      ref={imageRef}
      url="/black_panther_bg.png"
      transparent
      position={[0, 0, 0]}
      scale={[viewport.width * 1.5, viewport.height * 1.5, 1]} // Scale 1.5x for bleed room when rotating
    // Drei's Image handles "cover" aspect ratio automatically!
    />
  );
};

const CosmicDust = () => {
  const count = 1500;
  const mesh = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;     // x range: -12.5 to 12.5
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y range: -12.5 to 12.5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1; // z range: -6 to 4
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Very slow natural rotation of the cosmic dust field
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.005;

      // Parallax scroll on the dust (moves faster than the panther for depth)
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      mesh.current.position.y = scrollProgress * 8;
    }
  });

  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8a2be2" // Wakandan/Vibranium Purple
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
};

const Background = () => {
  return (
    <div className="panther-bg-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: '#020202' // Deep dark space background
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>

        </Suspense>
        <CosmicDust />
      </Canvas>
      {/* 2D Overlay to ensure text legibility at the bottom */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
        pointerEvents: 'none'
      }}></div>

      {/* Shooting Stars Overlay */}
      <div className="shooting-stars-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
    </div>
  );
};

export default Background;
