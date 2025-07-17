// components/RegisterButton.tsx

import React from "react";

export const RegisterButton: React.FC = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdeduOTcI6jKOXP_Y5iyj0CZy_x9YxOsbdFx005IgGEqK14TA/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      className="fixed top-6 right-4 z-50 px-5 py-2 rounded-full backdrop-blur-md bg-white/10 text-black font-semibold shadow-lg border border-white/20 transition hover:bg-white/20 border-white/80"
    >
      Register
    </a>
  );
};
