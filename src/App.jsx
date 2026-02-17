import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. استيراد المكون الجديد اللي بيطلعك لفوق
import ScrollToTop from './ScrollToTop'; 

// استيراد الـ Components الثابتة في كل الصفحات
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

// استيراد الصفحات (Pages)
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Work from './pages/Work';

// استيراد ملف الـ CSS الرئيسي
import './styles/global.css'; 

function App() {
  return (
    <Router>
      {/* استدعاء المكون هنا عشان يشتغل مع كل تغيير صفحة */}
      <ScrollToTop /> 

      <div className="App">
        {/* العناصر اللي بتظهر فوق أي صفحة */}
        <Loader />
        <CustomCursor />
        <Navbar />

        {/* نظام التنقل بين الصفحات (Routing) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/work" element={<Work />} />
          
          {/* لو حد كتب لينك غلط يرجعه للـ Home */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* الـ Contact (Footer) بيظهر في كل الصفحات */}
        <Contact />
      </div>
    </Router>
  );
}

export default App;