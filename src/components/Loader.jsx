import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // المنطق اللي انت كنت كاتبه في الـ JS القديم
    const timer = setTimeout(() => {
      setHidden(true); // لبدء تأثير الاختفاء (Opacity)
      
      // حذف العنصر تماماً من الـ DOM بعد انتهاء الأنميشن (500ms)
      setTimeout(() => setShouldRender(false), 500);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    // استخدمت الـ id والـ structure اللي انت بعته بالظبط
    <div 
      id="loader" 
      style={{ 
        opacity: hidden ? 0 : 1, 
        transition: 'opacity 0.5s ease',
        pointerEvents: hidden ? 'none' : 'all' // عشان ميعطلش الكليكات بعد ما يختفي
      }}
    >
      <a href="#">
        <img src="/imgs/stroke Icon.gif" alt="Loading..." />
      </a>
    </div>
  );
};

export default Loader;