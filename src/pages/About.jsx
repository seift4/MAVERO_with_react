import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
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
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>
      <img className="img1_aboute" src="/imgs/Rectangle 22 (3).png" alt="About Hero" />
      
      <section className="about_web reveal" id="a">
        <div className="divv1">
          <h1>Strategic Creative Agency</h1>
        </div>
        <div className="divv2">
          <p className="about_p">We help founders and growing brands move from chaos to clarity...</p>
          <p className="about_p1">Our work focuses on alignment, structure, and long-term thinking.</p>
          <p className="about_p2">Not trends. Not noise. Not decoration.</p>
          <span>We exists to bring focus, direction, and meaning to brands that want to grow with confidence.</span>
        </div>
      </section>

      <img className="img2_about reveal" src="/imgs/Rectangle 23.png" alt="About Bottom" />
    </main>
  );
};

export default About;