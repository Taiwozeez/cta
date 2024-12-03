import Image from "next/image";
import React, { useEffect } from "react";

const Ctaside = () => {
  useEffect(() => {
    const button = document.querySelector('.banner-content button');

    const handleButtonClick = () => {
      button.classList.add('shake');
      setTimeout(() => {
        button.classList.remove('shake');
      }, 300);
    };

    button.addEventListener('click', handleButtonClick);

    return () => {
      button.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <main>
      <section className="banner">
        <div className="floating-object left" />
        <div className="floating-object right" />
        <div className="floating-object middle-1" />
        <div className="floating-object middle-2" />
        <div className="banner-content">
          <h1>
            Transform Your Future by Mastering Digital Skills with the Best Online Courses.
          </h1>
          <button>Start Learning</button>
        </div>
      </section>
    </main>
  );
};

export default Ctaside;
