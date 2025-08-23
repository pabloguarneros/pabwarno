// Physics-based image layout and animation for pabwarno
// This file provides a hook and utility for random, wind, and edge-clustering effects
import { useEffect, useRef, useState } from "react";

export type Vec2 = { x: number; y: number };

export function usePhysicsImages(count: number) {
  // Each image has a position, velocity, and target
  const [positions, setPositions] = useState<Vec2[]>([]);
  const [velocities, setVelocities] = useState<Vec2[]>([]);
  const [targets, setTargets] = useState<Vec2[]>([]);
  const [mode, setMode] = useState<"random"|"wind"|"edge-cluster">("random");
  const windRef = useRef<{center: Vec2, strength: number}|null>(null);

  // Helper: random position within window
  const randomPos = () => ({
    x: Math.random() * (window.innerWidth - 200) + 100,
    y: Math.random() * (window.innerHeight - 200) + 100,
  });

  // Helper: edge-cluster positions
  const edgeClusterPos = (i: number) => {
    // Distribute images around the edges
    const edge = i % 4;
    const pad = 40;
    switch(edge) {
      case 0: return { x: pad + Math.random() * (window.innerWidth-2*pad), y: pad };
      case 1: return { x: window.innerWidth-pad, y: pad + Math.random() * (window.innerHeight-2*pad) };
      case 2: return { x: pad + Math.random() * (window.innerWidth-2*pad), y: window.innerHeight-pad };
      case 3: return { x: pad, y: pad + Math.random() * (window.innerHeight-2*pad) };
    }
    return randomPos();
  };

  // Initialize positions
  useEffect(() => {
    setPositions(Array(count).fill(0).map(randomPos));
    setVelocities(Array(count).fill(0).map(() => ({x:0, y:0})));
    setTargets(Array(count).fill(0).map(randomPos));
  }, [count]);

  // Animate positions
  useEffect(() => {
    let running = true;
    function step() {
      setPositions((prev) => prev.map((pos, i) => {
        let target = targets[i] ?? pos;
        let v = velocities[i] || {x:0, y:0};
        // Spring physics
        let dx = target.x - pos.x;
        let dy = target.y - pos.y;
        let dist = Math.sqrt(dx*dx+dy*dy);
        let spring = 0.08, damp = 0.7;
        let ax = spring*dx;
        let ay = spring*dy;
        // Wind effect
        if (mode==="wind" && windRef.current) {
          let {center, strength} = windRef.current;
          let wx = pos.x-center.x, wy = pos.y-center.y;
          let windMag = Math.max(0, 1 - Math.sqrt(wx*wx+wy*wy)/300);
          ax += (Math.random()-0.5)*strength*windMag*8;
          ay += (Math.random()-0.5)*strength*windMag*8;
        }
        v.x = (v.x + ax)*damp;
        v.y = (v.y + ay)*damp;
        // Clamp to window
        let nx = Math.max(0, Math.min(window.innerWidth-160, pos.x+v.x));
        let ny = Math.max(0, Math.min(window.innerHeight-160, pos.y+v.y));
        velocities[i] = v;
        return {x: nx, y: ny};
      }));
      if (running) requestAnimationFrame(step);
    }
    step();
    return () => { running = false; };
  }, [targets, mode]);

  // Wind trigger: call when an image is grabbed
  const triggerWind = (center: Vec2, strength=1) => {
    setMode("wind");
    windRef.current = {center, strength};
    setTargets(positions.map((p,i) => {
      // Nearby images get a new random target
      let d = Math.sqrt((p.x-center.x)**2 + (p.y-center.y)**2);
      if (d < 300) return randomPos();
      return p;
    }));
    setTimeout(() => setMode("random"), 800);
  };

  // On resize: cluster to edges
  useEffect(() => {
    const onResize = () => {
      setMode("edge-cluster");
      setTargets(Array(count).fill(0).map((_,i) => edgeClusterPos(i)));
      setTimeout(() => setMode("random"), 1200);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [count]);

  // Expose API
  return { positions, triggerWind };
}
