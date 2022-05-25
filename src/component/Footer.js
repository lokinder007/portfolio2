import React from "react"
import logo1 from "./pic/f-logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          
         Copyright &copy; {new Date().getFullYear()}. ReactApp |
          {""} All rights reserved | Powered by {""}
          <a
            href="https://www.google.com" target="_blank" rel="noopener noreferrer"
            style={{ cursor: "pointer" }} title="Visit The Site"
          >
            Lokinder007
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
