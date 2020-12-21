import React from "react";
function Footer() {
  return (
    <footer>
      <div className="copyright-text">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
      <div className="my-name">
        Made with &#10084;&#65039; by &nbsp;
        <a
          href="https://gistcdn.githack.com/pradeepradyumna/073fe0b8033edaa6f5fd8364940d697f/raw/86c3a1391fbc32281d0160efd93932df2c47c8a4/index.html"
          target="_blank"
        >
          Pradeep Pradyumna
        </a>
      </div>
    </footer>
  );
}

export default Footer;
