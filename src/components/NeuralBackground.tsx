
import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  connections: number[];
  hovered: boolean;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const frameIdRef = useRef<number>(0);
  const isInitializedRef = useRef<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  const generateNodes = (numNodes: number, width: number, height: number): Node[] => {
    const nodes: Node[] = [];
    
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        hovered: false
      });
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      const distances: {index: number, distance: number}[] = [];
      
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          distances.push({
            index: j,
            distance: Math.sqrt(dx * dx + dy * dy)
          });
        }
      }
      
      // Sort by distance and pick closest nodes for connections
      distances.sort((a, b) => a.distance - b.distance);
      
      for (let k = 0; k < Math.min(connectionsCount, distances.length); k++) {
        nodes[i].connections.push(distances[k].index);
      }
    }
    
    return nodes;
  };

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    
    // Update node positions and draw connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      // Draw connections
      for (const connectionIndex of node.connections) {
        const connectedNode = nodes[connectionIndex];
        
        // Enhanced connection effects for hovered nodes
        const isEitherNodeHovered = node.hovered || connectedNode.hovered;
        
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        ctx.strokeStyle = isEitherNodeHovered 
          ? 'rgba(139, 92, 246, 0.5)' // Brighter purple for hovered node connections
          : 'rgba(100, 229, 255, 0.1)';
        ctx.lineWidth = isEitherNodeHovered ? 1.5 : 0.5;
        ctx.stroke();
      }
      
      // Interact with mouse
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        // Check if node is being hovered
        node.hovered = distance < 30;
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.8; // Increased force for more responsive movement
          node.vx += dx * force / 80;
          node.vy += dy * force / 80;
          
          // Draw connection to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / maxDistance)})`; // Using purple for mouse connections
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else {
        node.hovered = false;
      }
      
      // Apply velocity with damping
      node.vx *= 0.98;
      node.vy *= 0.98;
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      
      // Draw node with enhanced effects
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.hovered ? node.radius * 2 : node.radius, 0, Math.PI * 2);
      
      // Use different colors and effects based on hover state
      if (node.hovered) {
        ctx.fillStyle = 'rgba(139, 92, 246, 0.9)'; // Brighter purple for hovered nodes
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
      } else {
        ctx.fillStyle = 'rgba(100, 229, 255, 0.7)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(100, 229, 255, 0.5)';
      }
      
      ctx.fill();
      
      // Reset shadow effects to prevent affecting other elements
      ctx.shadowBlur = 0;
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    draw(ctx, canvas.width, canvas.height);
    frameIdRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Regenerate nodes when canvas size changes
    nodesRef.current = generateNodes(60, canvas.width, canvas.height); // Increased node count
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
    
    // Reset hover state on all nodes
    nodesRef.current.forEach(node => {
      node.hovered = false;
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
      active: true
    };
    
    // Prevent scrolling while interacting with canvas
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    mouseRef.current.active = false;
    
    // Reset hover state on all nodes
    nodesRef.current.forEach(node => {
      node.hovered = false;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;
    
    isInitializedRef.current = true;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Generate initial nodes
    nodesRef.current = generateNodes(60, canvas.width, canvas.height); // Increased node count
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Start animation
    frameIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 cursor-pointer interactive-neural"
      title="Interactive Neural Network - Move your cursor to interact with nodes"
    />
  );
};

export default NeuralBackground;
