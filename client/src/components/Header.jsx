import React from 'react'
import "./Header.css"

export default function Header() {
  console.log(document.location.pathname);
  return (
    <header>
      <div className='header-flex'>
        <h1>Tierlist Maker</h1>
        <nav>
          <a className={document.location.pathname === "/" ? "current" : ""} href="/">Home</a>
          <a className={document.location.pathname.includes("/create") ? "current" : ""} href="/">Create</a>
          <a className={document.location.pathname.includes("/view") ? "current" : ""} href="/view">View</a>
          <a className={document.location.pathname.includes("/profile") ? "current" : ""} href="/">Profile</a>
          <a>Log In</a>
        </nav>
      </div>
      <hr />
    </header>
  )
}
