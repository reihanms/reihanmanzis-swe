import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-5 bg-primary-500/10 backdrop-blur-lg border-t border-primary-400/20">
      <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Reihan Ms.</p>
    </footer>
  );
}

