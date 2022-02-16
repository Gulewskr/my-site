import React from "react"
import { Navbar, LanguageSettings } from "."

export default function Layout ({ children }) {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <div>
        {children}
        </div>
        <footer>
            <LanguageSettings />
        </footer>
    </>
  )
}