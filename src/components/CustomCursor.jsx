
import React, { useEffect } from 'react';

const CustomCursor = () => {
 useEffect(() => {
const cursorDot = document.querySelector(".cursor-dot");
 
 const moveCursor = (e) => {
if (cursorDot) {
 cursorDot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
}
 };

 window.addEventListener("mousemove", moveCursor);

// تفعيل تأثير الـ Hover على العناصر التفاعلية
 const handleMouseEnter = () => cursorDot.classList.add('cursor-active');
 const handleMouseLeave = () => cursorDot.classList.remove('cursor-active');

 const interactives = document.querySelectorAll('a, button, .dv, video, model-viewer');
 interactives.forEach(el => {
 el.addEventListener('mouseenter', handleMouseEnter);
 el.addEventListener('mouseleave', handleMouseLeave);
 });

 return () => {
 window.removeEventListener("mousemove", moveCursor);
 };
 }, []);

 return <div className="cursor-dot"></div>;
};

export default CustomCursor;