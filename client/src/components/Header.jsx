import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className='header-flex'>
        <a href='/'><h1>Tierlist Maker</h1></a>
        <nav>
          <a className={document.location.pathname === "/" ? "current" : ""} href="/">Home</a>
          <a className={document.location.pathname.includes("/create") ? "current" : ""} href="/">Create</a>
          <a className={document.location.pathname.includes("/view") ? "current" : ""} href="/view">View</a>
          <a className={document.location.pathname.includes("/profile") ? "current" : ""} href="/login">Profile</a>
          <a href='/login'>Log In</a>
        </nav>
      </div>
      <hr />
    </header>
  )
}
