import React, { useEffect } from 'react';

const Work = () => {
  
  useEffect(() => {
    // Reveal Effect
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
      <img className="work_imgg" src="/imgs/Rectangle 22.png" alt="Hero" id="work" />

      <div className="works_web reveal" id="w">
        <h1>Selected Works</h1>

        <div className="work_1">
          {/* مشروع 1 */}
          <div className="work_img">
            <img src="/imgs/pics for web-01.png" alt="ALBA" />
            <div><p>ALBA</p><p>2024</p></div>
          </div>

          {/* مشروع 2 */}
          <div className="work_img">
            <img src="/imgs/Square pics-02.png" alt="Eventers" />
            <div><p>Eventers</p><p>2024</p></div>
          </div>

          {/* مشروع 3 */}
          <div className="work_img">
            <img src="/imgs/Rectangle 18.png" alt="Digital Experience" />
            <div><p>Digital Experience</p><p>2026</p></div>
          </div>

          {/* مشروع 4 */}
          <div className="work_img">
            <img src="/imgs/Florausin.png" alt="Floraison" />
            <div><p>Floraison</p><p>2023</p></div>
          </div>

          {/* مشروع 5 */}
          <div className="work_img">
            <img src="/imgs/menera-01.jpg.png" alt="Menera" />
            <div><p>Menera</p><p>2025</p></div>
          </div>

          {/* مشروع 6 */}
          <div className="work_img">
            <img src="/imgs/Square pics-01.png" alt="Eventers" />
            <div><p>Eventers</p><p>2024</p></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;