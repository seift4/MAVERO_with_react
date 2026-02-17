import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  // 1. تعريف حالة الثيم بناءً على localStorage
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  // 2. مصفوفة الصور التي تتغير بناءً على الثيم
  const themeImages = {
    aboutImg: isDark ? "/imgs/About V2-02.svg" : "/imgs/About V2-01.svg",
  };

  useEffect(() => {
    // 3. مراقب (MutationObserver) لمراقبة تغيير الـ Class في الـ Body
    // ده بيضمن إن الصورة تتغير فوراً أول ما تدوس على الزرار في الـ Navbar
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-mode'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // --- تأثير ظهور العناصر عند السكرول (Reveal) ---
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // --- تأثير الـ 3D Card ---
    const apply3DEffect = (selector, intensity) => {
      const cards = document.querySelectorAll(selector);
      cards.forEach(card => {
        card.onmousemove = (e) => {
          const { width, height, left, top } = card.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const rotateX = (-(e.clientY - centerY) / (height / 2)) * intensity;
          const rotateY = ((e.clientX - centerX) / (width / 2)) * intensity;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        card.onmouseleave = () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        };
      });
    };
    apply3DEffect('.pr', 15);
    apply3DEffect('.prr', 18);

    // --- الـ Marquee Logic ---
    const marqueeTrack = marqueeRef.current;
    let animationFrameId;
    if (marqueeTrack) {
      const content = marqueeTrack.innerHTML;
      marqueeTrack.innerHTML += content; 
      let scrollX = 0;
      const animate = () => {
        scrollX -= 0.5;
        if (Math.abs(scrollX) >= marqueeTrack.scrollWidth / 2) scrollX = 0;
        marqueeTrack.style.transform = `translateX(${scrollX}px)`;
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }

    // --- فيديو الترحيب ---
    const welcomeVideo = document.getElementById('welcome-video');
    if (welcomeVideo) {
      welcomeVideo.loop = false;
      welcomeVideo.onended = () => {
        welcomeVideo.style.transition = "opacity 1s ease";
        welcomeVideo.style.opacity = "0";
        setTimeout(() => welcomeVideo.remove(), 1000);
      };
    }
    
    // Cleanup عند مغادرة الصفحة
    return () => {
      observer.disconnect(); // فصل مراقب الثيم
      window.removeEventListener("scroll", revealOnScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [navigate]);

  return (
    <main>
      {/* Hero Video */}
      <section className="home" id="Home">
        <video autoPlay muted playsInline className="back-video" id="welcome-video">
          <source src="/imgs/Mavero Home Vid 3 ss.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Selected Works Section */}
      <section className="work" id="work">
        <p className="p1 reveal">Selected Works</p>
        <div className="imgs reveal">
          <div className="marquee-track" ref={marqueeRef}>
            <div className="img">
              <img src="/imgs/pics for web-01.png" draggable="false" alt="ALBA" />
              <div><p>ALBA</p><p>2024</p></div>
            </div>
            <div className="img">
              <img src="/imgs/Square pics-01.png" draggable="false" alt="Eventers" />
              <div><p>Eventers</p><p>2024</p></div>
            </div>
            <div className="img">
              <img src="/imgs/pics for web-02.png" draggable="false" alt="ALBA" />
              <div><p>ALBA</p><p>2024</p></div>
            </div>
            <div className="img">
              <img src="/imgs/menera-01.jpg.png" draggable="false" alt="Menera" />
              <div><p>Menera</p><p>2025</p></div>
            </div>
          </div>
        </div>
        <div className="view reveal" onClick={() => navigate('/work')} style={{cursor: 'pointer'}}>
          <p>View All</p>
          <span className="material-symbols-outlined">arrow_outward</span>
        </div>
      </section>

{/* About Section - New Strategic Content */}
<section className="ved" id="about">
  <div className="about">
    <h1 className="a_ reveal">
      <span className="first-word">WHO</span> WE ARE?
    </h1>
    <div className="a_title">
      <div className="head reveal">
        <h1>Strategic Creative Agency</h1>
      </div>
      <p className="p1_with reveal">
        We help founders and growing brands move from chaos to clarity by building structured brand systems with intention. 
        We believe clarity is not about simplicity, it’s about understanding. 
        That’s why we define before we design, and build systems before visuals.
      </p>
      <p className="p2_with reveal">
        Our work focuses on alignment, structure, and long-term thinking.
      </p>
      <p className="p3_with reveal">
        Not trends. Not noise. Not decoration.
      </p>
      <span className="reveal">
        We exists to bring focus, direction, and meaning to brands that want to grow with confidence.
      </span>
    </div>
  </div>
</section>
      {/* Services Section */}
      <section className="services reveal" id="service">
        <h2 className="title reveal">Services</h2>
        <p className="textt reveal">From strategy to systems, we build brands with clarity and intention.</p>

        <div className="ser reveal">
          <div className="row1">
            <div className="dv f1 pr">
              <div className="s">
                <h1>Brand Strategy</h1>
                <p>Define before design</p>
              </div>
              <img className="svg1" src="/imgs/Icons-01.png" alt="Strategy" />
            </div>
            <div className="dv f2 pr">
              <div className="s">
                <h1>Brand Identity</h1>
                <p>Meaning Before Visuals</p>
              </div>
              <img src="/imgs/Icons-02.png" alt="Identity" />
            </div>
            <div className="dv f3 pr">
              <div className="s">
                <h1>Visual Systems</h1>
                <p>Structure that scales</p>
              </div>
              <img src="/imgs/Icons-06.png" alt="Systems" />
            </div>
          </div>

          <div className="row1">
            <div className="dv f11 pr">
              <div className="s">
                <h1>Brand Guidelines</h1>
                <p>Consistency with clarity</p>
              </div>
              <img src="/imgs/Icons-03.png" alt="Guidelines" />
            </div>
            <div className="dv f22 pr">
              <div className="s">
                <h1>Website Experience</h1>
                <p>Digital expression of the brand system</p>
              </div>
              <img src="/imgs/Icons-04.png" alt="Web" />
            </div>
            <div className="dv f33 pr">
              <div className="s">
                <h1>Motion Direction</h1>
                <p>Movement with intention</p>
              </div>
              <img src="/imgs/Icons-05.png" alt="Motion" />
            </div>
          </div>
        </div>

        <div className="view2" onClick={() => navigate('/service')} style={{ cursor: 'pointer' }}>
          <p>More Details</p>
          <span className="material-symbols-outlined">arrow_outward</span>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="logos reveal">
        <h1 className="reveal">Brands That Trusted Us with their clarity</h1>
        <div className="logo-marquee1 reveal">
          <div className="marquee-track1">
            <img src="/imgs/Partners-01.png" alt="Partner" />
            <img className="im" src="/imgs/Partners-02.png" alt="Partner" />
            <img className="i_m" src="/imgs/Partners-03.png" alt="Partner" />
            <img src="/imgs/Partners-04.png" alt="Partner" />
            <img src="/imgs/Partners-05.png" alt="Partner" />
            <img src="/imgs/Partners-06.png" alt="Partner" />
            {/* تكرار الصور للحركة المستمرة */}
            <img src="/imgs/Partners-01.png" alt="Partner" />
            <img className="im" src="/imgs/Partners-02.png" alt="Partner" />
            <img className="i_m" src="/imgs/Partners-03.png" alt="Partner" />
            <img src="/imgs/Partners-04.png" alt="Partner" />
            <img src="/imgs/Partners-05.png" alt="Partner" />
            <img src="/imgs/Partners-06.png" alt="Partner" />
          </div>
        </div>
        <p className="reveal">Every logo represents a collaboration, not just a project.</p>
      </section>
    </main>
  );
};

export default Home;