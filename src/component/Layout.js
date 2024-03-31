import React from "react";
import { Navbar, Footer } from ".";

import "@styles/pageStyle.css";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <title className="">{pageTitle}</title>
      <div class="bg-image"></div>
      <main className="mx-auto max-w-full">
        <header className="grid">
          <Navbar />
        </header>
        <div className="container mx-auto px-3 pt-16 md:pt-28 pb-16 md:pb-28 text-white">
          {children}
        </div>
        <footer className="grid text-xs	md:text-base">
          <Footer />
        </footer>
      </main>
    </>
  );
}
