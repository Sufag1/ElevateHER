import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';

const CountItem = ({ end, label }) => {
  const ref = useRef();
  const [value, setValue] = useState(0);
  
  return (
    <div className="impact-item card reveal">
      <h3 className="impact-number" ref={ref}>{value}</h3>
      <p className="impact-label">{label}</p>
    </div>
  );
};

const Impact = () => {
  const elRef = useRef();
  const items = [
    { end: 1200, label: 'Graduates' },
    { end: 95, label: 'Partners' },
    { end: 85, label: 'Programs' },
    { end: 32000, label: 'Hours Mentored' },
  ];

  useEffect(() => {
    const observed = elRef.current;
    if (!observed) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nodes = observed.querySelectorAll('.impact-number');
          nodes.forEach((node, i) => {
            const end = items[i].end;
            const duration = 1400;
            let start = null;
            const step = (ts) => {
              if (!start) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              node.textContent = Math.floor(progress * end).toLocaleString();
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(observed);
    return () => io.disconnect();
  }, []);

//   return (
//     <section className="impact-section section">
//       <div className="container" ref={elRef}>
//         <div className="impact-grid">
//           {items.map((it) => (
//             <div className="impact-item card" key={it.label}>
//               <h3 className="impact-number">0</h3>
//               <p className="impact-label">{it.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
};

export default Impact;