import React, { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    // 1. تأثير ظهور العناصر (Reveal)
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

    // 2. تأثير الـ 3D Card (نفس الكلاسات القديمة)
    const cards = document.querySelectorAll('.pr');
    cards.forEach(card => {
      card.onmousemove = (e) => {
        const { width, height, left, top } = card.getBoundingClientRect();
        const rotateX = (-(e.clientY - (top + height / 2)) / (height / 2)) * 15;
        const rotateY = ((e.clientX - (left + width / 2)) / (width / 2)) * 15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      card.onmouseleave = () => card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>
      {/* الصورة العلوية */}
      <img className="service_imgg" src="/imgs/Rectangle_service.png" alt="Service Hero" id='service' />

      <section className="service_web">
        <div className="service_1">
          {/* الكروت العلوية - استخدمنا className وحافظنا على الأسماء ff1, ff2.. */}
          <div className="dvv ff1 pr reveal">
            <div className="ss">
              <h1>Brand Strategy</h1>
              <p>Define before design</p>
            </div>
            <img className="svg1" src="/imgs/Icons-01.png" alt="" />
          </div>

          <div className="dvv ff2 pr reveal">
            <div className="ss">
              <h1>Brand Identity</h1>
              <p>Meaning Befor Visuals</p>
            </div>
            <img src="/imgs/Icons-02.png" alt="" />
          </div>

          <div className="dvv ff3 pr reveal">
            <div className="ss">
              <h1>Visual Systems</h1>
              <p>Structure that scales</p>
            </div>
            <img src="/imgs/Icons-06.png" alt="" />
          </div>

          <div className="dvv ff11 pr reveal gg">
            <div className="ss">
              <h1>Brand Guidelines</h1>
              <p>Consistency with clarity</p>
            </div>
            <img src="/imgs/Icons-03.png" alt="" />
          </div>

          <div className="dvv ff22 pr reveal gg">
            <div className="ss">
              <h1>Website Experience</h1>
              <p>Digital expression of the brand system</p>
            </div>
            <img src="/imgs/Icons-04.png" alt="" />
          </div>

          <div className="dvv ff33 pr reveal gg">
            <div className="ss">
              <h1>Motion Direction</h1>
              <p>Movement with intention</p>
            </div>
            <img src="/imgs/Icons-05.png" alt="" />
          </div>
        </div>

        {/* سكشن التفاصيل - service_2 */}
        <div className="service_2">
          {/* سكشن 1 */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>We start by defining the brand before shaping it. This phase focuses on clarity, positioning, and decision-making, setting a solid foundation that guides every visual and verbal outcome.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Purpose, vision, and mission</li>
                <li>Target audience & insights</li>
                <li>Brand positioning</li>
                <li>Brand personality & values</li>
                <li>Core brand narrative</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>

          {/* سكشن 2 */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>We translate strategy into a distinctive and intentional visual identity. Every element is designed to communicate purpose, not decoration.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Logo system</li>
                <li>Typography system</li>
                <li>Color system</li>
                <li>Core visual principles</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>

          {/* سكشن 3 (Visual Systems) */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>Beyond the logo, we design visual systems that allow the brand to grow consistently across platforms and contexts.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Graphic systems & layouts</li>
                <li>Patterns and brand assets</li>
                <li>Image direction</li>
                <li>Motion principles</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>

          {/* سكشن 4 (Guidelines) */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>We document the brand into a clear, usable system that ensures internal and external consistency over time.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Logo usage rules</li>
                <li>Color & typography usage</li>
                <li>Visual system guidelines</li>
                <li>Do’s & Don’ts</li>
                <li>Handoff-ready documentation</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>

          {/* سكشن 5 (Website) */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>We design websites as an extension of the brand, not just interfaces. The focus is on clarity, structure, and brand presence, not complex product UX.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Brand-driven UI direction</li>
                <li>Visual hierarchy & layout logic</li>
                <li>Landing pages & brand websites</li>
                <li>Design-ready handoff for development</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>

          {/* سكشن 6 (Motion) */}
          <div className="ser_2 reveal">
            <div className="ser_3">
              <p>We define how the brand moves subtly, clearly, and with purpose. Motion is used to enhance recognition, not distract from meaning.</p>
              <h1>Includes:</h1>
              <ul>
                <li>Logo animation</li>
                <li>Motion principles</li>
                <li>Short brand motion assets</li>
              </ul>
            </div>
            <a href="#contact">
              <div className="view3 reveal">
                <p>Let's Discuss !</p>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;