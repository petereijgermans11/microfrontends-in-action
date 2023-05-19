import React, { useEffect, useState } from "react";
import shoppingcart from './assets/shoppingcart.png';
import './index.scss';

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const handleCustomEvent = (event) => {
      if (event.detail.action === 'increment') {
        handleIncrement();
      }
    };

    document.addEventListener('cartUpdate', handleCustomEvent);

    return () => {
      document.removeEventListener('cartUpdate', handleCustomEvent);
    };
  }, [count]);

  return (
    <header className="header">
        <h1>
          <a href="/">
              <h1><u>Browse outdoor events</u></h1>
          </a>
      </h1>
      <div className="relative">
        <img src={shoppingcart} className="shoppingcart"/>
        <span className="badge">
           {count}
        </span>
      </div>

    </header>
    
  );
}
