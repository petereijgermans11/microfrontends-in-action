import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between align-middle p-4 bg-yellow-500 text-white w-100">
        <h1>
          <a href="/">
              <h1><u>Browse outdoor events</u></h1>
          </a>
      </h1>
    </header>
  );
}
