import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

function InteractiveRoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setRotation({
      x: rotation.x + deltaY * 0.5,
      y: rotation.y + deltaX * 0.5,
    });
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-gradient-to-br from-[#fafaf8] to-[#f0f0ed] dark:from-[#0a0a0a] dark:to-[#1a1a1a] relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {/* Floor */}
        <div
          className="absolute w-[600px] h-[600px] bg-[#f5f5f0] dark:bg-[#2a2a2a]"
          style={{
            transform: 'rotateX(90deg) translateZ(-100px)',
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Back Wall */}
        <div
          className="absolute w-[500px] h-[300px] bg-[#e8e8e0] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10"
          style={{
            transform: 'translateZ(-200px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Wall Art */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-gradient-to-br from-[#d4af37] to-[#b8941f]" />
        </div>

        {/* Sofa */}
        <div
          className="absolute w-[200px] h-[80px] bg-[#3a3a3a] dark:bg-[#4a4a4a]"
          style={{
            transform: 'translateY(20px) translateZ(0px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="absolute w-full h-[60px] bg-[#3a3a3a] dark:bg-[#4a4a4a]"
            style={{
              transform: 'translateZ(-50px) translateY(-40px)',
            }}
          />
        </div>

        {/* Coffee Table */}
        <div
          className="absolute w-[120px] h-[10px] bg-[#8b7355] dark:bg-[#6a5a45]"
          style={{
            transform: 'translateY(50px) translateZ(80px)',
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Lamp */}
        <div
          className="absolute"
          style={{
            transform: 'translateX(-150px) translateY(-20px) translateZ(0px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="w-2 h-[100px] bg-[#2a2a2a] dark:bg-[#4a4a4a]" />
          <div className="w-20 h-16 bg-gradient-to-b from-[#f5f5dc] to-[#e8e8d0] dark:from-[#3a3a3a] dark:to-[#2a2a2a] transform -translate-x-9 -translate-y-2" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute w-12 h-12 border-2 border-[#d4af37]/30"
          style={{ transform: 'translateZ(100px) translateX(-100px)' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-[#d4af37]/20"
          style={{ transform: 'translateZ(150px) translateX(120px)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-black/60 dark:text-white/60 text-center">
        Drag to rotate the room
      </div>
    </div>
  );
}

export function Interactive3D() {
  return (
    <div className="py-32 px-6 bg-[#fafaf8] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm tracking-widest text-black/40 dark:text-white/40 mb-4">INTERACTIVE EXPERIENCE</div>
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Explore in 3D</h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto mb-2">
            Drag to rotate and explore this minimalist interior space
          </p>
        </motion.div>

        <motion.div
          className="w-full h-[600px] bg-white dark:bg-black shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveRoom />
        </motion.div>
      </div>
    </div>
  );
}
