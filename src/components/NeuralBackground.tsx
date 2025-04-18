
import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  connections: number[];
  hovered: boolean;
  pulseRate: number;
  pulseOffset: number;
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
        hovered: false,
        pulseRate: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
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

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number, timestamp: number) => {
    ctx.clearRect(0, 0, width, height);
    
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    
    // Update node positions and draw connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      // Draw connections
      for (const connectionIndex of node.connections) {
        const connectedNode = nodes[connectionIndex];
        
        // Calculate distance for connection opacity
        const dx = node.x - connectedNode.x;
        const dy = node.y - connectedNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxConnectionDistance = 250;
        
        if (distance < maxConnectionDistance) {
          // Enhanced connection effects for hovered nodes
          const isEitherNodeHovered = node.hovered || connectedNode.hovered;
          
          // Calculate pulse effect for connections
          const pulse = Math.sin(timestamp * 0.001 + node.pulseOffset) * 0.2 + 0.8;
          
          const opacity = isEitherNodeHovered 
            ? 0.5
            : Math.max(0, (1 - distance / maxConnectionDistance) * 0.3) * pulse;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = isEitherNodeHovered 
            ? `rgba(139, 92, 246, ${opacity})` // Brighter purple for hovered node connections
            : `rgba(100, 229, 255, ${opacity})`;
          ctx.lineWidth = isEitherNodeHovered ? 1.5 : 0.8;
          ctx.stroke();
        }
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
          const force = (1 - distance / maxDistance) * 1.2; // Increased force for more responsive movement
          node.vx += dx * force / 60;
          node.vy += dy * force / 60;
          
          // Draw connection to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.5 * (1 - distance / maxDistance)})`; // Using purple for mouse connections
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      } else {
        node.hovered = false;
      }
      
      // Apply pulse effect on radius
      const pulseEffect = Math.sin(timestamp * node.pulseRate + node.pulseOffset) * 0.3 + 1;
      const currentRadius = node.radius * pulseEffect;
      
      // Apply velocity with damping
      node.vx *= 0.98;
      node.vy *= 0.98;
      
      // Add slight random movement
      node.vx += (Math.random() - 0.5) * 0.02;
      node.vy += (Math.random() - 0.5) * 0.02;
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges with padding
      const padding = 50;
      if (node.x < padding) {
        node.x = padding;
        node.vx *= -1;
      } else if (node.x > width - padding) {
        node.x = width - padding;
        node.vx *= -1;
      }
      
      if (node.y < padding) {
        node.y = padding;
        node.vy *= -1;
      } else if (node.y > height - padding) {
        node.y = height - padding;
        node.vy *= -1;
      }
      
      // Draw node with enhanced effects
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.hovered ? currentRadius * 2 : currentRadius, 0, Math.PI * 2);
      
      // Use different colors and effects based on hover state
      if (node.hovered) {
        ctx.fillStyle = 'rgba(139, 92, 246, 0.9)'; // Brighter purple for hovered nodes
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
      } else {
        const nodeOpacity = 0.5 + Math.sin(timestamp * 0.001 + node.pulseOffset) * 0.2; // Pulsing opacity
        ctx.fillStyle = `rgba(100, 229, 255, ${nodeOpacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(100, 229, 255, 0.5)';
      }
      
      ctx.fill();
      
      // Reset shadow effects to prevent affecting other elements
      ctx.shadowBlur = 0;
    }
  };

  const animate = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    draw(ctx, canvas.width, canvas.height, timestamp);
    frameIdRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Regenerate nodes when canvas size changes
    nodesRef.current = generateNodes(80, canvas.width, canvas.height); // Increased node count for more connections
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
    nodesRef.current = generateNodes(80, canvas.width, canvas.height); // Increased node count
    
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
