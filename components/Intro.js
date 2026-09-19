import React, { useEffect, useState } from 'react';

// Shown once per browser session, on the first page opened: a coral hairline
// draws under the name, then the curtain lifts off the top of the page.
// The animation is pure CSS with fill-mode forwards, so the curtain ends lifted
// and hidden even if the unmount timer below never runs.
const Intro = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let seen = true;
    try {
      seen = window.sessionStorage.getItem('seen-intro') === '1';
      window.sessionStorage.setItem('seen-intro', '1');
    } catch (e) {
      seen = false; // Private browsing — show it rather than break.
    }
    if (seen) return undefined;

    setShow(true);
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="intro" aria-hidden="true" onClick={() => setShow(false)}>
      <div style={{ padding: '0 24px' }}>
        <div className="intro-name">Shiv Rathod</div>
        <div className="intro-rule" />
      </div>
    </div>
  );
};

export default Intro;
