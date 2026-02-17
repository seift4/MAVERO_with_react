import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  // حالة لمعرفة هل إحنا في الدارك مود ولا لأ
  const [isDark, setIsDark] = useState(document.body.classList.contains("dark-mode"));

  useEffect(() => {
    // 1. منطق الـ Reveal (زي ما هو)
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
          el.classList.add("active");
        }
      });
    };

    // 2. مراقبة تغيير الـ Theme (الدارك مود)
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      observer.disconnect(); // تنظيف الـ observer
    };
  }, []);

  return (
    <section className="contact reveal" id="contact">
      <div className="div1">
        <a href="https://linktr.ee/mavero.agency" target="_blank" rel="noreferrer">
          <div className="div11">
            <h1>Get Clarity</h1>
            <p>Let’s Mavero it,</p>
            <p>with structure.</p>
            <span className="material-symbols-outlined">arrow_outward</span>
          </div>
        </a>

        <div className="first reveal">
          <div className="c3">
            <div>
              <p>CAIRO, EGYPT</p>
              <a href="mailto:creative@maveroagency.com"><p>creative@maveroagency.com</p></a>
              <p>00201060981508</p>
            </div>
            <div>
              <p>DUBAI, UAE</p>
              <p>Coming Soon</p>
            </div>
          </div>

          <div className="c2">
            <a href="https://www.instagram.com/mavero.agency/" target="_blank" rel="noreferrer"><p>INSTAGRAM</p></a>
            <a href="https://www.linkedin.com/company/maveroagency" target="_blank" rel="noreferrer"><p>LINKED IN</p></a>
          </div>

          <div className="c1">
            <Link to="/"><p>HOME</p></Link>
            <Link to="/work"><p>WORKS</p></Link>
            <Link to="/about"><p>ABOUT</p></Link>
            <Link to="/service"><p>SERVICES</p></Link>
          </div>

          <div className="c4">
            <a href="#Home">
              <span className="material-symbols-outlined">arrow_insert</span>
            </a>
            <a href="#Home"><p>TOP</p></a>
          </div>
        </div>
      </div>

      <div className="div2">
        <div className="div111">
          {/* تغيير الصورة بناءً على حالة الـ isDark */}
          <img 
            id="extra" 
            src={isDark ? "/imgs/Logo For web-07.svg" : "/imgs/Logo For web-01.svg"} 
            draggable="false" 
            alt="Logo" 
          />
        </div>
        <div className="secound">
          <div className="r1">
            <p>REGISTERED WITH THE GENERAL</p>
            <p>AUTHORITY FOR INVESTMENT®</p>
          </div>
          <div className="r2">
            <p>CR NO.</p>
            <p>778-695-557</p>
          </div>
          <div className="r3">
            <p>2026©</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
          <div className="r4">
            {/* تغيير الفيديو بناءً على حالة الـ isDark مع استخدام key لإعادة التشغيل */}
            <video key={isDark} id="heroImg" autoPlay loop muted playsInline>
              <source 
                src={isDark ? "/imgs/color glass effect.mp4" : "/imgs/color glass effect (1).mp4"} 
                type="video/mp4" 
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;