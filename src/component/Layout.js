import React from "react"
import { Navbar, Footer } from "."

export default function Layout ({ children }) {
  return (
    <>
        <header className="grid">
            <Navbar />
        </header>
        <div className="container mx-auto px-3 pt-16 md:pt-28 pb-16">
          {children}
        </div>
        <footer className="grid text-xs	md:text-base">
            <Footer/>
        </footer>
    </>
  )
}