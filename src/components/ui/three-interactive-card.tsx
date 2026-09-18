"use client";

import * as React from "react";
import * as THREE from "three";

export function ThreeInteractiveCard() {
  const mountRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 3D Glassy Tech Prism Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Outer Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(4.2, 0.9, 100, 16, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x1e1b4b,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    group.add(knotMesh);

    // 2. Inner Glowing Core
    const innerGeometry = new THREE.IcosahedronGeometry(2.4, 2);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // 3. Orbital Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      const radius = 6.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[p * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[p * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[p * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const orbitalParticles = new THREE.Points(particleGeo, particleMat);
    group.add(orbitalParticles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 2.5, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0ea5e9, 2.5, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Interaction on drag / move
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.008;
      group.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    mount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!isDragging && !prefersReducedMotion) {
        group.rotation.y += delta * 0.35;
        group.rotation.x += delta * 0.2;
        orbitalParticles.rotation.y -= delta * 0.25;
        innerMesh.rotation.z += delta * 0.4;
      }

      // Gentle floating amplitude
      group.position.y = Math.sin(elapsed * 1.2) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      knotGeometry.dispose();
      knotMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full absolute inset-0" />
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-indigo-300/60 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20 pointer-events-none backdrop-blur-sm">
        3D Interactive • برای چرخش بکشید
      </div>
    </div>
  );
}
