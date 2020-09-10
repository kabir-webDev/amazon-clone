import React from "react";

function Footer() {
  return (
    <div>
      <footer
        style={{
          textAlign: "center",
          color: "white",
          textDecoration: "none",
          backgroundColor: "#131921",
          padding: "10px",
        }}
      >
        <div className="row">
          <div className="twelve columns">
            <div className="social-links">Amazon Clone</div>
            <div className="copyright">
              &copy; All Rights Reserved by Kabir Hasan
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
