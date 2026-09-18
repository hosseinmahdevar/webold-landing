"use client";

import * as React from "react";
import * as THREE from "three";

export function ThreeHeroBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 45;
    camera.position.y = 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Interactive 3D Wave Particle Grid
    const countX = 45;
    const countY = 30;
    const numParticles = countX * countY;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const initialY = new Float32Array(numParticles);

    // Indigo (#6366F1), Cyan (#0EA5E9), Violet (#818CF8)
    const colorIndigo = new THREE.Color("#6366F1");
    const colorCyan = new THREE.Color("#0EA5E9");
    const colorViolet = new THREE.Color("#818CF8");

    let i = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        const u = ix / (countX - 1);
        const v = iy / (countY - 1);

        const x = (ix - countX / 2) * 2.2;
        const z = (iy - countY / 2) * 2.2;
        const y = Math.sin(u * Math.PI * 2) * Math.cos(v * Math.PI * 2) * 2;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        initialY[i] = y;

        // Gradient from Indigo to Cyan to Violet
        const mixedColor = colorIndigo.clone().lerp(colorCyan, u).lerp(colorViolet, v * 0.5);
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;

        i++;
      }
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(129,140,248,0.9)");
      gradient.addColorStop(0.7, "rgba(99,102,241,0.4)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    particleSystem.rotation.x = 0.45;
    scene.add(particleSystem);

    // 2. Central Floating Holographic Geometric Core (Icosahedron Wireframe)
    const coreGeometry = new THREE.IcosahedronGeometry(7, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.LineSegments(coreWireframe, coreLineMaterial);
    coreMesh.position.set(22, 6, -10);
    scene.add(coreMesh);

    // Inner glowing ring
    const ringGeometry = new THREE.TorusGeometry(8.5, 0.06, 16, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.set(22, 6, -10);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Mouse Tracking with Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.015;
      mouseY = (e.clientY - windowHalfY) * 0.015;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speed = prefersReducedMotion ? 0.08 : 0.6;

      // Update particle wave heights
      const posArray = particlesGeometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let ix = 0; ix < countX; ix++) {
        for (let iy = 0; iy < countY; iy++) {
          const u = ix / countX;
          const v = iy / countY;
          const wave1 = Math.sin(elapsedTime * speed + u * 5 + v * 3) * 1.6;
          const wave2 = Math.cos(elapsedTime * speed * 0.7 + v * 4) * 1.2;

          posArray[idx * 3 + 1] = initialY[idx] + wave1 + wave2;
          idx++;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Mouse Parallax interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 1.5;
      camera.position.y = 12 - targetY * 1.5;
      camera.lookAt(0, 0, 0);

      // Rotate Geometric Core
      if (!prefersReducedMotion) {
        coreMesh.rotation.x = elapsedTime * 0.15;
        coreMesh.rotation.y = elapsedTime * 0.2;
        ringMesh.rotation.z = elapsedTime * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();

      coreGeometry.dispose();
      coreWireframe.dispose();
      coreLineMaterial.dispose();

      ringGeometry.dispose();
      ringMaterial.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-70 dark:opacity-85"
      aria-hidden="true"
    />
  );
}
