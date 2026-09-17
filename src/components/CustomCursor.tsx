import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'explore' | 'rotate'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target element for cursor hints
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setCursorType('view');
      } else if (cursorAttr === 'explore') {
        setCursorType('explore');
      } else if (cursorAttr === 'rotate') {
        setCursorType('rotate');
      } else if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp tracking for trailing ring
  useEffect(() => {
    if (isTouchDevice) return;
    let animId: number;

    const loop = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.22,
        y: prev.y + (targetPos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [targetPos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType !== 'default' && cursorType !== 'hover';

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${targetPos.x}px, ${targetPos.y}px, 0) translate(-50%, -50%)`,
          opacity: isExpanded ? 0 : 1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#e6c875]" />
      </div>

      {/* Trailing Ring / Action Halo */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
          cursorType === 'hover'
            ? 'w-10 h-10 border border-[#e6c875]/70 bg-[#e6c875]/10 backdrop-blur-[2px] rounded-full'
            : isExpanded
            ? 'w-20 h-20 bg-[#0d0d11]/90 border border-[#e6c875]/50 backdrop-blur-md rounded-full shadow-2xl scale-100'
            : 'w-6 h-6 border border-white/30 rounded-full'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isExpanded && (
          <span className="text-[10px] font-mono tracking-widest text-[#e6c875] uppercase select-none font-semibold">
            {cursorType}
          </span>
        )}
      </div>
    </>
  );
};
