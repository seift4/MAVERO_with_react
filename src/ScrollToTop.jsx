import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. نقفل الـ Smooth scrolling فوراً
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    // 2. نطلع فوق "قبل" ما المتصفح يلحق يرسم الصفحة
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    // 3. نرجع الاستايل القديم بعد لحظة
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalStyle;
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;