import React from "react"
import { Navbar, LanguageSettings } from "."

export default function Layout ({ children }) {
  return (
    <>
        <header className="grid min-h-24 h-24">
            <Navbar />
        </header>
        <div className="container mx-auto">
          {children}
        </div>
        <footer>
            <LanguageSettings/>
        </footer>
    </>
  )
}