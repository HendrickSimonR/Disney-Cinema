import React from 'react'

function Footer() {
  return (
    <div className={!window.location.href.includes('home') ? "footer brand" : "footer"}>
        <h1 className="footer-details">Thank you for stopping by!
        This website is not-for-profit.
        I simply love all things Disney!
        Please contact me at my Github for any queries.</h1>
    </div>
  )
}

export default Footer;