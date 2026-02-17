import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  // مصفوفة الصور بناءً على الـ Theme (تم تصحيح المسار)
  const themeImages = {
    extraImg: isDark ? "/imgs/Logo For web-07.svg" : "/imgs/Logo For web-01.svg",
  };

  // تبديل الدارك مود
  useEffect(() => {
  
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // --- 7. تغيير شكل الـ Nav عند السكرول ---
    const nav = document.querySelector('.nav');
    const handleScroll = () => {
      if (nav) {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
      }
    };

    // --- 8. تفعيل الروابط عند الوصول للسكشن ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
      const currentPath = window.location.pathname; // المسار الحالي (مثلاً /work)
      const currentHash = window.location.hash;    // الهاش الحالي (مثلاً #work)

      // بنمسح الـ active من الكل قبل ما نبدأ التقييم
      navLinks.forEach(link => link.classList.remove("active"));

      navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        // 1. منطق خاص بصفحة والـ WORKS
        if (currentPath === "/work" || currentHash === "#work") {
          if (linkHref.includes("work")) link.classList.add("active");
        }

        // 2. منطق خاص بصفحة والـ SERVICES
        else if (currentPath === "/service" || currentHash === "#service") {
          if (linkHref.includes("service")) link.classList.add("active");
        }

        // 3. منطق خاص بصفحة والـ ABOUT
        else if (currentPath === "/about" || currentHash === "#about") {
          if (linkHref.includes("about")) link.classList.add("active");
        }

        // 4. منطق خاص بصفحة والـ CONTACT
        else if (currentPath === "/contact" || currentHash === "#contact") {
          if (linkHref.includes("contact")) link.classList.add("active");
        }

        // 5. منطق خاص بالـ HOME (لو مفيش سكشن أو مسار معين)
        else if ((currentPath === "/" || currentPath.includes("Home")) && !currentHash) {
          if (linkHref.includes("home")) link.classList.add("active");
        }
      });
    }

    // IntersectionObserver لتفعيل اللينكات أثناء السكرول
    let sectionObserver;
    if (sections.length > 0) {
      const observerOptions = { root: null, threshold: 0.6 };
      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href").includes(`#${id}`)) {
                link.classList.add("active");
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => sectionObserver.observe(section));
    }

    // تشغيل الدوال وإضافة المستمعين
    updateActiveLink();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("hashchange", updateActiveLink);
      if (sectionObserver) {
        sections.forEach(section => sectionObserver.unobserve(section));
      }
    };
  }, [location]); // إعادة التشغيل عند تغيير الصفحة

  return (
    <div className="nav">
      <a href="index.html#home">
        <img id="extraImg" src={themeImages.extraImg} draggable="false" alt="Logo" />
      </a>

      <ul className="nv">
        <li><a href="index.html#Home" className="nav-link" data-text="HOME"><span>HOME</span></a></li>
        <li><a href="index.html#work" className="nav-link" data-text="works"><span>WORKS</span></a></li>
        <li><a href="index.html#about" className="nav-link" data-text="about"><span>ABOUT</span></a></li>
        <li><a href="index.html#service" className="nav-link" data-text="services"><span>SERVICES</span></a></li>
        <li><a href="index.html#contact" className="nav-link" data-text="CONTACT US"><span>Contact Us</span></a></li>

        <div className="la">
          <li className="li">
            <a id="darkToggle" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              <span className="material-symbols-outlined arrow">hdr_weak</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;