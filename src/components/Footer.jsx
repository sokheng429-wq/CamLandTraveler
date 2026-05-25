import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">CL</div>

          <div>
            <h3>CamLand</h3>
            <p>Share your travel moments with the world 🌍</p>
          </div>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} CamLand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;