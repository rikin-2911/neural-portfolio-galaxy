
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  connections: number[];
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const frameIdRef = useRef<number>(0);
  const isInitializedRef = useRef<boolean>(false);

  const generateNodes = (numNodes: number, width: number, height: number): Node[] => {
    const nodes: Node[] = [];
    
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
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
    
    // Update node positions and draw connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      // Draw connections
      for (const connectionIndex of node.connections) {
        const connectedNode = nodes[connectionIndex];
        
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        ctx.strokeStyle = 'rgba(100, 229, 255, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      
      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100, 229, 255, 0.7)';
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(100, 229, 255, 0.5)';
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
    nodesRef.current = generateNodes(50, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;
    
    isInitializedRef.current = true;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Generate initial nodes
    nodesRef.current = generateNodes(50, canvas.width, canvas.height);
    
    // Start animation
    frameIdRef.current = requestAnimationFrame(animate);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default NeuralBackground;
